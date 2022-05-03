
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


// function newDeposit(){
//     var inputName= document.getElementById("accName");
//     var inputDeposit= document.getElementById("deposit");
//     var inputNewDeposit= document.getElementById("newDeposit");

//     class Banking{
//         #name;
//         #depo;
//         #newDepo;

//         constructor(){
//             this.#name= inputName.value;
//             this.#depo= inputDeposit.value;
//             this.#newDepo= inputNewDeposit.value;
//         }


//         getBanking(){
//             if(this.#newDepo.value>0){
//                 this.#depo.value += this.#newDepo.value;
//             }
//             return "Account Name: " +this.#name +", Balance: " +this.#depo;
//         }
//     }

//     const output=  new Banking();
//     document.getElementById("demo").innerHTML=output.getBanking();
// }