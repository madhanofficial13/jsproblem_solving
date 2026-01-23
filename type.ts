let nume:number = 25;
let str:string = "madhan"
let isActive:boolean=true

console.log(nume);
console.log(str);
console.log(isActive);

let numbers:number[] = [1,2,3,4];
let strg:Array<string>=["madhan","mithran","raj"]
console.log(numbers);
console.log(strg);
let tupe:[number,string] = [25,"madhan"]
console.log(tupe);



function add(a:number,b:number):number{

    return a + b;

}

console.log(add(2,3));

function details1(name?:string){ //optinal
    console.log(name);
    
}
console.log(details1("manimaran"));

function details3(age:number = 100){
    console.log(age);
    
}
console.log(details3());

/* function details(name:string,email:string,age:number):[string,string,number]{
    return `${name}+${email}+${age}`
}

console.log(details("madhan","joshva",20)); */

let user1:{name:string,email:string,age:number,isActve:boolean}={
    name:"madhan",
    email:"madhanjoshva@gmail.com",
    age:21,
    isActve:true
}

console.log(user1);

let response:{name:string, readonly no:number,area:string,address:{city:string,pincode:number,state:string}}={
    name:"joshva",
    no:26,
    area:"k.p.park",
    address:{
        city:"chennia",
        pincode:600112,
        state:"tamilnadu"
    }
}
console.log(response);

interface User{
    isActive:boolean,
    bank:number,
    cvc:number,
    nomini:string
}

let user4:User

interface Admin extends User{
    role:"admin"
}

interface Employee{
    [key:string]:number
}


const em:Employee = {
    math:40,
    english:90
}
console.log(em);


function enable(user3:User){
    console.log(user3.bank);
    
}

type Function1={
    name:string,
    grett:()=>string
}

const func : Function1={
    name:"madhan",
    grett() {
        return `${"madhan"}`
    },
}
console.log(func);

type Category = "mobile"|"laptop"|"camera"

type Product={
    readonly id:number,
    name:string,
    price:number,
    discount?:number,
    category:Category

}

let id:number|string ; // union type dont know exact value but know all possible way that can pass

id = 192732;
console.log(id);

let status1: "success"|"failure"|"pending"//literal type to exact fixed value

status1 = "success"
console.log(status1);



function Status1(state:string|number|boolean){
    if(typeof state==="string"){
        return state.toUpperCase()
    }else if(typeof state==="number"){
        return state.valueOf()
    }else{
        return state
    }
}
console.log(Status1("madhan"));



type Details = {
    name:string,
    email:string,
    num:number
}

type deta = Readonly<Details>
function Emap(data:deta){
    return `${data.name} ${data.email} ${data.num}`
}
console.log(Emap({name:"madhan",email:"madhanjoshva44@gmail.com",num:9876}));

const user = {
    name:"maddy",
    email:"madhanjoshva",
    password:"mithra"
}

type User4 = typeof user;

/* console.log(User4);

const Keys = {
    role:"admin",
    name:"mbagd",
    email:"kajjhhg"
}

type User5 = keyof Keys */

const roles = ["admin", "user", "guest"] as const;
type role1 = typeof roles[number];

console.log(roles);

function identified<T>(value:T):T{
    return value;
}

console.log(identified<string>("madhan"));

const num = identified(6)
const string2 = identified("madhan")
console.log(num.valueOf());
console.log(string2.toLowerCase())

function Gen<T,U>(a : T, b : U): T & U{
    return  {...a,...b};
}

let con = Gen({name:"madhan"},{age:21})
console.log(con);


function Gener<T,K extends keyof T>(obj:T,key:K){

    return obj[key];

}

let use = {name:"madhan",email:"email"}


console.log(Gener(use,"name"));

type Apiresponse<T>={
    data:T,
    error:string|null
}

type user = {
    name:string
}

const res:Apiresponse<user>={
    data:{name:"madhan"},
    error:null
}
console.log(res);

function indentify<T>(value:T):T{
    return value;
}

const str1 = indentify("sangamithra");
console.log(str1.toUpperCase());

function firstElement<T>(value:T[]):T{
    return value[0]
}

const str2 = firstElement(["m","a","d","h"])
console.log(str2);


