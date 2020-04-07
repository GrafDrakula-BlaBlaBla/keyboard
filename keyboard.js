const skeys = {
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'delete',
  Tab: 'Tab',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  CapsLock: 'Caps',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  Quote: "'",
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ShiftRight: 'Shift',
  ControlLeft: 'ctrl',
  AltLeft: 'Alt',
  MetaLeft: 'WIN',
  Space: ' ',
  MetaRight: 'WIN',
  AltRight: 'Alt',
};

const skeysRu = {
  Backquote: ']',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'delete',
  Tab: 'Tab',
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  Backslash: 'ё',
  CapsLock: 'Caps',
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  Semicolon: 'ж',
  Quote: 'э',
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь',
  Comma: 'б',
  Period: 'ю',
  Slash: '/',
  ShiftRight: 'Shift',
  ControlLeft: 'ctrl',
  AltLeft: 'Alt',
  MetaLeft: 'WIN',
  Space: ' ',
  MetaRight: 'WIN',
  AltRight: 'Alt',
};

window.addEventListener('load', () => {
  wrapper();
  buildKeys(skeys, skeysRu);
});

document.addEventListener('keydown', (event) => {
  const keys = document.querySelectorAll('.key');
  let keyLayout = skeys; // раскладка клавиатуры
  if (event.altKey && event.shiftKey) {
    let lang = localStorage.lang || 'en';

    if (localStorage.lang === 'en') {
      lang = 'ru';
      keyLayout = skeysRu;
    } else {
      lang = 'en';
    }
    localStorage.lang = lang;

    highlight();
    changeLang(keys, keyLayout);
  }
});

function wrapper() {
  const body = document.querySelector('body');
  const wrapper = document.createElement('div');
  const textArea = document.createElement('textarea');
  const messege = document.createElement('p');
  const keyboard = document.createElement('div');

  wrapper.classList.add('wrapper');
  textArea.classList.add('textarea');
  textArea.setAttribute('autofocus', 'autofocus');
  messege.innerHTML = 'language change Alt + Shift';
  keyboard.classList.add('keyboard');

  body.append(wrapper);
  body.append(textArea);
  body.append(messege);
  body.append(keyboard);
}

function buildKeys(skeys, skeysRu) {
  const keyboard = document.querySelector('.keyboard');
  for (const k in skeys) {
    const key = document.createElement('div');
    if (skeys.hasOwnProperty(k)) {
      key.classList.add('key');
      key.setAttribute('id', `${k}`);
      keyboard.append(key);
    }
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach((elem, i) => {
    switch (i) {
      case 13:
        elem.classList.add('delete');
        break;
      case 14:
        elem.classList.add('tab');
        break;
      case 28:
        elem.classList.add('capsenter');
        break;
      case 40:
        elem.classList.add('capsenter');
        break;
      case 41:
        elem.classList.add('shift');
        break;
      case 52:
        elem.classList.add('shift');
        break;
      case 53:
        elem.classList.add('ctrl');
        break;
      case (54 || 58):
        elem.classList.add('alt');
        break;
      case (55 || 57):
        elem.classList.add('command');
        break;
      case 56:
        elem.classList.add('span');
        break;
    }
  });

  intype(skeys, skeysRu);
}

function intype(skeys, skeysRu) {
  const keys = document.querySelectorAll('.key');
  let keyLayout = skeys;
  if (localStorage.lang === 'en') {
    keyLayout = skeys;
  } else {
    keyLayout = skeysRu;
  }
  for (const [i, key] of keys.entries()) {
    if (key.id === (Object.keys(keyLayout)[i])) {
      key.textContent = `${Object.values(keyLayout)[i]}`;
    }
  }
  highlight();
}

function highlight() {
  const textarea = document.querySelector('.textarea');
  const keys = document.querySelectorAll('.key');

  textarea.addEventListener('keydown', (event) => {
    const { code } = event;
    if (event.getModifierState('CapsLock')) {
      upperCase();
    }
    for (const key of keys) {
      if (key.id === code) {
        if (code === 'ShiftLeft' || code === 'ShiftRight') {
          upperCase();
        }

        key.classList.add('active');
        extinguish(textarea, event.code, key);
      }
    }
  });
}

function extinguish(area, codekey, key) {
  const textarea = area;
  const code = codekey;
  textarea.addEventListener('keyup', (event) => {
    // debugger
    if (!event.getModifierState('CapsLock')) {
      lowerCase();
      key.classList.remove('active');
    }

    if (event.code === code && key.classList.contains('active')) {
      if (code === 'ShiftLeft' || code === 'ShiftRight') {
        lowerCase();
      }
      key.classList.remove('active');
    }
  });
}

function changeLang(keys, keyLayout) {
  keys.forEach((key, i) => {
    if (key.id === Object.keys(keyLayout)[i]) {
      key.textContent = Object.values(keyLayout)[i];
    }
  });
}

function upperCase() {
  const keys = document.querySelectorAll('div[id*="Key"]');
  let text = null;
  keys.forEach((elem) => {
    text = elem.textContent.toUpperCase();
    elem.textContent = text;
  });
}

function lowerCase() {
  const keys = document.querySelectorAll('div[id*="Key"]');
  let text = null;
  keys.forEach((elem) => {
    text = elem.textContent.toLowerCase();
    elem.textContent = text;
  });
}
