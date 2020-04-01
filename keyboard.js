const skeys = {
    "key0" : "0",
    "key1" : "1",
    "key2" : "2",
    "key3" : "3",
    "key4" : "4",
    "key5" : "5",
    "key6" : "6",
    "key7" : "7",
    "key8" : "8",
    "key9" : "9",
    "key10" : "0",
    "key11" : "1",
    "key12" : "2",
    "key13" : "3",
    "key14" : "4",
    "key15" : "5",
    "key16" : "6",
    "key17" : "7",
    "key18" : "8",
    "key19" : "9",
    "key20" : "0",
    "key21" : "1",
    "key22" : "2",
    "key23" : "3",
    "key24" : "4",
    "key25" : "5",
    "key26" : "6",
    "key27" : "7",
    "key28" : "8",
    "key29" : "9"
}

window.addEventListener(`load`, () => {
    event.preventDefault;
    wrapper();
    buildKeys();
});

    function wrapper() {
        let body = document.querySelector(`body`);
        let wrapper = document.createElement(`div`);
        let textArea = document.createElement(`textarea`);
        let keyboard = document.createElement(`div`);

        wrapper.classList.add(`wrapper`);
        textArea.classList.add(`textarea`);
        keyboard.classList.add(`keyboard`);

        body.append(wrapper);
        body.append(textArea);
        body.append(keyboard);
    }

    function buildKeys() {
        let keyboard = document.querySelector(`.keyboard`);

        for(let i = 0; i < 30; i++) {
            let key = document.createElement(`div`);
            key.classList.add(`key`);
            key.setAttribute(`id`, `key${i}`);
            keyboard.append(key);
        }
// debugger
        intype();
    }

    function intype() {
        let k = document.querySelectorAll(`.key`);
        let value = ''
        for(let [i, key] of k.entries()) {
            // console.log(typeof key.id);
            // console.log(Object.keys(skeys)[i]);
            console.log(skeys[`key${i}`]);
            // if(key.id === (Object.keys(skeys)[i])) {
            //     console.log(i);
            // }
            value = skeys[`key${i}`];
            key.textContent = `${value}`;
            
        }
        
    }

    

