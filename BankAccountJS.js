(()=>{
    let accountInfoList = [];

let DOM = (function IIFE(){
   return {
        name: document.getElementById("name"),
        deposit: document.getElementById("deposit"),
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



function create(){
    var inputName= document.getElementById("accName");
    var inputDeposit= document.getElementById("deposit");
    var inputNewDeposit= document.getElementById("newDeposit");
    var intputDebit= document.getElementById("debit");

    class Banking{
        #name;
        #depo;
        #newDepo;
        #debit

        constructor(){
            this.#name= inputName.value;
            this.#depo= parseInt(inputDeposit.value);
            this.#newDepo= parseInt(inputNewDeposit.value);
            this.#debit= parseInt(intputDebit.value);
        }

        getBanking(){
            return "Account Name: " +this.#name +", Balance: " +this.#depo;
        }

        getNewBanking(){
            this.#depo = this.#depo +this.#newDepo;
            return "Account Name: " +this.#name +", Balance: " + this.#depo;
        }

        getDebit(){
            this.#depo = this.#depo -this.#debit;
            return "Account Name: " +this.#name +", Balance: " + this.#depo;
        }
    }

    const output=  new Banking();
    document.getElementById("demo").innerHTML=output.getBanking();
    document.getElementById("demo2").innerHTML=output.getNewBanking();
    document.getElementById("demo3").innerHTML=output. getDebit();
}
