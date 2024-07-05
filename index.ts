#! /usr/bin/env node
interface ibankaccount{
    credit (amount:number) : void;
    debit (amount:number) : void;
}

// class
class Bankaccount implements ibankaccount{
    accountbalance : number;
    constructor (accountbalance:number){
        this.accountbalance=accountbalance
    }

    // publically credit
    public credit(amount: number) {
        if (amount>0){
            this.accountbalance+=amount
            console.log("Credit sucesfully get into new account and your balance is : "+this.accountbalance);
        }
        else{
            console.log("Credit Unsucessful")
        }
    }
// publically debit
public debit(amount: number) {
    if (amount>0 && amount<this.accountbalance){
        this.accountbalance-=amount
        console.log("debit sucessfully share in new account balance:"+this.accountbalance)
    }  else{
        console.log("debit unsucessfully")
    }
 }
}

// customer details
class Customer {
    person : {
        firstname: string;
        lastname: string;
    }

    age : number;
    gender:string;
    mobile_number: number;
    bankaccount: Bankaccount;


    constructor(person: {firstname:string,lastname:string},age:number,gender:string,mobile_number:number,bankaccount:Bankaccount){
    // this property utilization
    this.person=person,
    this.age = age;
    this.gender=gender;
    this.mobile_number=mobile_number;
    this.bankaccount=bankaccount;



}
// publically user access
public display(){
    console.log("Name: "+this.person.firstname+" "+this.person.lastname);
    console.log("Age:" + this.age)
    console.log("Gender:" + this.gender)
    console.log("Mobile Number:" + this.mobile_number)
    console.log("Amount In Bank: " +this.bankaccount.accountbalance)
    console.log()
}
}

const a1=new Bankaccount(800)
const c1=new Customer({firstname:"Saba",lastname:"Sheikh"},23,"female",3248294933,a1);
c1.display()
c1.bankaccount.debit(500)
console.log()


const a2=new Bankaccount(500)
const c2=new Customer({firstname:"Adil",lastname:"Sheikh"},28,"male",3248294934,a2);
c2.display()
c2.bankaccount.debit(200)
console.log()