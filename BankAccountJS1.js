(()=>{
    let accountInfoList = [];

let DOM = (function IIFE(){
   return {
        name: document.getElementById("name"),
        deposit: document.getElementById("deposits"),
        submit: document.getElementById("submit"),
        textArea: document.getElementById("textArea")
    };
})();

let createAcount = (name, deposit) => {
    return {
        name: name,
        deposit: deposit
    }
};

let btnHandler = () =>{
        if(DOM.name.value != "" && DOM.deposit.value != ""){
            accountInfoList.push(createAcount(DOM.name.value, DOM.deposit.value));
            DOM.textArea.innerHTML = "";
            accountInfoList.forEach(element => {
        
                DOM.textArea.innerHTML += "Account Name: " + element.name + " Balance : " + element.deposit + "\n";
                DOM.name.value = "";
                DOM.deposit.value = "";
            });
        }
       
    };

DOM.submit.addEventListener("click", btnHandler);
})();

