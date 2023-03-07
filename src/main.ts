const name:string="salam";
console.log(name);

type users<T>={
  name:string; 
  age?:string;
  nickname:T;
}

interface Userlist extends users<string>{
lastname:string;
}

function list(user:Userlist)
{
  return "salam dorod Ziad be "+user.name+" "+user.lastname;

}

console.log(list({
  name:"ariyan",
  lastname:"salari",
  nickname:"ariyan bl "

}))

const arr:Array<string,number>=["ali",20];
console.log(arr)

const array:Array<number>=[1,2,3,4,5];
console.log(array);

const arr1:number[]=[1,2,3,4,5];
console.log(arr1)
const arr2:string[]=["ali","reza","morteza"];
console.log(arr2)
const arr3:[number,string,number]=[20,"reza",11]
console.log(arr3)

let variable:any="ariyan"

variable=20;
variable="baz ariyan"
console.log(variable)


function saymyname(name:string):void{
  console.log(name)
}
saymyname("ali")

type Login=string;

const login:Login="haji bbin ino"

type ID=string|number;
const id:ID=22;
const id2:ID="chetori";

enum Membership{
  simple,
  second,
  third
}

const member=Membership.second
console.log(member)
const member1=Membership[2];
console.log(member1)