function lengthFind<T  extends { length : number} > (value:T) : number{

    return value.length

}
const len = lengthFind("madhan")
console.log(len);

function objekey<T,K extends keyof T>(obj:T,key:K):T[K]{
return obj[key];
}

const res4 = {name:"madhanraj",email:"madhanjoshva44"}

console.log(objekey(res4,"no"));


function mergeTwo<T,U>(a:T,b:U):T &U{
    return {...a,...b}

}
console.log(mergeTwo({api:"/api/user"},{res:"/res/user2"}));

type Apiresponse1<T,U> = {
data:T,
error:string|null,
status:string
isActive:U
}

type User5 = {
    name:string,
}
type active = {
    isActive:boolean
}
const res3 : Apiresponse1<User5,active> = {
    data:{name:"manikam"},
    error:"manaiiuug",
    status:"success",
    isActive:{isActive:false}
}
console.log(res3);

class Detaisl {
    name:string;
    email:string;
    password:number;

    constructor(name:string,email:string,password:number){
        this.name = name;
        this.email = email;
        this.password = password
    }
}

const result = new Detaisl("madhan","madhanjoshva44@gmail.com",1092837);

console.log(result.name);
console.log(result.email);
console.log(result.password);

type user = {
    name:string
}

type admin = {
    role:"admin"
}

type AdminUser = user & admin

const a:AdminUser = {
    name:"madhanraj",
    role:"admin"
}

console.log(a);

type Shape1 = {kind:"circle",radius:number} | {kind:"square",side:number}

/* function aasert(x:never):never{
    throw new Error("not handle by it");
}

function Shape(res:Shape1){
    if(res.kind==="circle"){
        return Math.PI*res.radius**2;
    }else if(res.kind==="square"){
        return res.side*res.side
    }else{
        aasert(res);
    }
}

Shape(); */

type MyReturnType<T> =
  T extends (...args: any[]) => infer R ? R : never;


type A = MyReturnType<() => number>; // number
type B = MyReturnType<() => string>; // string

function no(x:never):never{
    throw new Error("nothins is there to execute")
}

function Type(value:string|number){
    if(typeof value==="string"){
        return value.toLowerCase()
    }else if(typeof value==="number"){
        return value.toFixed()
    }else{
        no(value)
    }
}

console.log(Type(10));

class U1 {
    name="manimaran";
}



type N = { 
    name:string
}
type N1 = {
    role:"admin"
}

function N3(n4:N|N1){
    if("role" in n4){
        n4.role
    }
}

type cat = {meow:()=>void};
type dog = {bark:()=>void};

function animal(anima:cat|dog):anima is cat{
    return "meow" in anima;
}

function big(t:cat|dog){
    if(animal(t)){
        t.meow()
    }else{
        t.bark();
    }
}

type Props = {
    name?:string,
    age:number
}

type button = |{b1:"bluevarient"}|{b1:"redvarient"}

function UserIn(but:button){
    if(but.b1==="bluevarient"){

    }
}


let id1:string|number ;

id1 = "number"
console.log(id1);




// Problem: Fix the type
let age:number = 25;
console.log(age);

function add1(a:number,b:number):number{
    return a+b;
}

console.log(add1(2,4));

function isEven(num:number):boolean{
    return num%2===0;
}

console.log(isEven(21));

let score:number[] = [1,2,3,4,5,6]
console.log( score);

type User1 = {
    name:string,
  readonly id:number
}

let b:User1 = {
    name:"madhan",
    id:1234

}
console.log(b.id);

let status2:"success"|"failure"|"process"

status2 = "success"

let user5:[string,number] = [34,"madhan"]
console.log(user5);



type Userr1 = {
    name:string
}

type Userr = {
    email:string
}

let U:Userr1&Userr;
U={
    name:"madhan",
    email:"email"

}
console.log(U);

interface Employee{
    salary : number,
    bonus : number
}

interface Employee1{
    average:number
}
let int:Employee|Employee1
int={
    salary:1763,
    bonus:1652,
    average:60
}
console.log(int);

type active1=number|string

function never1(x:never):never{
    throw new Error("madk,s"+x)
}

