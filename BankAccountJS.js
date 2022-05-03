function create(){
    var inputName= document.getElementById("accName");
    var inputDeposit= document.getElementById("deposit");

    class Banking{
        #name;
        #depo

        constructor(){
            this.#name= inputName.value;
            this.#depo= inputDeposit.value;
        }

        getPrivateMessage(){
            return "Account Name: " +this.#name +" Balance: " +this.#depo;
        }
    }

    const output=  new Banking();
    document.getElementById("demo").innerHTML=output.getPrivateMessage();
}