function active1(acitve:active1){

    if(typeof acitve==="string"){
        console.log(acitve.toLowerCase);
        
    }else{
        console.log(acitve.toFixed());
        
    }
}

active1("active")

function anytype(x:unknown){
    if(typeof x==="string"){
        console.log(x);
        
    }else{
        console.log("error");
        
    }
    
}
anytype(0)

function indentify1<T>(val:T):T{
    return val
}

console.log(indentify1("mithrasangam"));


class Car{
    name1:string;
   email:string;

    constructor(name:string,emaik:string){
        this.name1 = name,
        this.email = emaik
    }
}

const car = new Car("madhan","madhanjoshva44@gmail.com")

console.log("instance off",car instanceof Car);

type Bject = {
    price:number,
    product:string
}

let key:keyof Bject



function Key(object:Bject, key:keyof Bject){
      console.log(key);
    return object[key];
  
    
}
let obj:Bject={
    price:12345,
    product:"pant"
}

console.log(Key(obj,"price"));

function same<T>(val:T):T{
    return val;
}

console.log(same("hii nana"));
console.log(same(1234));


function array<T>(arr:T[]){
    return arr[0]
}
console.log(array(["ab","cd","ef"]));

interface Gen<T>{
    value:T
}

let gen:Gen<number> = {value:20}
console.log(gen);

class Create<T>{
    value:T
    constructor(val:T){
        this.value=val
    }
    
}

const cre = new Create(1234);
console.log(cre);

function accept<T extends object>(obj:T){
    return obj

}

console.log(accept({val:26}));

function safety<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]
}

type ob = {
    name:string,
    age:number,
    aim:string
}
let o : ob={
    name:"madhan",
    age:26,
    aim:"fullstackDeveloper"
}

/* console.log(safety(o,"price"));

function countLength<T, T extends {length:number} >(obj:T){
    return obj.length
} */

    function mergeTwo1<T,U>(obj1:T,obj2:U){
        return {...obj1,...obj2}
    }

    console.log(mergeTwo1({a:10},{b:20}));
    
    function KeyObject<T extends object,K extends keyof T>(obj:T,key:K){
        return typeof obj[key]
    }

    console.log(KeyObject({val:"madhan"},"val"));
    

   type Apiresponse2<T> = {
    name:T,
    email:string,
    age?:number
   } 

  type user2 = {
    name:string
  }
  type admin2={
    name:string
  }
  let U3:Apiresponse2<user2> ={
    name:{name:"madhan"},
    email:"madhanjoshva44@gmail.com"
  }
  
console.log(U3);


let x:number = 20
console.log(x);

function printLength(value: string | number) {
  if(typeof value==="string"){
    return value.length;
  }else{
    return null
  }
}
console.log(printLength(1234));

type Us={
    name:string,
    age?:number
}

function checkType(us:Us){
    return us.age+1;
}



console.log(checkType({name:"rocky",age:23}));

function add2(a: number, b: number) : number {
  if (a > 10) return a + b;
  return 0
}

console.log(add2(20,3));

type Status = "loading" | "success" | "error";

function exashting(x:never):never{
    throw new Error("Hi How are You" +x)
}

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      return "Loading...";
    case "success":
      return "Done!";
    case "error":
        return "something went wrong"
      default:
      return  exashting(status);
  }
}

console.log(handleStatus("loading"));

type Product1 = {
  readonly id: number;
  name: string;
};

const p: Product1 = { id: 1, name: "Phone" };

console.log(p);

function getLength<T extends {length:number}>(value: T): number {
  return value.length;
}

console.log(getLength("KGHVALUYGU"));

type Use1 = {
  id: number;
  name: string;
};

let ob:Use1={
    id:123,
    name:"email"
}



function getValue(obj: Use1, key: keyof Use1) {
  return obj[key];
}



console.log(getValue(ob,"id"));

type Shape =
  | { type: "circle"; radius: number }
  | { type: "square"; side: number };

function area(shape: Shape) : number{
  if (shape.type === "circle") {
    return shape.radius * shape.radius;
  }else if(shape.type==="square"){
    return shape.side * shape.side
  }
}

console.log(area({type:"circle",radius:123}));

