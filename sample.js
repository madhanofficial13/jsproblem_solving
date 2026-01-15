const { KeyIcon, FunnelIcon } = require("@heroicons/react/24/solid");
const { set } = require("mongoose");
const { Children } = require("react");

const boject = {
  name: "madhan",
  content: ["mani", "vani", "sunni"],
  sub: function () {
    console.log("thanks for visiting");
  },
};

console.log(boject.name);
console.log(boject.content);
console.log(typeof boject.sub());
console.log(boject.sub());
const js = JSON.stringify(boject);
console.log(js);

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.99));
console.log(Math.pow(3, 4));
console.log(Math.min(1, 3, 4, 5, 6));
console.log(Math.max(3, 4, 5, 6, 6, 6));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.random());

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);

const makeError = () => {
  try {
    throw new customError("this is custom error");
  } catch (err) {
    console.error(err.stack);
  }
};

makeError();

function customError(message) {
  this.name = "custom ";
  this.message = message;
  this.stack = `${this.name}:${this.message}`;
}
/* 
    function greet(name){
        return `${name}`;
    }

    function input(callback){
        const name="madhan raj"
        return callback(name);
    }

    const result=input(greet);

    console.log(result);

    function details(name,age){
        return function(salary){
            return `${name}+${age}+${salary}`;
        }
    }

    const first = details('madhan',12);
    console.log(first(100000));

    const display={
        name:"madhan raj",
        age:21,
        salary:20000
    };

    const {name,age,salary}=display;

    console.log(name);
    console.log(age);
    console.log(salary);

    const fruits=['apple','banana','orange'];

    const vegetable=[...fruits,'corrate','cucumbare'];

    console.log(vegetable);

    const student={

    }

    import React, { useRef, useState } from 'react';

function TimerApp() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null); 

  const startTimer = () => {
    if (timerRef.current) return; 

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h2>Timer: {time} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default TimerApp; */

/* function details(a){
  return function(b){
    return a+b;
  }
}
const res=details(2);
console.log(res(4)); */

/* const product=[{name:"laptop",price:1000}, {name:"phone",price:2000}, {name:"tablets",price:3000}];
 
const price = product.map((p)=>p.price);
console.log(price);

const expense = product.filter((p)=>p.price>1000)
console.log(expense);

const acumulate = product.reduce((sum,p)=>sum+p.price,0);

console.log(acumulate); */

/* function details(name,age){
  return  `${name} ${age}`

};

function result(calfn){
  const name = "madhan";
  const age = 21;
  console.log("name will be print...")
 return calfn(name,age)
}

const ret = result(details);
console.log(ret); */

/* function defaultfun(name="madhan",age=18){
  console.log(name)
  console.log(age);
}

defaultfun('joshva',20); */

/* function add(){
  var a=10;
  var b=20;
  function inner(){
    console.log(a+b);
  }
  return inner();
}
add(); */

/* name();

function name(){
  console.log("madhan");
}
 
const name1 = function details(){
  console.log("madhna raj")
}
name1(); */

/* let day = "march";
switch(day){
  case "jan":
    console.log("no comment waste");
    break;
  case "feb":
    console.log("no comment simple waste");
    break;
  case "marche":
    console.log("madhna born day");
    break;
  case "july":
    console.log("i dont know");
    break;
    default:
      console.log("not at all run");
} */

/* const arr = [2,3,5,8,9];

const arr1 = arr.map((num,i) =>{
    
  return `${num * 2}  ${i}`
})
console.log(arr1);//map example

const arr2 = arr.filter((num,i)=>{
    console.log("Index in reduce:", i);
  return num%2==0 + i
})
console.log(arr2);

const arr3 = arr.reduce((acc,num,i)=>{
    console.log("Index in reduce:", i);
   return acc + num + i
},0)

console.log(arr3) */

/* const person = {
  name:"madhan",
  age:21,
  city:"chennai"
}
person.name="joshva" //update change
person.state="tamilnadu" // add key to objext
console.log(person)

const fruits = ["apple", "banana", "mango"];

fruits[1]="orange"; // update array
fruits.push("grapes")//add elements at last
fruits.pop()// remove last element at end
fruits.shift();//remove first element
fruits.unshift("loli-pop")//add element at first

fruits.forEach((val,i)=>{
  console.log(val + i)
}) */
/*  function details(name,callback){
  console.log(`${name}`)
  const result=callback();
  console.log(result)
 }

 details('madhanraj',function add(){
  let a=12;
  let b=30;
  return a+b;
 }); */

/*  function stuDetails(name,age,blood){ // first class function
  return `${name}${age}${blood}`;
 }

 const details = stuDetails;

 function callback(fn,...val){
  console.log(fn(...val));
  
 }

 callback(details,"madhan",21,"B+"); */

//higher order funtion

/*  function  callback(fn,val){
  for(let i=0;i<=val;i++){
    fn();
  }
 }

 callback(()=>console.log("hello"),3); */

/* function returnfunction(a){  //currying
  return function(b){
    return function(c){
      return function(d){
        return a*b*c*d;
      }
    }
  }
 }

console.log(returnfunction(2)(3)(4)(5)); */ //should not call the function;

/* class Animal{
  constructor(name){
    this.name=name;
  }
 bark(){
  console.log(`${this.name} is barking`);
 }
}

class Birds extends Animal{
  owling(){
    console.log(`${this.name} is owling `);
  }
}

const p2 = new Birds("madhan");
p2.owling();
p2.bark()

const obj = Object.getPrototypeOf(p2);

console.log(obj);  */

/* number = [1,3,4,5,66,6,7];
const product = {
  name:"mobile",price:"100000"
}

for(let r of number.keys()){
  console.log(r);
  
}
console.log(Array.isArray(product));
for(let r of number.values()){
  console.log(r);  
} */

/* for(let[r,i] of number.entries()){
  console.log(r,i);
}

const res = number.some(x=>x>10);

console.log(res);

const result = number.every(x=>x<20);
console.log(result);

const r1 = number.with(0,100);
console.log(r1); */

/* const r2 = number.copyWithin(2,5);
console.log(r2); */

/* const string = ["ma","dh","an"];

const str1 = string.join("num");
console.log(str1);

let removed = number.splice(2,4);
console.log(removed);

let details = {name:"madhna"}
 console.log(Object.keys(details));
 console.log(Object.values(details)); */

//first class function can be passed as agumetns
//can be stored in variables
//can be return as another function

/*  const add = (a,b)=>{
  return a+b;
 }
 const greet = add;
 console.log(greet(12,34));
 
 const sports = {name:"football",invented:"1990"};

 function sportsResult(coche,match){
  console.log(`${this.name} + ${this.invented} + ${coche} + ${match}`);
 }

 sportsResult.call(sports,"maddy","12-03-2025");
 sportsResult.apply(sports,["joe","2023"]);
 const spo = sportsResult.bind(sports,"soo","40-30-2029");
 spo();

 class Person{
  constructor(name){
    this.name=name;
  }
 } */
/* 
 const result_final = new Person("madhan");
 console.log(result_final);
 const myPromise = new Promise((resolve,reject)=>{
  let success = true;
  setTimeout(()=>{
   if(success){
    resolve("doooo dooo");
   }else{
    reject("dooo dooo");
   }
  },2000)
 })
  myPromise.then((result)=>{
    console.log(result);
  }).catch((error)=>{
    console.error(error);
  }).finally(()=>{
    console.log("hoo hoo");
  })
  const json = JSON.stringify({name:"madhan"});
  const json1 = JSON.parse(json)
  console.log(json);
  console.log(json1);
  (function () {
  console.log("Run now!");
})();

function Motion(name){
  this.name=name
  this.employee = (schoolName)=>{
    this.schoolName = schoolName;
  }
} */

/* Motion.prototype.details = function(age){
console.log(`${this.name} ${age},${this.schoolName}`);
}

const p1 = new Motion("madhan")
 p1.employee("st.jsohep hr sec school")
p1.details(17)
 var gdt = new GlideDateTime();
gs.info('Now: ' + gdt.getDisplayValue()); 

gdt.addDaysLocalTime(5);
gs.info('5 days later: ' + gdt.getDisplayValue()); */

const products = {
  p1: { name: "Mobile", price: 12000 },
  p2: { name: "Laptop", price: 55000 },
  p3: { name: "Mouse", price: 500 },
};

let count = 0;
for (let key in products) {
  console.log(key);
  count += 1;
}
console.log(count);

const length = Object.keys(products).length;
console.log(length);

const employees = {
  e1: { name: "A", salary: 20000 },
  e2: { name: "B", salary: 30000 },
  e3: { name: "C", salary: 25000 },
};

let salaryTotal = 0;
let highest1 = 0;
for (let key in employees) {
  let highest = employees[key].salary;
  if (highest1 < highest) {
    highest1 = highest;
  }

  salaryTotal += highest;
}
console.log(salaryTotal);
console.log(highest1);

const total = Object.values(employees).reduce(
  (sum, emp) => sum + emp.salary,
  0
);

console.log(total);

const students = {
  a: { mark: 45 },
  b: { mark: 70 },
  c: { mark: 32 },
};
let total1 = 0;
for (let key in students) {
  console.log(key, students[key]);
}

for (let key in students) {
  if (students[key].mark >= 40) {
    total1 += 1;
  }
}
console.log(total1);

name1 = "Madhan";

const person = {
  "name1 age": "rocky",
};
console.log(person["name1 age"]);

const arr = [
  { id: "a", value: 10 },
  { id: "b", value: 20 },
  { id: "c", value: 30 },
];
console.log(arr);

let lookup = {};

arr.forEach((item) => (lookup[item.id] = item));

console.log(lookup);

const products1 = [
  { id: "p1", price: 120 },
  { id: "p2", price: 80 },
  { id: "p3", price: 150 },
];
let prototal = 0;
products1.forEach((item) => {
  if (item.price > 100) {
    prototal++;
  }
});
console.log(prototal);

const lookup1 = {};

const employees1 = [
  { name: "Ravi", salary: 20000 },
  { name: "Kumar", salary: 30000 },
  { name: "Arun", salary: 25000 },
];

employees1.forEach((employe) => {
  lookup1[employe.name] = employe.salary;
});
console.log(lookup1);

const data = [
  { email: "a@gmail.com", age: 20 },
  { email: "b@gmail.com", age: 25 },
];

data.forEach((dat) => {
  lookup1[dat.email] = dat;
});
console.log(lookup1);

const students1 = [
  { id: "s1", mark: 35 },
  { id: "s2", mark: 45 },
  { id: "s3", mark: 55 },
];

const lookup2 = { pass: [], fail: [] };

students1.forEach((stu) => {
  if (stu.mark >= 40) {
    lookup2.pass.push(stu.id);
  } else {
    lookup2.fail.push(stu.id);
  }
});

console.log(lookup2);

const contacts = [
  { name: "A", phone: "1111" },
  { name: "B", phone: "2222" },
];

const lookup3 = {};

contacts.forEach((con) => {
  lookup3[con.name] = con.phone;
});

console.log(lookup3);

const obj = {
  name: "A",
  marks: { tamil: 90, english: 80 },
};

let copy = {
  ...obj,
};

const copy1 = structuredClone(obj);

console.log(copy1.marks === obj.marks);

const data1 = { a: 1, b: null, c: 3, d: null };

const cleaned = {};

for (let key in data1) {
  if (data1[key] !== null) {
    cleaned[key] = data1[key];
  }
}
console.log(cleaned);
const user = { name: "A", age: 20 };

let array = [];

Object.entries(user).map((key) => {
  array.push(key, user[key]);
});

console.log(array);
const product = { id: 1, name: "Mouse", price: 500 };

const countKey = Object.keys(product).length;

console.log(countKey);

Object.freeze(product);

product.price = 600;

console.log(product);

const scores = { A: 10, B: 50, C: 40 };

let maxKey = "";
let MaxValue = 0;

for (let key in scores) {
  if (scores[key] > MaxValue) {
    MaxValue = scores[key];
    maxKey = key;
  }
}
console.log(maxKey);

const arr1 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

let lookup4 = {};

arr1.forEach((i) => {
  lookup4[i.id] = i;
});

console.log(lookup4);

const data2 = [
  { id: "a", value: 10 },
  { id: "b", value: 20 },
  { id: "c", value: 30 },
];

data2.forEach((id) => {
  lookup4[id.value] = id;
});

console.log(lookup4);

const a = { x: 1 };
const b = { y: 2 };

const merge = {
  ...a,
  ...b,
};
console.log(merge);

let obj1 = { a: 10, b: 20, c: 30 };

obj1 = Object.entries(obj1);
console.log(obj1);

let user1 = { name: "A", phone: 123 };

console.log(user1?.email ? true : false);

console.log("name" in user1);

console.log(user1.hasOwnProperty("email"));

const u = Object.keys(user1).includes("phone");

console.log(u);

let user2 = { name: "Madhan" };

user2 = {
  ...user2,
  email: "madhaja",
};

console.log(user2);
let str1 = "2004/03/13";

/*  str1 = str1.replace(/\//g," ");
 console.log(str1); */

str1 = str1.replace(/\d/g, "");
console.log(str1);

/* str1 = str1.split("/")

 console.log(str1[0],str1[1],str1[2]); */

const users = [
  { name: "Madhan", dob: "2004/03/13" },
  { name: "Sangamithra", dob: "2006/05/30" },
  { name: "Hari", dob: "1998/12/02" },
];

function getBirthDat(dob) {
  let today = new Date();
  let birthDat = new Date(dob);

  let age = today.getFullYear() - birthDat.getFullYear();
  let month = today.getMonth() - birthDat.getMonth();
  let date = today.getDate() - birthDat.getDate();

  if (month < 0 || (month === 0 && date < 0)) {
    age--;
  }
  return age;
}
let update = null;

const updateUser = users.map((u) => ({
  ...u,
  age: getBirthDat(u.dob),
}));

console.log(updateUser);

const names = [
  { first: "A", last: "B" },
  { first: "Madhan", last: "Raj" },
];

const updated = names.map((n) => ({
  ...n,
  fullName: n.first + " " + n.last,
}));
console.log(updated);

const cit = [
  { name: "A", city: "Chennai" },
  { name: "B", city: "Chennai" },
  { name: "C", city: "Madurai" },
  { name: "C", city: "Madurai" },
  { name: "C", city: "Madurai" },
];

const loop = {};

cit.forEach((ci) => {
  loop[ci.city] = (loop[ci.city] || 0) + 1;
});

console.log(loop);

const even = [2, 3, 4, 1, 6, 0];
const result = ["madhn", "madhan", "", ""];
even.filter((eve) => (eve % 2 == 0 ? result.push(eve) : eve));
const strin = [];
result.filter((str) => (str.toString().trim() !== "" ? strin.push(str) : str));
console.log(strin);

const res = even.sort((a, b) => b - a);

console.log(res);

const checkArray = 12345;

console.log(Array.of(checkArray));
const array1 = Array.from("abcd");

console.log(array1);

console.log(array1.lastIndexOf(3));

console.log(Array.isArray(checkArray));

const ar = [1, 2, 3, 5, 1, 2, 6, 7, 6];

let a1 = new Set(ar);
a1.add(12);
a1.delete(3);
a1.has(6);
let s = a1.size;
console.log(s);

a1.clear();
console.log(a1);

let ar1 = [];

ar.map((num) => {
  if (!ar1.includes(num)) {
    ar1.push(num);
  }
});
console.log(ar1);

const users1 = [
  { id: 1, name: "Madhan", dob: "2001-05-21", city: "Chennai", dept: "IT" },
  { id: 2, name: "Arun", dob: "1998-09-10", city: "Coimbatore", dept: "HR" },
  {
    id: 3,
    name: "Sangamithra",
    dob: "2004-03-13",
    city: "Madurai",
    dept: "Finance",
  },
  { id: 4, name: "Kavin", dob: "2006-12-04", city: "Chennai", dept: "IT" },
  { id: 5, name: "Priya", dob: "1995-01-25", city: "Salem", dept: "Admin" },
  { id: 6, name: "Vignesh", dob: "1989-07-19", city: "Chennai", dept: "Sales" },
  { id: 7, name: "Swetha", dob: "2003-11-08", city: "Coimbatore", dept: "IT" },
  { id: 8, name: "Rahul", dob: "2000-06-01", city: "Trichy", dept: "Support" },
  {
    id: 9,
    name: "Deepak",
    dob: "1992-04-30",
    city: "Chennai",
    dept: "Finance",
  },
  { id: 10, name: "Anjali", dob: "1985-10-15", city: "Madurai", dept: "HR" },
];

let l = [];

users1.forEach((item) => {
  if (item.name.toUpperCase().startsWith("R")) {
    l.push(item);
  }
});
console.log("return name with", l);

/* for(let key in users1){
 if(users1[key.name.startsWith("c")])
  l.push(users1[key])
 
} */

function checkMont(dob) {
  let birth = new Date(dob);
  let totade = new Date();
  const mont = birth.getMonth();
  const month = totade.getMonth();
  if (mont !== month) {
    return false;
  }
  return true;
}

function findUser(dob) {
  let birth = new Date(dob);
  let year = birth.getFullYear();

  return year;
}
let o = [];
users1.forEach((item) => {
  const year = findUser(item.dob);
  if (year === 2000) {
    o.push(item);
  }
});

let loo = [];

users1.forEach((item) => {
  loo.push({
    ...item,
    age: getBirthDat(item.dob),
    month: new Date(item.dob).getMonth(),
    thisMonth: checkMont(item.dob),
  });
});
console.log("this month haa illa yaa", loo);

let loop1 = {};

/* users1.forEach(item=>{

loop1[item.dept] = (loop1[item.dept] || 0)+1;

})
console.log(loop1) */

/* users1.forEach(item=>{
  if(!loop1[item.dept]){
    loop1[item.dept] = []
  }
  loop1[item.dept].push(item)
})
console.log(loop1); */

/* users1.forEach(item=>{
  let i = item.city==="Chennai"
  console.log(i);
  
  if(item.city==="Chennai"){
    loop1.push(item)
  }
})
console.log("mangoo",loop1); */

/* let u1 = []
let loo = {}
users1.forEach(use=>{
  u1.push({
    ...use,
    age:getBirthDat(use.dob),
    date:new Date().getDay()
})

const age = u1.sort((a,b)=>b.age-a.age)
console.log(age);
let young = []
let oldest = []
u1.forEach(item=>{

  if(item.age<=30)
    young.push(item)
  else 
    oldest.push(item)
})
console.log("young",young);
console.log("oldest",oldest);



let r = u1.filter(a=>a.age>25)
console.log("sort by age",r);
})


let c = u1.filter(a=>a.age===36);
console.log("value",c);
let g = 36
if(!loo[g]){
loo[g] = [];
}

loo[g].push(c)
console.log()

u1.forEach(item=>{
  if(!loo[item.city]){
    loo[item.city] = []
  }
  loo[item.city].push(item);
})
console.log(loo) */

console.log("born in today", o);

let name = "Madhan";
let nam = [];
for (let i = name.length - 1; i >= 0; i--) {
  nam.push(name[i]);
}
console.log(nam);

let ocurance = "bananaa";
let count1 = 0;
for (let i = 0; i < ocurance.length - 1; i++) {
  if (ocurance[i] === "a") {
    count1 += 1;
  }
}
console.log(count1);

let snga = "sangamithra";
function check(snga) {
  if (snga.toLowerCase().startsWith("s")) return true;
  else return false;
}
let uper = snga[0].toUpperCase() + snga.slice(1);
console.log(uper);

let da = "2004-03-13".replace(/\-/g, "/");

let modify = "2004/03/13";
let mod = "";
let result1 = "";
let found = false;

for (let ch of modify) {
  if (ch === "/" && !found) {
    found = true;
    continue;
  }
  result1 += ch;
}
console.log(result1);

console.log("modify", mod);

console.log(da);

function repeat(mask) {
  let [name, domain] = mask.split("@");
  let masked = name[0] + "*".repeat(name.length - 1);
  let res = masked + "@" + domain;
  return res;
}

console.log(repeat("madhanjoshva@gmail.com"));

let str = " madhanjoshva@gmail.com ";
console.log(str.trimStart());

let da1 = Math.floor((Date.now() - Date.now(1764353359038)) / 1000);
console.log(da1);

function date(date) {
  const daa = new Date(date).toLocaleDateString("us-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return daa;
}

console.log(date("2024-03-13"));

function toyestur(date) {
  let d = new Date(date);
  let today = new Date();
  let yes = new Date();

  yes.setDate(today.getDate() - 1);
  if (d.toDateString() === yes.toDateString()) {
    return "yesturDay";
  } else if (d.toDateString() === today.toDateString()) {
    return "Today";
  }
  return d.toLocaleDateString("en-IN");
}

console.log(toyestur(new Date()));

console.log(new Date().getMonth() + 1);

const produc = [
  { id: 1, name: "iPhone", category: "Mobile" },
  { id: 2, name: "MacBook", category: "Laptop" },
  { id: 3, name: "Samsung S24", category: "Mobile" },
];

let pro = {};

produc.forEach((item) => {
  if (!pro[item.category]) {
    pro[item.category] = [];
  }
  pro[item.category].push(item.name);
});
console.log(pro);
const use = [
  { id: 1, email: "a@gmail.com" },
  { id: 2, email: "b@gmail.com" },
  { id: 3, email: "a@gmail.com" },
];
let email = "";
let em = [];
use.forEach((item) => {
  if (use[item.email] === use[item.email]) {
    email = item.email;
  } else {
    use[item.email].push(item);
  }
});
console.log(em);

const unique = new Map(use.map((u) => [u.email, u])).values();
const re = new Set(use).values(use);
console.log(unique);

let cart = [
  { id: 1, name: "iPhone", qty: 1 },
  { id: 2, name: "Case", qty: 2 },
];
let filter = [];
function quantity(id, newQty) {
  filter = cart.map((car) => (car.id === id ? { ...car, qty: newQty } : car));
}
quantity(2, 4);
console.log(filter);

const prod1 = [
  {
    name: "iPhone 15 Pro Max",
    address: {
      city: "chennai",
      pincode: "600112",
      door: {
        no: "41",
        block: "c",
      },
    },
    kyc: {
      adhar: "1234567890123",
      bank: "indianbank",
      other: {
        cred: "23456",
        cvc: "123",
      },
    },
  },
  /*  {
     name: "Samsung S24 Ultra",
     address:{
      city:"begalur",
      pincode:"11223"
     }

   } */
];

const output = prod1.map((prev) => ({
  ...prev,
  address: {
    ...prev.address,
    city: "gova",
    pincode: "987654",
    door: {
      ...prev.address.door,
      no: "42",
      block: "b",
    },
  },
  kyc: {
    ...prev.kyc,
    adhar: "1982736457",
    bank: "kotack",
    other: { ...prev.kyc.other, cred: "234566", cvc: "123" },
  },
}));
console.log(JSON.stringify(output, null, 2));

/* console.log(prod1[0].name.toLowerCase().includes("1".toLowerCase()));

const prod =(keyword)=> prod1.filter(p=>p.name.toLowerCase().includes(keyword.toLowerCase())) */

/* console.log(prod("u")); */

const us = [
  { name: "Madhan", spent: 1000 },
  { name: "Arun", spent: 500 },
  { name: "Arun", spent: 3000 },
];
let max = us[0].spent;
us.forEach((item) => {
  if (item.spent < max) {
    max = item.spent;
  }
});

console.table(us);
console.error("error message is occure");
console.warn("you do not open ");
console.log(max);

const c = { x: 10 };

const d = c;

d.x = 20;

console.log(c.x);
const arr5 = [{ name: "A", details: { rating: 4 } }];

const out = arr5.map((item) => ({
  ...item,
  details: { ...item.details, rating: 5 },
}));
console.log(out);
console.log(out[0].details.rating);

const p = [
  {
    name: "madhan",
    kyc: {
      cred: "12348340893",
    },
  },
];

const outaed = p.map((prev) => ({
  ...prev,
  kyc: {
    ...prev.kyc,
    cred: "983897268762",
    door: {
      ...(prev.kyc.door ?? {}),
      no: "42",
      block: "b",
    },
  },
}));
console.log(JSON.stringify(outaed, null, 2));

const stock = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 20000 },
];
function add() {
  for (let key in stock) {
    return {
      ...stock[key],
      qty: 2,
    };
  }
}

console.log(add());

/* const p1 = stock.map((prev) => ({
  ...prev,
  qty: 1,
}));

console.log(p1); */
const items = [
  { name: "TV", stock: 10 },
  { name: "Fan", stock: 0 },
  { name: "AC", stock: 4 },
];

const filt = items.filter((it) => it.stock > 0);
console.log(filt);
const car = [
  { price: 1000, qty: 2 },
  { price: 500, qty: 4 },
];

const ca = car.reduce((total, car) => total + car.qty * car.price, 0);
console.log(ca);
const ser = [
  { id: 1, name: "Madhan" },
  { id: 2, name: "Sangamithra" },
];

let r = ser.find((u) => u.id == 1);
console.log(r);

let sto = [
  { name: "Keyboard", stock: 3 },
  { name: "Mouse", stock: 0 },
];

sto = sto.some((i) => i.stock <= 0);
console.log(sto);

let list = [{ price: 200 }, { price: 300 }, { price: 150 }];

list = list.every((i) => i.price >= 100);
console.log(list);

let people = [
  { name: "Madhan", age: 22 },
  { name: "Sangamithra", age: 21 },
  { name: "Suresh", age: 24 },
];

people = people.sort((a, b) => a.age - b.age);
console.log(people);

let page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

page = page.slice(0, 10);
console.log(page);

let bande = ["Madhan", "Kumar", "Ravi"];
bande = bande.splice(0, 2);
console.log(bande);

const groupBy = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Tablet", category: "Electronics", price: 30000 },
  { id: 3, name: "Shirt", category: "Clothing", price: 1000 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1500 },
];

/* groupBy.forEach(item=>{
  if(!by[item.category]){
    by[item.category] = []
  }
  by[item.category].push(item)
})
console.log(by); */

let g = groupBy.reduce((acum, item) => {
  (acum[item.category] ||= []).push(item);
  return acum;
}, {});
console.log(g);
let u1 = ["A", "B", "C"];
let u2 = ["B", "C", "D", "E"];

let u3 = u1.filter((item) => u2.includes(item));

let u4 = u2.filter((item) => !u1.includes(item));
console.log(u4);

console.log(u3);

let records = [
  { type: "income", amount: 5000, date: "2004/03/13" },
  { type: "expense", amount: 2000, date: "2005/04/15" },
  { type: "income", amount: 3000, date: "2006/05/18" },
  { type: "expense", amount: 1000, date: "2003/03/19" },
];

let e = records.map((na) => new Date(na.date).toLocaleDateString("en-IN"));

console.log("records", e);

const dates = [
  "2024-12-03",
  "2025/01/15",
  new Date("2025-02-20"),
  "03-05-2023",
];

/* function dateFormate(dates){

  dates.map(date=>({
    let day = String(date.getDate().padStar(2,"0")),
    let month = String(date.getMonth().padStar(2,"0")),
    let year = String(date.getFullYear()),
    return `${day}/${month}/${year}`
  }))

} */

records = records.reduce((acum, item) => {
  let key = "total" + item.type[0].toUpperCase() + item.type.slice(1);

  let month = new Date(item.date).toLocaleString("en-US", { month: "short" });

  if (!acum[key]) {
    acum[key] = {};
  }

  acum[key][month] = (acum[key][month] || 0) + item.amount;

  return acum;
}, {});

let totalIncome = Object.values(records.totalIncome || {}).reduce(
  (a, b) => a + b,
  0
);
let totalExpense = Object.values(records.totalExpense || {}).reduce(
  (a, b) => a + b
);

records.netCash = totalIncome - totalExpense;

console.log(records);

Array.prototype.myFilter = function (callback) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      output.push(this[i]);
    }
  }

  return output;
};

let like = [2, 3, 4, 5];

const fill = like.myFilter((l) => l <= 2);
console.log(fill);

Array.prototype.myMap = function (callback) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }
  return output;
};

let yrra = [2, 3, 4, 5];

const ra = yrra.myMap((arr) => arr * 2);
console.log(ra);

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
console.log("myFind exists:", Array.prototype.myFind);

const sir = [
  { id: 1, name: "Madhan", age: 23, city: "Chennai" },
  { id: 2, name: "Sangamithra", age: 22, city: "Madurai" },
  { id: 3, name: "Kavin", age: 25, city: "Coimbatore" },
  { id: 4, name: "Arun", age: 23, city: "Salem" },
];

let pass = sir.myFind((re) => re.name === "Madhan");

console.log(pass);

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
    return false;
  }
};

Array.prototype.myReduce = function (callback, initialValue) {
  let acumulate = initialValue;

  if (acumulate === undefined) {
    acumulate = this[0];
  }
  for (let i = 0; i < this.length; i++) {
    acumulate = callback(acumulate, this[i], i, this);
  }
  return acumulate;
};

let acums = [
  /* 1,2,3,4,5,6 */
];

let acum = acums.myReduce((ac, a) => ac + a, 0);

console.log(acum);

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

let test = sir.myEvery((s) => s.age >= 22);

console.log(test);

const props = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Electronics",
    price: 80000,
    discount: 5000,
    brand: "Apple",
    stock: 10,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    category: "Electronics",
    price: 70000,
    discount: 7000,
    brand: "Samsung",
    stock: 0,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Boat Headphones",
    category: "Electronics",
    price: 2000,
    discount: 200,
    brand: "Boat",
    stock: 3,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Nike Shoes",
    category: "Fashion",
    price: 5000,
    discount: 1000,
    brand: "Nike",
    stock: 15,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Puma T-shirt",
    category: "Fashion",
    price: 1200,
    discount: 200,
    brand: "Puma",
    stock: 1,
    rating: 4.0,
  },
  {
    id: 6,
    name: "Lenovo Laptop",
    category: "Electronics",
    price: 55000,
    discount: 5000,
    brand: "Lenovo",
    stock: 7,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Woodland Wallet",
    category: "Fashion",
    price: 800,
    discount: 100,
    brand: "Woodland",
    stock: 0,
    rating: 3.9,
  },
  {
    id: 8,
    name: "LG Smart TV",
    category: "Electronics",
    price: 60000,
    discount: 8000,
    brand: "LG",
    stock: 6,
    rating: 4.7,
  },
  {
    id: 9,
    name: "Dell Monitor",
    category: "Electronics",
    price: 15000,
    discount: 1500,
    brand: "Dell",
    stock: 4,
    rating: 4.3,
  },
  {
    id: 10,
    name: "Sony Camera",
    category: "Electronics",
    price: 90000,
    discount: 10000,
    brand: "Sony",
    stock: 2,
    rating: 4.9,
  },
];

let finalPrice = props.reduce(
  (acum, val) => acum + val.price - val.discount,
  0
);
console.log("finalPrice", finalPrice);

let topThree = props.sort((a, b) => b.rating - a.rating).slice(0, 3);
console.log("topThree", topThree);

let brands = [...new Set(props.map((p) => p.brand))];
console.log("brands", brands);

let resultExam = props.filter((val) => val.stock <= 0);
console.log(resultExam);

let expensive = props.sort((a, b) => b.price - a.price).slice(0, 5);
console.log("expensive", expensive);

let discount = props.filter((val) => (val.discount / val.price) * 100 > 50);

console.log("discount", discount);

let lowStack = props.filter((val) => val.stock <= 5);
console.log("lowStack", lowStack);

let categ = props.filter((val) =>
  ["Electronics", "Fashion"].includes(val.category)
);
console.log("category", categ);
let loli = {};

props.forEach((item) => {
  if (
    !loli[item.category === "Electronics"] ||
    !loli[item.category === "Fashion"]
  ) {
    loli[item.category] = [];
  }
  loli[item.category].push(item);
});
console.log("Category", loli);

const active = [
  { id: 1, name: "Madhan", active: true, joined: "2024-10-21" },
  { id: 2, name: "Sanga", active: false, joined: "2023-11-10" },
  { id: 3, name: "Ajay", active: true, joined: "2024-02-05" },
  { id: 4, name: "Priya", active: true, joined: "2022-07-14" },
];

let act = active.filter((item) => item.active === true);
console.log(act);

const systemUsers = [
  { id: 1, email: "madhan@example.com", role: "admin" },
  { id: 2, email: "sanga@example.com", role: "user" },
  { id: 3, email: "ajay@example.com", role: "admin" },
  { id: 4, email: "ram@example.com", role: "user" },
];

let system = systemUsers.filter((sys) => sys.role === "admin");
console.log(system);

const members = [
  { id: 1, name: "Madhan", joined: "2024-01-14" },
  { id: 2, name: "Sanga", joined: "2023-10-22" },
  { id: 3, name: "Kumar", joined: "2024-06-01" },
  { id: 4, name: "Priya", joined: "2022-04-10" },
  { id: 5, name: "John", joined: "2024-09-18" },
];

/* let join = {}

members.forEach(item=>{

join[item.joined][new Date(item.joined).getFullYear()==="2024"] = (join[item.joined] || 0) + 1

})

console.log(join); */

const transactions = [
  { id: 1, type: "income", amount: 5000 },
  { id: 2, type: "expense", amount: 1500 },
  { id: 3, type: "income", amount: 8000 },
  { id: 4, type: "expense", amount: 2000 },
  { id: 5, type: "income", amount: 12000 },
];
let tran = {};
transactions.reduce((acum, item) => {
  if (!tran[item.type]) {
    tran[item.type] = [];
  }
  tran[item.type].push(acum + transactions[item.amount]);
}, 0);

console.log(tran);

const notifications = [
  {
    user: "Madhan",
    notifications: [
      { id: 1, message: "Order Shipped", createdAt: "2024-06-18" },
      { id: 2, message: "Password Changed", createdAt: "2024-03-20" },
    ],
  },
  {
    user: "Sanga",
    notifications: [
      { id: 3, message: "New Login Detected", createdAt: "2024-07-05" },
    ],
  },
  {
    user: "Ajay",
    notifications: [
      { id: 4, message: "Payment Received", createdAt: "2024-01-10" },
      { id: 5, message: "Subscription Renewed", createdAt: "2024-04-25" },
    ],
  },
];

let not = notifications
  .flatMap((notify) => notify.notifications)
  .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
console.log(not);

const nestedData = [
  {
    id: 1,
    profile: {
      name: "Madhan",
      email: "madhan@example.com",
    },
    address: {
      city: "Chennai",
      pincode: 600001,
    },
  },
  {
    id: 2,
    profile: {
      name: "Sanga",
      email: "sanga@example.com",
    },
    address: {
      city: "Coimbatore",
      pincode: 641001,
    },
  },
];

const namesAlpha = [
  "Madhan",
  "Sanga",
  "Ajay",
  "Priya",
  "Kumar",
  "Vishnu",
  "Dinesh",
];

let alpha = namesAlpha.sort();
console.log(alpha);
const usersAge = [
  { name: "Madhan", age: 24 },
  { name: "Sanga", age: 22 },
  { name: "Ajay", age: 28 },
  { name: "Priya", age: 21 },
  { name: "Kumar", age: 26 },
];

let age = usersAge.sort((a, b) => a.age - b.age);
console.log(age);

const datesNewOld = [
  "2024-02-10",
  "2023-11-18",
  "2024-06-01",
  "2022-09-14",
  "2024-01-05",
];

let newold = datesNewOld.sort((a, b) => new Date(b) - new Date(a));
console.log(newold);
const stringLength = [
  "hi",
  "hello",
  "javascript",
  "sort",
  "chatgpt",
  "a",
  "developer",
];

for (let i = 0; i < stringLength.length - 1; i++) {
  for (let j = 0; j < stringLength.length - 1; j++) {
    if (stringLength[j].length > stringLength[j + 1].length) {
      let temp = stringLength[j];
      stringLength[j] = stringLength[j + 1];
      stringLength[j + 1] = temp;
    }
  }
}
console.log(stringLength);

let len = stringLength.sort((a, b) => a.length - b.length);
console.log(len);

let maxArr = [12, 95, 3, 44, 67];

let ma = maxArr.reduce((acum, mac) => {
  acum = mac[0];
  mac = mac[0];
  if (acum > mac) acum = mac;
  return acum;
}, 0);

console.log(ma);
let accurance = ["apple", "apple", "banana", "orange", "banana", "apple"];

let acc = accurance.reduce(
  (accu, item) => ((accu[item] = (accu[item] || 0) + 1), accu),
  {}
);
console.log(acc);

const marks = {
  a: { score: 40 },
  b: { score: 88 },
  c: { score: 29 },
};

let own = marks ? marks?.a : marks;

console.log(own);

for (let key in marks) {
  console.log(key, marks[key].score);
}

const ob = {};
console.log(ob.toString());

function tecjbo(name) {
  this.name = name;
}

tecjbo.prototype.welcome = function () {
  console.log("log is there", this.name);
};

const er = new tecjbo("madhan");
er.welcome();

/* function Admin(name ,email){
  this.name = name;
  this.email = email
}

Admin.prototype.AdminDetails = function (blood,age){
console.log(`${this.name} + ${this.email} + ${blood} + ${age}`);

} */

/* const admin1 = new Admin("madhan","madhanjoshva44@gmail.com")
admin1.AdminDetails("A+",16);
admin1.AdminDetails("b+",17); */

const normalFunction = {
  AgeOfHandsom: "Madhan Is Handsome",
  show: (name) => {
    console.log(name);
  },
};

normalFunction.show("madhan");

const dynam = {
  name: "Madhan",
  address_no: {
    city: "Chennai",
    door: {
      no: 20,
      street: "Main Road",
    },
  },
};

const key = "address_no";
const door = "door";
console.log(dynam[key][door].no);
/* const structure = {
  name: "Madhan",
  address: { city: "Chennai", pin: 600001 }
};

const {address:{city} } = structure
const n = structure.name
console.log(n); */

// Chennai

/* const destructure = {
  name: "Madhan",
  profile: {
    age1: 22
  }
};

const {name,profile:{age1=22,city="chennai",person1="unkown"}={}} = destructure
console.log(name);
console.log(age1);
console.log(city);
console.log(person1); */

/* const product = {
  id: 101,
  price: 999
};

const {productPrice:{price}} = product */
const colors = ["red", "green", "blue"];

const [col, , cola] = colors;
console.log(col, cola);

/* const student = {
  name1: "Arun",
  marks: {
    math: 78,
    science: 85
  }
};

const {name1,marks:{science}} = student
console.log(name1,science); */

const settings = {
  theme: "dark",
};

const { theme, language = "en" } = settings;

console.log(theme, language);
const funionDestruct = {
  id: 1,
  profile: {
    skill: "test@gmail.com",
  },
};

destructure(funionDestruct);
function destructure({ profile: { skill: skillOutCome } }) {
  console.log(skillOutCome);
}
const config = {
  server: {
    host: "localhost",
  },
};

const {
  server: { host: server, port = 4000 },
} = config;

console.log(server, port);

function getUser() {
  return {
    id: 1,
    profile: {
      username: "madhan",
    },
  };
}
const {
  profile: { username },
} = getUser();

console.log(username);
const numbers = [10, 20, 30, 40, 50];

const [m, t, ...f] = numbers;

console.log(m, t, f);

/* const data9 = {
  users: [
    { name: "A", scores: [80, 90] },
    { name: "B", scores: [70, 60] }
  ]
};

const {users:[{name,scores}]} = data9 */

const ke = "details";

const per = {
  details: {
    age1: 22,
    city: "Chennai",
  },
};

const {
  [ke]: { age1 },
} = per;
console.log(age1);

/* const suffix = "Name";

const obje = {
  firstName: "Madhan",
  lastName: "Raj"
};

const {firstName:[suffix]} = obje
console.log(suffix); */
const response = {
  data: null,
};

const { id } = response.data ?? {};

console.log(id);
apiData({
  status: 200,
  message: "success",
  data: [1, 2, 3],
  meta: "info",
});
function apiData(data) {
  console.log(data.status, { ...data });
}
let x = 5;
let y = 10;

[x, y] = [y, x];
console.log(x, y);

const datagram = {
  users: [
    { name: "A", scores: [80, 90] },
    { name: "B", scores: [70, 60] },
  ],
};

const {
  users: [
    {
      name: firstNmae,
      scores: [zeroScore, ...last],
    },
    {
      scores: [, firstScroe],
    },
  ],
} = datagram;
console.log(firstNmae, firstScroe, zeroScore);

const sales = [
  { category: "electronics", price: 2000 },
  { category: "clothing", price: 1500 },
  { category: "electronics", price: 3000 },
  { category: "grocery", price: 500 },
];

const resum = sales.reduce((acum, item) => {
  acum[item.category] = (acum[item.category] || 0) + item.price;
  return acum;
}, {});

console.log(resum);
const expenses = [
  { amount: 1000, date: "2024/01/10" },
  { amount: 2000, date: "2024/01/15" },
  { amount: 1500, date: "2024/02/20" },
];

let mon = expenses.reduce((acum, item) => {
  let month = new Date(item.date).toLocaleString("en-US", { month: "short" });

  acum[month] = (acum[month] || 0) + item.amount;
  return acum;
}, {});

mon.totalSum = Object.values(mon).reduce((a, b) => a + b, 0);
console.log(mon);

const role = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
  { name: "D", role: "user" },
];
let acu = role.reduce((acum, item) => {
  acum[item.role] = (acum[item.role] || 0) + 1;
  return acum;
}, {});

console.log(acu);
const transaction = [
  { type: "income", amount: 4000, date: "2024/03/10" },
  { type: "expense", amount: 1000, date: "2024/03/12" },
  { type: "income", amount: 2000, date: "2024/04/05" },
  { type: "expense", amount: 500, date: "2024/04/08" },
];

let transac = transaction.reduce((acum, item) => {
  let month = new Date(item.date).toLocaleString("en-us", { month: "short" });

  acum[month] = {
    income: (acum[item.type] || 0) + item.amount,
    expence: (acum[item.type] || 0) + item.amount,
  };
  return acum;
}, {});
console.log(transac);

const cart1 = [
  { product: "Laptop", price: 50000 },
  { product: "Phone", price: 20000 },
  { product: "Laptop", price: 50000 },
];

let cart2 = cart1.reduce((acum, item) => {
  acum[item.product] = {
    qty: (acum[item.product] || 0) + 1,
    total: (acum[item.product] || 0) + item.price,
  };
  return acum;
}, {});

console.log(cart2);

const attendance = [
  { name: "A", date: "2024-03-01" },
  { name: "B", date: "2024-03-01" },
  { name: "C", date: "2024-03-02" },
];

let att = attendance.reduce((acum, item) => {
  acum[item.date] = (acum[item.date] || 0) + 1;
  return acum;
}, {});
console.log(att);

const orders = [
  { amount: 5000, date: "2023/05/10" },
  { amount: 3000, date: "2023/06/15" },
  { amount: 7000, date: "2024/01/10" },
];

let orde = orders.reduce((acum, item) => {
  let date = new Date(item.date).getFullYear();

  acum[date] = (acum[date] || 0) + item.amount;
  return acum;
}, {});
console.log(orde);
const payments = [
  { method: "cash", amount: 1000 },
  { method: "card", amount: 3000 },
  { method: "cash", amount: 500 },
];

let pay = payments.reduce((acum, item) => {
  acum[item.method] = (acum[item.method] || 0) + item.amount;
  return acum;
}, {});
console.log(pay);

/* const orders1 = [
  {
    id: 1,
    customer: "Madhan",
    items: [
      { product: "Laptop", price: 50000, qty: 1 },
      { product: "Mouse", price: 500, qty: 2 },
    ],
  },
  {
    id: 2,
    customer: "Madhan",
    items: [{ product: "Keyboard", price: 1000, qty: 1 }],
  },
  {
    id: 3,
    customer: "Sangeetha",
    items: [{ product: "Laptop", price: 50000, qty: 1 }],
  },
];

let unique1 = Object.fromEntries(Object.entries(orders1.reduce((o,i)=>(

o[i.customer] ||= new Set(),
i.items.forEach(item=>(
  o[i.customer] = o[i.customer].add(item.product)
  
)),
 o
),{})).map(([item,v])=>[item,v.size]))

console.log(unique1);

let total6 = orders1.flatMap(orders=>orders.items).reduce((acum,item)=>{

  acum[item.product] = (acum[item.product] || 0) + item.price * item.qty
  return acum
},{})
console.log(total6);




let totalCustomer = orders1.reduce((acum,item)=>{

  let total = item.items.reduce((acum,item)=>{

    acum += item.price * item.qty
    return acum

  },0)


  acum[item.customer] = (acum[item.customer] || 0) + total
  return acum

},{})
console.log(totalCustomer); */

/* let count2 = orders1.reduce((acum,item)=>{
  let count = item.items.reduce((acum,item)=>{
    acum += item.price * item.qty
    return acum
  },0)

  acum[item.id] = count
  return acum

},{})
let log = Object.entries(count2).reduce((m,c)=>c[1]>m[1]?c:m,[null,0])
console.log(log);

 
 
let productOrder = orders1.reduce((acum,item)=>{

  acum[item.customer] ||= {}

 item.items.forEach(order=>{
  acum[item.customer][order.product] = ( acum[item.customer][order.product] || 0) + order.qty;
})
return acum
},{})
console.log(productOrder);

let totalRevenue = orders1.flatMap(orders=>orders.items).reduce((acum,item)=>{

  acum[item.product] = (acum[item.product]||0) + item.price * item.qty
  return acum;

},{})
console.log(totalRevenue);

let totalPerCustomer = orders1.reduce((acum, item) => {
  let total = item.items.reduce((acum, item) => {
    acum += item.price * item.qty;
    return acum;
  },0);

  acum[item.customer] = total;
  return acum;
}, {});

console.log(totalPerCustomer);

let spent = orders1.reduce((acum, item) => {
  let total = item.items.reduce((acum, item) => {
    acum += item.price * item.qty;
    return acum;
  }, 0);
  acum[item.id] = total;
  return acum;
}, {});
console.log(spent);

let freq = orders1
  .flatMap((order) => order.items)
  .reduce((acum, item) => {
    acum[item.product] = (acum[item.product] || 0) + 1;
    return acum;
  }, {});
console.log(freq);

let fre = orders1
  .flatMap((orders) => orders.items)
  .reduce((acum, item) => {
    acum[item.product] = (acum[item.product] || 0) + item.qty;
    return acum;
  }, {});

let most = Object.entries(fre).reduce((m, c) => (c[1] > m[1] ? c : m));

console.log(most);

let mostRes = {
  product: most[0],
  qty: most[1],
};
console.log(mostRes);
 */

const order = [
  {
    id: 1,
    customer: "Madhan",
    date: "2025-01-10",
    items: [
      { product: "Laptop", price: 50000, qty: 1 },
      { product: "Mouse", price: 500, qty: 2 },
    ],
  },
  {
    id: 2,
    customer: "Sangeetha",
    date: "2025-01-15",
    items: [
      { product: "Keyboard", price: 1000, qty: 1 },
      { product: "Mouse", price: 500, qty: 1 },
    ],
  },
  {
    id: 3,
    customer: "Madhan",
    date: "2025-02-01",
    items: [
      { product: "Laptop", price: 50000, qty: 1 },
      { product: "Keyboard", price: 1000, qty: 2 },
    ],
  },
  {
    id: 4,
    customer: "Sangeetha",
    date: "2025-02-03",
    items: [
      { product: "Laptop", price: 50000, qty: 1 },
      { product: "Mouse", price: 500, qty: 4 },
    ],
  },
];

let uni = Object.fromEntries(
  Object.entries(
    order.reduce(
      (acum, item) => (
        (acum[item.customer] ||= new Set()),
        item.items.forEach((order) => acum[item.customer].add(order.product)),
        acum
      ),
      {}
    )
  ).map(([ke, v]) => [ke, v.size])
);
console.log(uni);

let uniqueProduct = [
  { customer: "A", items: ["Pen", "Book", "Pen"] },
  { customer: "B", items: ["Book"] },
];

let one = Object.fromEntries(
  Object.entries(
    uniqueProduct.reduce(
      (acum, item) => (
        (acum[item.customer] ||= new Set()),
        item.items.forEach((order) => acum[item.customer].add(order)),
        acum
      ),
      {}
    )
  ).map(([p, k]) => [p, k.size])
);
console.log(one);

let uniquerole = [
  { name: "John", role: "Admin" },
  { name: "John", role: "Editor" },
  { name: "John", role: "Admin" },
];

let pion = Object.fromEntries(
  Object.entries(
    uniquerole.reduce(
      (acum, item) => (
        (acum[item.name] ||= new Set()), acum[item.name].add(item.role), acum
      ),
      {}
    )
  ).map(([k, v]) => [k, v.size])
);
console.log(pion);

let uniqueSkill = [
  { dev: "Alice", skills: ["JS", "React"] },
  { dev: "Alice", skills: ["React", "Node"] },
];

let skilon = Object.fromEntries(
  Object.entries(
    uniqueSkill.reduce(
      (acum, item) => (
        (acum[item.dev] ||= new Set()),
        item.skills.forEach((skill) => acum[item.dev].add(skill)),
        acum
      ),
      {}
    )
  ).map(([v, k]) => [v, k.size])
);
console.log(skilon);

let uniqueBrow = [
  { user: "U1", browser: "Chrome" },
  { user: "U1", browser: "Firefox" },
  { user: "U1", browser: "Chrome" },
];

uniqueBrow.forEach((item) => {
  item.asum = "active";
});
console.log(uniqueBrow);

let brow = Object.fromEntries(
  Object.entries(
    uniqueBrow.reduce((acum, item) => {
      acum[item.user] ||= new Set();
      acum[item.user].add(item.browser);
      return acum;
    }, {})
  ).map(([v, k]) => [v, [...k]])
);
console.log("brow...", brow);

let dat = new Date("2006/06/31") - new Date("2004/03/13");
let date1 = new Date("2008/09/16");
let date2 = new Date("2007/06/16");

let hours = dat / (1000 * 60 * 60);
console.log("hours", hours);

let month1 =
  (date1.getFullYear() - date1.getMonth() * 12) /
  (date2.getFullYear() - date2.getMonth() * 12);
console.log(month1);

let month = 90 / 30;
console.log(month);

let day = dat / (1000 * 60 * 60 * 24);

console.log(dat);
console.log(day);

function dateFormating(d) {
  let day = String(d.getDate()).padStart(2, "0");
  let month = String(d.getMonth() + 1).padStart(2, "0");
  let year = String(d.getFullYear());
  return `${day}-${month}-${year}`;
}
console.log(dateFormating(new Date()));
let time = Date.now();
let timeDate = new Date(time);
console.log(timeDate);

console.log(time);

const expiry = new Date("2025-12-20");
const today = new Date();

if (today >= expiry) {
  console.log("expiry");
} else {
  console.log("active");
}

const startDate = new Date("2025-01-01");
const endDate = new Date("2025-03-09");
let diffDay = endDate - startDate;
let diff = diffDay / (1000 * 60 * 60 * 24);
console.log(diff);

const punchIn = new Date("2025-03-09T12:12").getTime();
const current = new Date().getTime();

console.log(current > punchIn ? "Late" : "on Time");

let groupOrder = [
  { id: 1, date: "2025-03-01T10:00" },
  { id: 2, date: "2025-03-01T14:00" },
  { id: 3, date: "2025-03-02T11:00" },
];

let solve = groupOrder.reduce((acum, item) => {
  let key = item.date.split("T")[0];
  acum[key] = (acum[key] || 0) + 1;
  return acum;
}, {});
console.log(solve);

function Eta(orderTime) {
  let hours1 = 36;
  let ms = hours1 * 1000 * 60 * 60;
  let hours = new Date(orderTime.getTime() + ms);
  return hours;
}

const orderTime = new Date("2025-03-09T08:00Z");

console.log("ETA", Eta(orderTime));

let ts = Date.now();
let front = new Date(ts).toLocaleString();
console.log(front);

const d1 = new Date("2025-03-10T14:30:00Z").toLocaleString();
console.log(d1);

function isWeekend(date) {
  let weekEnd = new Date(date);

  let week = weekEnd.getDay();
  return week === 0 || week === 6;
}
console.log(isWeekend("2025-03-09"));

function checkAttendance(date) {
  let d = new Date(date);
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let totalMinutes = hours * 60 + minutes;
  if (totalMinutes <= 9 * 60) {
    return "on time";
  } else if (totalMinutes <= 9 * 60 + 30) {
    return "Late";
  } else {
    return "Obsent";
  }
}

console.log(checkAttendance("2025-03-10T08:59")); // ✅ On Time
console.log(checkAttendance("2025-03-10T09:00")); // ✅ On Time
console.log(checkAttendance("2025-03-10T09:12")); // ⚠️ Late
console.log(checkAttendance("2025-03-10T09:31"));
const dae = new Date();
console.log(dae.getUTCDay());

const d3 = new Date("2025-03-10T14:30:00Z");

let formatter = d3.toLocaleString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC",
});
console.log(formatter);

const d6 = new Date("2025-03-10T15:30:00");

let istFormater = d6.toLocaleString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/kolkata",
});
console.log(istFormater);

let ist = new Date(
  new Date(d6).toLocaleString("en-US", {
    timeZone: "Asia/kolkata",
  })
);
console.log(ist.toISOString());

const objectImutable = {
  name: "Madhan",
  email: "old@gmail.com",
  lastLogin: "2025-12-01",
  address: { city: "Chennai", pin: 600001 },
};

objectImutable.email = "madhan@gmail.com";
objectImutable.lastLogin = "2025-12-02";
console.log(objectImutable);

let create = {
  ...objectImutable,
  address: { ...objectImutable.address, city: "bengalur", pin: 700010 },
};
console.log(create);

const updateProduct = {
  name: "Madhan",
  cart: [{ id: 1, name: "Laptop", qty: 1 }],
};
const newProduct = { id: 2, name: "Mouse", qty: 1 };

updateProduct.cart.push(newProduct);
console.log(updateProduct);

let mute = {
  ...updateProduct,
  cart: [...updateProduct.cart, newProduct],
};
console.log(mute);

const qtyin = {
  ...updateProduct,
  cart: updateProduct.cart.map((item) =>
    item.id === 2 ? { ...item, qty: item.qty + 1 } : item
  ),
};
console.log(qtyin);

const cartItem = [
  { id: 1, name: "Laptop", qty: 1 },
  { id: 3, name: "Keyboard", qty: 1 },
  { id: 2, name: "Mouse", qty: 2 },
];

const remove = cartItem.filter((item) => item.id !== 3);
console.log(remove);

const empty1 = {
  name: "Madhan",
  cart: [{ id: 1, qty: 2 }],
};

const empty2 = {
  ...empty1,
  cart: empty1.cart.filter(() => false),
};

console.log(empty2);

const guestCart = [{ id: 1, qty: 1 }];
const userCart = [
  { id: 1, qty: 2 },
  { id: 2, qty: 1 },
];

const mergeCart = (guestCart, userCart) => {
  let newCart = {};

  [...guestCart, ...userCart].forEach((item) => {
    if (newCart[item.id]) {
      newCart[item.id].qty += item.qty;
    } else {
      newCart[item.id] = { ...item };
    }
  });
  return Object.values(newCart);
};

console.log("merge", mergeCart(guestCart, userCart));

let object = {
  id: 1,
  name: "madhan",
  email: "madhanjoshva44@gmail.com",
  isVerfied: true,
  profile: {
    photo: "abcd",
  },
};
console.log(object);
console.log(object.profile?.avtar?.url);

let updat = {
  ...object,
  isVerfied: false,
  name: "joshva",
};
console.log(updat);

const serverUser = { name: "Madhan", role: "user" };
const formData = { name: "Raj", phone: "9999999999" };

const merger = (serverUser, formData) => {
  let newData = {};
  newData = {
    ...serverUser,
    ...formData,
  };
  return newData;
};
console.log(merger(serverUser, formData));

const destruct = {
  name: "Madhan",
  email: "m@gmail.com",
  password: "123456",
};

const sense = (destruct) => {
  const { name, email } = destruct;

  return { name, email };
};
console.log(sense(destruct));
const city = {
  name: "Madhan",
  address: {
    city: "Chennai",
    pin: 600001,
  },
};

const cityUpdated = {
  ...city,
  address: { ...city.address, city: "gova" },
};
console.log(cityUpdated);

const quant = [
  { id: 1, qty: 1 },
  { id: 2, qty: 2 },
];

let mutee = quant.map((item) =>
  item.id === 2 ? { ...item, qty: item.qty + 1 } : item
);

console.log(mutee);

const covert = [
  { id: 1, name: "Laptop", qty: 1 },
  { id: 2, name: "Mouse", qty: 2 },
];

const cover = covert.reduce((acum, item) => {
  acum[item.id] = { ...item };
  return acum;
}, {});
console.log(cover);

const turnsms = {
  id: 1,
  settings: {
    notifications: {
      email: true,
      sms: false,
    },
  },
};

const smsOn = {
  ...turnsms,
  settings: {
    ...turnsms.settings,
    notifications: { ...turnsms.notifications, sms: "ON" },
  },
};
console.log(smsOn);

const newAdd = {
  id: 1,
  addresses: [{ id: 1, city: "Chennai" }],
};
const newOne = {
  id: 3,
  city: "vadachennai",
};
const newItem = {
  ...newAdd,
  address: [...newAdd.addresses, newOne],
};
console.log(newItem);

const setting = {
  theme: "light",
  preferences: { darkMode: false },
};

const sett = {
  ...settings,
  preferences: {
    ...settings.preferences,
    darkMode: true,
  },
};
console.log(sett);

const confi = {
  flags: {
    newCheckout: false,
    betaChat: false,
  },
};

const enable = {
  ...confi,
  flags: {
    ...confi.flags,
    betaChat: true,
  },
};
console.log(enable);

const inventory = {
  products: [{ id: 1, name: "Laptop", stock: 10 }],
};

const inve = {
  ...inventory,
  products: [...inventory.products, newOne],
};
console.log(inve);

const tory = {
  products: [
    { id: 1, stock: 10 },
    { id: 2, stock: 5 },
  ],
};
//doubt
const reduce = (tory) => {
  return {
    ...tory,
    products: tory.products.map((item) =>
      item.id === 1 ? { ...item, stock: item.stock - 1 } : item
    ),
  };
};
const restroe = reduce(tory);
console.log(restroe);
console.log(tory);

const currentUser = {
  name: "Madhan",
  email: "m@gmail.com",
  profile: { age: 23 },
};

const patch = {
  profile: { ege: 24 },
};

const {
  profile: { ege },
} = patch;
const patch1 = {
  ...currentUser,
  profile: { ...currentUser.profile, age: ege },
};
console.log(patch1);

const state = {
  user: { name: "Madhan", token: "abc123" },
  cart: [{ id: 1, qty: 2 }],
};

const state1 = (state) => {
  const {
    user: { name: userName },
    cart: userCart1,
  } = state;

  return { userName, userCart1 };
};
const { userName, userCart1 } = state1(state);
console.log(userName, userCart1);

console.log(state1(state));
const comments = [
  { id: 1, text: "Nice" },
  { id: 2, text: "Great" },
];

let nor = {};

comments.forEach((item) => {
  nor[item.id] = item;
});
console.log(nor);

const post = { id: 1, likes: 10, likedByUser: false };

const oldUser = { id: 1, name: "Madhan", email: "old@mail.com" };
const newUser = { email: "new@mail.com" };
const changedUser = {
  ...oldUser,
  email: newUser.email,
};
console.log(oldUser);
console.log(changedUser);

const slectiveUser = { name: "Madhan", email: "m@mail.com", password: "12345" };

const selectUser = (slectiveUser) => {
  const { name: nameUser, email: emailUser } = slectiveUser;
  return { nameUser, emailUser };
};

const { nameUser, emailUser } = selectUser(slectiveUser);
console.log(nameUser, emailUser);
console.log(slectiveUser?.profile?.photo?.url);

const cartQty = [
  { id: 1, qty: 1 },
  { id: 2, qty: 2 },
];

const increse = (cartQty) => {
  return [
    cartQty.map((item) =>
      item.id === 2 ? { ...item, qty: item.qty + 1 } : item
    ),
  ];
};
const qty = increse(cartQty);
console.log(qty);

const addAddress = {
  id: 1,
  addresses: [{ id: 1, city: "Chennai" }],
};

const addnew = { id: 1, name: "Madhan", email: "new@mail.com" };
const addAddress1 = {
  ...addAddress,
  addressess: [...addAddress.addresses, addnew],
};
console.log(addAddress1);

let picode = {
  addAddresses: addAddress.addresses.map((item) => ({
    ...item,
    picode: 167267276,
  })),
};
console.log(picode);

const convert = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
];

let con = convert.reduce((cum, item) => {
  cum[item.id] = item;
  return cum;
}, {});
console.log(con);

const existingUser = {
  id: 1,
  name: "Madhan",
  email: "old@mail.com",
  role: "user",
};

const patchData = { email: "new@mail.com" };

let exist = {
  ...existingUser,
  email: patchData.email,
};
console.log(existingUser);

console.log(exist);
const formData1 = {
  name: "Madhan",
  email: undefined,
  phone: "",
};
const submit = () => {
  if (formData1.name === undefined) {
    delete formData1.name;
  } else if (formData1.email === undefined) {
    delete formData1.email;
  } else if (formData1.phone === undefined) {
    delete formData.phone;
  }
};
submit();
console.log(formData1);

const response1 = {
  id: 1,
  email: "a@mail.com",
  payment: {
    cardNumber: "1234",
    cvv: "999",
  },
};

const { id: id1, email: email1 } = response1;
console.log(id1, email1);

const normalize = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
];

let normal = normalize.reduce((acum, item) => {
  acum[item.id] = item;

  return acum;
}, {});
console.log(normal);

const producti = [
  { id: 1, qty: 1 },
  { id: 1, qty: 2 },
  { id: 2, qty: 1 },
];

const mapObject = (producti) => {
  let map = {};
  [...producti].forEach((item) => {
    if (map[item.id]) {
      map[item.id].qty += item.qty;
    } else {
      map[item.id] = { ...item };
    }
  });
  return Object.values(map);
};
console.log(mapObject(producti));

const userCart2 = [
  { id: 1, qty: 1 },
  { id: 2, qty: 2 },
];
const localCart = [{ id: 1, qty: 3 }];
const wishlist = [{ id: 3, qty: 1 }];

const userInput = { name: "", email: "a@mail.com" };
const defaults = { name: "Guest", email: "", phone: "" };

const missedField = (userInput, defaults) => {
  const result = { ...userInput };

  for (let key in defaults) {
    if (!result[key]) {
      result[key] = defaults[key];
    }
  }
  return result;
};
console.log(missedField(userInput, defaults));

const normalLi = {
  user: {
    id: 1,
    name: "Madhan",
    posts: [
      { id: 1, title: "A" },
      { id: 2, title: "B" },
    ],
  },
};

const normalOut = (input) => {
  let user = input.user;
  let userPost = {};
  user.posts.forEach((item) => {
    userPost[item.id] = { ...item };
  });
  let userMap = {
    id: user.id,
    name: user.name,
    posts: user.posts.map((item) => item.id),
  };
  return {
    userMap: userMap,
    Posts: userPost,
  };
};
console.log(normalOut(normalLi));

const field = { name: "Madhan" };
const defaul = { name: "", email: "", plan: "free", theme: "light" };

const fieldMissed = (defaul, field) => {
  const origi = { ...field };
  for (let key in defaul) {
    if (!origi[key]) {
      origi[key] = defaul[key];
    }
  }
  return origi;
};
console.log(fieldMissed(defaul, field));

const auto = {
  settings: { theme: "dark" },
};

const defaultSettings = {
  settings: { theme: "light", notifications: true },
};

const autoUpdate = (auto, defaultSettings) => {
  const input = auto.settings;
  for (let key in defaultSettings.settings) {
    if (!input[key]) {
      input[key] = defaultSettings.settings[key];
    }
  }
  return input;
};
console.log(autoUpdate(auto, defaultSettings));
const autoAdd = {
  addresses: [{ city: "Chennai" }],
};

const defaultAddr = { pincode: "", country: "India" };

const autoAddress = (autoAdd, defaultAddr) => {
  return autoAdd.addresses.map((add) => ({ ...defaultAddr, ...add }));
};
console.log(autoAddress(autoAdd, defaultAddr));

/* {
  changed: ["age", "phone"],
  added: ["phone"],
  removed: [],
  modifiedValues: { age: { old: 20, new: 21 } }
} */

let old = { name: "A", age: 20, city: "Chennai" };
let updated1 = { name: "A", age: 21, city: "Chennai", phone: "999" };
//advanced One
const chenged = (old, updated1) => {
  const result = {
    chenged: [],
    added: [],
    remove: [],
    modefies: {},
  };
  for (let key in updated1) {
    if (old.hasOwnProperty(key)) {
      if (old[key] !== updated1[key]) {
        result.chenged.push(key);
        result.modefies[key] = {
          old: old[key],
          new: updated1[key],
        };
      }
    }
  }
  for (let key in updated1) {
    if (!old[key]) {
      result.added.push(key);
    }
  }

  for (let key in old) {
    if (!updated1[key]) {
      result.remove.push(key);
    }
  }
  return result;
};
console.log(chenged(old, updated1));

let oldOne = { name: "A", age: 20, email: "a@mail.com" };
let newOne1 = { name: "A", age: 20, email: "new@mail.com" };

const modifyOne = (oldOne, newOne1) => {
  let result = [];

  for (let key in newOne1) {
    if (oldOne[key] !== newOne1[key]) {
      result.push(key);
    }
  }
  return result;
};
console.log(modifyOne(oldOne, newOne1));

let oldClear = { name: "A", bio: "hello" };
let newClear = { name: "A", bio: "" };

const clear = (oldClear, newClear) => {
  let claer = [];
  for (let key in oldClear) {
    if (
      newClear[key] === "" ||
      newClear[key] === null ||
      newClear[key] === undefined
    ) {
      claer.push(key);
    }
  }
  return claer;
};
console.log(clear(oldClear, newClear));

let oldKey = { id: 1, address: { city: "Chennai" } };
let newKey = { id: 1, address: { city: "Chennai", pincode: 600001 } };

const newNested = (oldKey, newKey) => {
  let oldOne = { ...oldKey.address };
  let addNew = {
    ...oldOne,
    pincode: newKey.address.pincode,
  };
  return addNew;
};
console.log(newNested(oldKey, newKey));

const addedKey = (oldKey, newKey) => {
  let newKey1 = { ...newKey.address };
  let oldKey1 = { ...oldKey.address };
  let newAdd = {};
  for (let key in newKey1) {
    if (!oldKey1.hasOwnProperty(key)) {
      newAdd[key] = newKey1[key];
    }
  }
  return newAdd;
};

console.log(addedKey(oldKey, newKey));

let backendUser = {
  name: "Madhan",
  address: { city: "Chennai", pin: 600001 },
};

let formUpdate = {
  address: { city: "Bangalore", landmark: "k.p.park" },
};

const mergeDeep = (back, formData) => {
  let back1 = { ...back };
  let backOne = {
    ...back1,
    address: { ...back.address, ...formData.address },
  };
  return backOne;
};
console.log(mergeDeep(backendUser, formUpdate));

let nested = {
  user: { name: "Madhan", address: { city: "Chennai" } },
};
let nestedOne = {
  db: { host: "localhost", port: 5432 },
  server: { port: 8000 },
};

const flaten = (obj, parentKey, result = {}) => {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flaten(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};

console.log(flaten(nestedOne));

let deep = { user: { name: "Madhan", address: { city: "Chennai" } } };

const deepFlatten = (deep, parentKey = "", result = {}) => {
  for (let key in deep) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof deep[key] === "object" &&
      (deep[key] !== null) & !Array.isArray(deep[key])
    ) {
      deepFlatten(deep[key], newKey, result);
    } else {
      result[newKey] = deep[key];
    }
  }
  return result;
};

console.log(deepFlatten(deep));

let defferRefe = { x: 10, y: { z: 20 } };

const deff = {
  ...defferRefe,
  y: { ...defferRefe.y },
};
console.log(deff);
console.log(defferRefe.y === deff.y);

const cartOne = { items: [{ id: 1, qty: 1 }] };
const newItemOne = { id: 2, qty: 3 };

let muted = {
  ...cartOne,
  items: [...cartOne.items, newItemOne],
};
console.log(muted);

const cartUp = {
  items: [
    { id: 1, qty: 1 },
    { id: 2, qty: 5 },
  ],
};

const up = (cartUp) => {
  return cartUp.items.map((item) =>
    item.id === 2 ? { ...item, qty: item.qty + 1 } : item
  ); //doubt
};
console.log(up(cartUp));

let userCartOne = [{ id: 1, qty: 1 }];
let guestCartOne = [
  { id: 1, qty: 3 },
  { id: 2, qty: 1 },
];

const get = (userCartOne, guestCartOne) => {
  let map = {};
  [...userCartOne, ...guestCartOne].forEach((item) => {
    if (map[item.id]) {
      map[item.id].qty += item.qty;
    } else {
      map[item.id] = item;
    }
  });
  return Object.values(map);
};
console.log(get(userCartOne, guestCartOne));

let backend = { name: "A", address: { city: "Chennai", pin: 10 } };
let form = { address: { pin: 11 } };
const meregCa = {
  ...backend,
  address: { ...backend.address, ...form.address },
};
console.log(meregCa);
let secret = { id: 1, name: "Madhan", password: "secret" };

const { id: userId, name: useName } = secret;
console.log({ userId, useName });

const replace = {
  posts: [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
  ],
};

const ret = (replace) =>
  replace.posts.map((item) =>
    item.id == 2 ? { ...item, title: "updated" } : item
  );

console.log(ret(replace));

const oldObj = { name: "A", age: 20 };
const newObj = { name: "A", age: 21, phone: "99" };

const newOneOne = (oldObj, newObj) => {
  const result = {
    added: [],
    removed: [],
    modified: [],
  };

  for (let key in newObj) {
    if (!oldObj.hasOwnProperty(key)) {
      result.added.push(key);
    }
  }
  for (let key in oldObj) {
    if (oldObj[key] !== newObj[key]) {
      result.modified.push(key);
    }
  }
  for (let key in oldObj) {
    if (!newObj.hasOwnProperty(key)) {
      result.removed.push(key);
    }
  }
  return result;
};
console.log(newOneOne(oldObj, newObj));

const sensitive = {
  name: "A",
  email: "a@mail.com",
  password: "123",
  token: "abc",
};

const { password, token, ...safeUser } = sensitive;
console.log({ name: safeUser.name, email: safeUser.email });

let template = { name: "", phone: "", email: "" };
let input = { name: "A", email: "a@mail.com" };
const missed = (template, input) => {
  let find = {};
  for (let key in template) {
    if (!input.hasOwnProperty(key)) {
      find[key] = key;
    }
  }
  return find;
};
console.log(missed(template, input));

let cha = { x: 1, y: 2, z: 3 };
let chee = { x: 1, y: 5, z: 4 };

const changeOne = (cha, chee) => {
  let count = 0;
  let changed = [];
  for (let key in cha) {
    if (cha[key] !== chee[key]) {
      count++;
      changed.push(count);
    }
  }
  return changed;
};
console.log(changeOne(cha, chee));

let inputOne = { city: "Chennai" };
let defaultsOne = { city: "", pincode: "", country: "India" };
/* const  = Object.values(inputOne,defaultsOne).filter((a,b)=>!(inputOne[b])?inputOne[a]=defaultsOne[b]:a)
console.log(res1); */

const res1 = (defaultsOne, inputOne) => {
  for (let key in defaultsOne) {
    if (!inputOne[key]) {
      inputOne[key] = defaultsOne[key];
    }
  }
  return inputOne;
};
console.log(res1(inputOne, defaultsOne));

const aa = { x: 1, y: { z: 2 } };
const bb = { x: 1, y: { z: 2 } };

const cc = {
  ...aa,
  y: { ...aa, y },
};
console.log(cc.x === aa.x);

console.log(aa.y === bb.y);

const v1 = {
  user: { name: "A", email: "a@mail.com" },
};
console.log(v1.user.name);
console.log(v1.user.email);

let settings1 = { theme: "dark", fonts: { size: 14 } };
Object.freeze(settings1);
settings1.theme = "light";
console.log(settings1);

const deepMerge = {
  user: {
    name: "Madhan",
    age: null,
    address: {
      city: "Chennai",
      pin: undefined,
      location: { lat: 10, lng: null },
    },
  },
};

const deeperMerge = (deepMerge) => {
  if (Array.isArray(deepMerge)) {
    return deeperMerge
      .map((item) => deeperMerge(item))
      .filter((item) => item !== null);
  }
  if (typeof deepMerge === "object" && deepMerge !== null) {
    const cleaned = {};
    for (let key in deepMerge) {
      const value = deepMerge[key];
      const cleanValue = deeperMerge(value);
      if (cleanValue !== null && cleanValue !== undefined) {
        cleaned[key] = cleanValue;
      }
    }
    return cleaned;
  }
  return deepMerge;
};

console.log("deepMerge", deeperMerge(deepMerge));

const validate = {
  name: "string",
  age: "number",
  address: {
    city: "string",
    pin: "number",
  },
};
const validateRes = (validate) => {
  let vali = {};
  for (let key in validate) {
    const value = validate[key];
    vali[key] =
      key === "name"
        ? "madhan"
        : key === "city" && value === "string"
        ? "chennai"
        : key === "pin" && value === "number"
        ? 600112
        : key === "age" && value === "number"
        ? 21
        : "";
    if (typeof value === "object" && value !== null) {
      vali[key] = validateRes(value);
    }
  }
  return vali;
};
console.log(validateRes(validate));

let a11 = { user: { name: "M", address: { city: "Chennai" } } };
let b1 = { user: { address: { pin: 999 } } };

const c2 = {
  ...a11,
  user: { ...a11.user, address: { ...a11.user.address, ...b1.user.address } },
};
console.log("address", c2);

const A = { user: { name: "Madhan", info: { age: 21, city: "Chennai" } } };
const B = { user: { info: { pin: 600001 } } };

const C = {
  ...A,
  user: { ...A.user, info: { ...A.user.info, ...B.user.info } },
};
console.log("info", C);

const D = {
  product: {
    name: "Phone",
    stock: { qty: 10, unit: "pcs" },
  },
};
const E = { product: { stock: { qty: 5 }, variants: ["red"] } };

/* console.log("main",Object.values(D).map(item=>(item.stock.qty>0?{...item,stock:{...item.stock,qty:{...D.product.stock.qty+E.product.stock.qty}}}:item))) */

const F = {
  ...D,
  product: {
    ...D.product,
    stock: { ...D.product.stock, ...E.product.stock },
    variants: [...E.product.variants],
  },
};
console.log(F);

const S = { order: { id: 1, shipping: { city: "Chennai" } } };
const L = { order: { shipping: { status: "packed" } } };

const H = {
  ...s,
  shipping: { ...S.order.shipping, ...L.order.shipping },
};
console.log("hLog", H);

const unFlaten = {
  "product.name": "Phone",
  "product.details.weight": "200g",
  "product.details.size.height": "144",
};

const flaa = (unFlaten) => {
  let result = {};
  for (let key in unFlaten) {
    let parts = key.split(".");
    let current = result;
    parts.forEach((item, index) => {
      if (index === parts.length - 1) {
        current[item] = unFlaten[key];
      } else {
        current[item] = current[item] || {};
        current = current[item];
      }
    });
  }
  return result;
};

console.log(flaa(unFlaten));

const flat = (myFlat, parentKey = "", result = {}) => {
  for (let key in myFlat) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (Array.isArray(myFlat[key])) {
      return myFlat[key].map((item) => flat(myFlat[item], newKey, result));
    }
    if (
      typeof myFlat[key] === "object" &&
      myFlat[key] !== null &&
      !Array.isArray(myFlat[key])
    ) {
      flat(myFlat, newKey, result);
    } else {
      result[newKey] = myFlat[key];
    }
  }
  return result;
};

const field1 = { name: "Madhan" };
const defaul1 = { name: "", email: "", plan: "free", theme: "light" };

for (let key in defaul1) {
  if (!field1[key]) {
    field1[key] = defaul1[key];
  }
}
console.log(field1);

const transaction1 = [
  { type: "income", amount: 4000, date: "2024/03/10" },
  { type: "expense", amount: 1000, date: "2024/03/12" },
  { type: "income", amount: 2000, date: "2024/04/05" },
  { type: "expense", amount: 500, date: "2024/04/08" },
];

const tranc = transaction1.reduce((acum, item) => {
  const month = new Date(item.date).toLocaleString("en-US", { month: "short" });

  acum[month] = {
    income: (acum[item.type] || 0) + item.amount,
    expenses: (acum[item.type] || 0) + item.amount,
  };

  return acum;
}, {});
console.log(tranc);

const vow = "JavaSceripot";
const vowe = "aeiou";
let count4 = 0;
for (let i = 0; i < vow.length - 1; i++) {
  if (vowe.includes(vow.charAt(i))) {
    count4++;
  }
}
console.log(count4);

let rev = "madam";
let reverse = "";
for (let i = rev.length - 1; i >= 0; i--) {
  reverse += rev[i];
}
if (rev === reverse) {
  console.log("yes it is polidrome");
} else {
  console.log("yes it is not polindrome");
}
console.log(reverse);

let spa = "nurses run";
let space = false;
for (let i = 0; i < spa.length - 1; i++) {
  if (spa[i] === " ") {
    space = true;
  }
}
console.log(space);

let cap = "hello world from js";

let caps = cap
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(caps);

let wordsin = "   I   love   JavaScript   ";

let dig = "123a56";
let digit = false;
if (/[/\d/]/.test(dig)) {
  digit = true;
}
console.log(digit);

let mas = "1234567812345678";

let mask = "*".repeat(mas.length - 4) + mas.slice(-4);
console.log(mask);

let ema = "user@gmail.com";
let emi = "user@gmail";
const emai = (email) => {
  console.log(ema);

  if (email.includes("@gmail.com")) {
    return true;
  }
  return false;
};
console.log(emai(emi));

const passd = "pass123";

const passed = (passd) => {
  if (/^[/\A-Z/]+[/\a-z/]+[/\@#$%/]+[/\d/]/.test(passd)) {
    return true;
  } else {
    return false;
  }
};

console.log(passed(passd));

let Words = ["apple", "app", "banana"];
let Query = "ap";

const preserch = (words, query) => {
  return words.filter((item) => item.startsWith(query));
};
console.log(preserch(Words, Query));

let ment = "Hi @madhan and @raj";
let ppp = [];
for (let i = 0; i < ment.length - 1; i++) {
  if (ment[i] === "@") {
    let start = i + 1;
    let end = ment.indexOf(" ", start);
    console.log("end", end);

    if (end === -1) {
      end = ment.length;
    }
    ppp.push(ment.slice(start, end));
  }
}
console.log(ppp);

let change = "Learning #JavaScript and #React is #fun";

let chan = [];

for (let i = 0; i < change.length - 1; i++) {
  if (change[i] === "#") {
    let start = i + 1;
    let end = change.indexOf(" ", start);

    if (end == -1) {
      end = change.length;
    }
    chan.push(change.slice(start, end));
  }
}
console.log(chan);

let capt = "9876543210";

let capte = "*".repeat(capt.length - 4) + capt.slice(-4);

console.log(capte);

let capst = "madhan raj full stack developer";

let resulted = capst
  .split(" ")
  .map((item) => item[0].toUpperCase() + item.slice(1))
  .join(" ");
console.log(resulted);
let merged = "react is easy and react is powerful";

let mergedres = merged.split(" ").reduce((acum, item) => {
  acum[item] = (acum[item] || 0) + 1;
  return acum;
}, {});
console.log(mergedres);

let urlexist = "https://google.com";
let foun = false;
if (!urlexist.includes("http")) {
  foun = false;
} else {
  foun = true;
}
console.log(foun);

let digmatch = "abc123def456";

let digma = digmatch.match(/[\0-9]+/g);
console.log(digma);
let matchAlpha = "hi123@world!";

let alphat = matchAlpha.match(/[\a-z]+/gi);
console.log(alphat);

let matchAll = "Hello @madhan and @raj123";

let matchallword = matchAll.match(/[/\@\a-b/]+/g);
console.log(matchallword);

let string = /^(?=.*[\d])/.test("abcd123");
console.log(string);

let letter = /(?=.*[\a-b])/.test("aeiabcd");
console.log(letter);

let ondig = /(?=.*[\a-bA-Z])(?=.*[\d])/.test("jashc12kj");
console.log(ondig);

let passwordCheck =
  /^[a-z](?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$])[^\s]{11,}$/.test(
    "ahanRaj@123rocky@123"
  );
console.log(passwordCheck);

let passwords =
  /^[a-z](?=.*[A-Z])(?=.*\d)(?=.*[@#$%])(?!.*(admin|password|123456))[^\s]{12,}$/.test(
    "radHanRaj@123"
  );
console.log(passwords);

let num = 1234 % 1000;
console.log(num);

let freq = {};
let strng = "swiss";

for (let i = 0; i < strng.length - 1; i++) {
  freq[strng.charAt(i)] = (freq[strng.charAt(i)] || 0) + 1;
}
console.log(freq);
const repeat1 = (strng) => {
  for (let i = 0; i < strng.length - 1; i++) {
    if (freq[strng.charAt(i)] === 1) {
      return strng.charAt(i);
    }
  }
  return -1;
};

console.log(repeat1(strng));

let perc = (20 * 50) / 100;
console.log(perc); //10

let perc1 = (75 * 40) / 100;
console.log(perc1); //30

let perc2 = (10 * 200) / 100; //20
console.log(200 + perc2);

let perc3 = (25 * 800) / 100;
let perc4 = 800 - perc3;
console.log(perc4);

let perc5 = 20 - 10 - (20 * 10) / 100;
console.log(perc5);

const objiect = {
  name: "A",
  marks: { tamil: 90, eng: 80 },
  skills: ["JS", "React"],
};

function deepClone(objiect) {
  if (typeof objiect !== "object" && objiect !== null) {
    return objiect;
  }
  let deep = Array.isArray(objiect) ? [] : {};
  for (let key in objiect) {
    deep[key] = objiect[key];
    if (typeof objiect[key] === "object") {
      deepClone(objiect[key]);
    }
  }
  return deep;
}
console.log(deepClone(objiect));

const flaten1 = {
  name: "A",
  address: {
    city: "Chennai",
    geo: { lat: 10, lng: 20 },
  },
};

const flatten = (flaten1, parentKey = "", result = {}) => {
  for (let key in flaten1) {
    let newKey = parentKey ? `${parentKey}${key}` : key;

    if (typeof flaten1[key] === "object") {
      flaten(flaten1[key], (parentKey = key), result);
    } else {
      result[newKey] = flaten1[key];
    }
  }
  return result;
};
console.log(flatten(flaten1));

const a4 = { x: 10, y: { z: 20 } };
const b4 = { y: { p: 50 } };

let b6 = {
  ...a4,
  y: { ...a4.y, ...b4.y },
};
console.log(b6);

const deepMerge1 = (a4, b4) => {
  let deep = { ...a4 };
  for (let key in b4) {
    if (typeof b4[key] === "object") {
      deep[key] = deepMerge1(a4[key] || {}, b4[key]);
    } else {
      deep[key] = b4[key];
    }
  }
  return deep;
};
console.log(deepMerge1(a4, b4));

const a7 = { x: 10, y: { z: 20 } };
const b7 = { x: 10, y: { z: 2 } };

const mergeTwoObject = (a7, b7) => {
  if (a7 === b7) {
    return true;
  }

  if (typeof a7 !== "object" && b7 !== "object") {
    return false;
  }
  let a = Object.keys(a7);
  let b = Object.keys(b7);

  if (a.length !== b.length) {
    return false;
  }

  for (let key in a7) {
    if (!mergeTwoObject(a7[key], b7[key])) {
      return false;
    }
  }

  return true;
};

console.log(mergeTwoObject(a7, b7));

const api = [
  { _id: "u1", name: "A" },
  { _id: "u2", name: "B" },
];

let looploop = {};

api.forEach((item) => {
  looploop[item._id] = item;
});
console.log(looploop);

const groupObject = [
  { role: "admin", city: "Chennai" },
  { role: "user", city: "Chennai" },
  { role: "admin", city: "Delhi" },
];

let cont = groupObject.reduce((acum, item) => {
  let key = `${item.role}_${item.city}`;
  if (!acum[key]) {
    acum[key] = [];
  }
  acum[key].push(item);
  return acum;
}, {});
console.log(cont);

let input1 = "hello".split("");
console.log(input1);

let start = 0;
let end = input1.length - 1;
while (start <= end) {
  let temp = input1[start];
  input1[start] = input1[end];
  input1[end] = temp;
  start++;
  end--;
}
console.log(input1.join(""));

const checkPolli = (str) => {
  let arr = str.split("");
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  const rev = arr.join("");
  if (rev !== str) {
    return false;
  }

  return true;
};

console.log(checkPolli("hello"));

let freqe = {};
let frequence = "aaabbbccc".split("");

frequence.forEach((item) => {
  freqe[item] = (freqe[item] || 0) + 1;
});
console.log(freqe);

const nonRepeat = (str) => {
  let freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  for (let i = 0; i < str.length - 1; i++) {
    if (freq[str.charAt(i)] === 1) {
      return str.charAt(i);
    }
  }
  return -1;
};

console.log(nonRepeat("aabbcdde"));

const checkAnagram = (a1, a2) => {
  if (a1.length !== a2.length) {
    return false;
  }
  let freq = {};
  for (let ch of a1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  for (let ch of a2) {
    if (!freq[ch]) {
      return false;
    }
    freq[ch]--;
  }

  return true;
};
console.log(checkAnagram("listen", "silent"));

const reverseWord = (str) => {
  let arr = str.trim().split(" ");
  console.log(arr.length);

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[str.length - 1 - i];
    arr[str.length - 1 - i] = temp;
  }

  return arr.join(" ");
};

console.log(reverseWord(" i love javascript "));

const countVowels = (str) => {
  let vouwesl = 0;
  let consonant = 0;
  for (let ch of str) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      vouwesl++;
    } else {
      consonant++;
    }
  }

  return { vouwesl, consonant };
};
console.log(countVowels("madhanraj"));

const model = () => {
  let vouwesl = new Set("aeiouAEIOUmadhan");
  let v = 0;
  let c = 0;
  for (ch of vouwesl) {
    if (/[a-zA-Z]/.test(ch)) {
      vouwesl.has(ch) ? v++ : c++;
    }
  }
  return { v, c };
};

console.log(model());

const word = "aabbcc";
const duplicate = (word) => {
  const seen = new Set("");
  let res = "";
  for (let ch of word) {
    if (!seen.has(ch)) {
      seen.add(ch);
      res += ch;
    }
  }
  return res;
};
console.log(duplicate(word));

const wordlength = "Hello World";

const lenghtword = (wordlength) => {
  const trim = wordlength.trim();
  let count = 0;
  for (let ch of trim) {
    console.log(ch);
    if (ch !== " ") {
      count += 1;
    } else {
      count = 0;
    }
  }
  return count;
};
console.log(lenghtword(wordlength));

const longeest = "abcabcbb";

const sumOfSub = (arr, k) => {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  console.log(windowSum);

  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = windowSum;
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
};

console.log(sumOfSub([1, 2, 3, 4, 5, 6], 3));

const transactions2 = [
  { type: "income", amount: 5000, date: "2024/01/10" },
  { type: "expense", amount: 1200, date: "2024/01/15" },
  { type: "income", amount: 3000, date: "2024/02/05" },
];

const tran6 = transactions2.reduce((acum, item) => {
  const month = new Date(item.date).toLocaleString("en-US", { month: "short" });
  if (!acum[month]) {
    acum[month] = { income: 0, expense: 0 };
  }
  acum[month][item.type] += 1;
  return acum;
}, {});
console.log(tran6);

const tran1 = transactions2.reduce((acum, item) => {
  const month = new Date(item.date).toLocaleString("US-en", { month: "short" });
  if (!acum[month]) {
    acum[month] = { income: 0, expense: 0 };
  }
  acum[month][item.type] += item.amount;
  return acum;
}, {});

console.log(tran1);

const student1 = [
  { name: "A", grade: "A" },
  { name: "B", grade: "B" },
  { name: "C", grade: "A" },
];

const stuen = student1.reduce((acum, item) => {
  if (!acum[item.grade]) {
    acum[item.grade] = [];
  }
  acum[item.grade].push(item.name);
  return acum;
}, []);
console.log(stuen);

const employeees = [
  { dept: "IT", salary: 50000 },
  { dept: "HR", salary: 30000 },
  { dept: "IT", salary: 40000 },
];

const emply = employeees.reduce((acum, item) => {
  acum[item.dept] = (acum[item.dept] || 0) + item.salary;

  return acum;
}, {});
console.log(emply);

const words = ["hi", "hello", "bye", "world"];

const words1 = words.reduce((acum, item) => {
  console.log(item.length);

  acum[item.length] = (acum[item.length] || 0) + 1;

  return acum;
}, {});
console.log(words1);
const orderses = [
  { id: 1, status: "delivered" },
  { id: 2, status: "pending" },
  { id: 3, status: "delivered" },
];

const reduceses = orderses.reduce((acum, item) => {
  if (!acum[item.status]) {
    acum[item.status] = [];
  }
  acum[item.status].push(item.id);
  return acum;
}, {});

console.log(reduceses);

const freqee = "javascript";

const freee = (freqee) => {
  let free = {};
  for (let ch of freqee) {
    free[ch] = (free[ch] || 0) + 1;
  }
  return free;
};

console.log(freee(freqee));

const trans = [
  { id: 1, type: "income", amount: 5000, date: "2024-01-10" },
  { id: 2, type: "expense", amount: 2000, date: "2024-01-12" },
  { id: 3, type: "income", amount: 3000, date: "2024-02-05" },
  { id: 4, type: "expense", amount: 1500, date: "2024-02-07" },
];

const monthlyAdminDahsBoard = (trans) => {
  return trans.reduce((acum, item) => {
    const month = new Date(item.date).toLocaleString("en-US", {
      month: "short",
    });

    if (!acum[month]) {
      acum[month] = { income: 0, expense: 0 };
    }
    acum[month][item.type] += item.amount;

    return acum;
  }, {});
};

let aa1 = 10;
let bb1 = 20;
let cc1 = 30;
const largestNum = (aa1, bb1, cc1) => {
  if (aa1 > bb1) {
    if (aa1 > cc1) {
      return aa1;
    } else if (aa1 < cc1) {
      return cc1;
    }
  } else if (aa1 < bb1) {
    if (bb1 > cc1) {
      return bb1;
    } else if (bb1 < cc1) {
      return cc1;
    }
  }
};

console.log(largestNum(aa1, bb1, cc1));

let countVowel = "madhanraj";
let vowel = 0;

for (let i = 0; i < countVowel.length - 1; i++) {
  let ch = countVowel.charAt(i);
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    vowel++;
  }
}
console.log(vowel);

for (let i = 2; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbuzz");
  } else {
    console.log(i);
  }
}

let fact = 1;

for (let i = 1; i <= 5; i++) {
  fact = fact * i;
}
console.log(fact);

let swap1 = 10;
let swap2 = 20;

swap1 = swap1 + swap2;
swap2 = swap1 - swap2;
swap1 = swap1 - swap2;
console.log(swap1);
console.log(swap2);

let sum = [1, 2, 3, 4, 4];
let freq10 = {};
let dup = [];
sum.forEach((i) => {
  freq10[i] = (freq10[i] || 0) + 1;
  if (freq10[i] <= 1) {
    dup.push(i);
  }
});
console.log(dup);

let sum1 = sum.reduce((acum, i) => acum + i, 0);
let sum3 = 0;
let sum2 = sum.filter((i) => (i > sum3 ? (sum3 = i) : i));
console.log(sum1);
console.log(sum3);

let reversee = "madhanraj";
const reve1 = (reverse) => {
  let spli = reverse.split("");
  let sp = 0;
  let ep = reverse.length - 1;
  while (sp < ep) {
    let temp = spli[sp];
    spli[sp] = spli[ep];
    spli[ep] = temp;
    sp++;
    ep--;
  }
  return spli.join("");
};
console.log(reve1(reversee));

const numEveOrOdd = (num) => {
  let odd = true;
  if (num % 2 === 0) {
    return odd;
  } else {
    return false;
  }
};
console.log(numEveOrOdd(10));

const checkPolli1 = (check) => {
  let check1 = "";
  for (let i = check.length - 1; i >= 0; i--) {
    check1 += check[i];
  }
  if (check1 === check) {
    console.log("string is ploindrome");
    return true;
  }
  return false;
};

console.log(checkPolli1("madae"));

let fact1 = 1;

for (let i = 1; i <= 5; i++) {
  fact1 *= i;
}
console.log(fact1);

let countAccu = ["a", "b", "a", "c", "b"];
let acuReq = {};
countAccu.forEach((i) => {
  acuReq[i] = (acuReq[i] || 0) + 1;
  return acuReq;
});
console.log(acuReq);

let arreq1 = [1, 2, 3, 4, 2, 3, 5, 7, 2, 3, 8];

const sortArray = (arreq1) => {
  for (let i = 0; i <= arreq1.length - 1; i++) {
    for (let j = i + 1; j <= arreq1.length - 1; j++) {
      if (arreq1[i] > arreq1[j]) {
        let temp = arreq1[j];
        arreq1[j] = arreq1[i];
        arreq1[i] = temp;
      }
    }
  }
  return arreq1;
};
console.log(sortArray(arreq1));

let arreq2 = [1, 2, 3];

const arreEqual = (arreq1, arreq2) => {
  let n1 = arreq1.length;
  let n2 = arreq2.length;

  if (n1 !== n2) {
    return false;
  }

  for (let i = 0; i <= n1 - 1; i++) {
    if (arreq1[i] !== arreq2[i]) {
      return false;
    }
  }
  return true;
};
console.log(arreEqual(arreq1, arreq2));

let keys = ["name", "age"];
let values = ["Madhan Raj", 23];

const convertTo = (keys, values) => {
  let convertObject = {};
  for (let i = 0; i <= keys.length - 1; i++) {
    convertObject[keys[i]] = values[i];
  }
  return convertObject;
};
console.log(convertTo(keys, values));
if (!Array.prototype.map2) {
  Array.prototype.map2 = function (callback, initialValue) {
    let acum = initialValue;
    let start = 0;
    if (acum === undefined) {
      acum = this[0];
      start = 1;
    }

    for (let i = start; i <= this.length - 1; i++) {
      acum = callback(acum, this[i], i, this);
    }
    return acum;
  };
}

let map1 = [1, 2, 3, 4];
console.log(map1.map2((acum, i) => acum + i, 0));

let arr3 = [1, 2, 3, 4, 0, 0, 0, 0];
let arr4 = [3, 4, 5, 6];
const mergeTwo = (arr3, arr4) => {
  let n1 = arr3.length;
  let n2 = arr4.length;
  let i = n1 - n2 - 1;
  let j = n2 - 1;
  let k = n1 - 1;
  let freq = {};
  let arrr = [];
  while (i >= 0 && j >= 0) {
    if (arr3[i] >= arr4[j] && arr3[i] !== arr4[j]) {
      arr3[k--] = arr3[i--];
    } else {
      arr3[k--] = arr4[j--];
    }
  }
  while (j >= 0) {
    arr3[k--] = arr4[j--];
  }
  for (let ch of arr3) {
    freq[ch] = (freq[ch] || 0) + 1;
    if (freq[ch] <= 1) {
      arrr.push(ch);
    }
  }
  return arrr;
};
console.log(mergeTwo(arr3, arr4));

function runOnce(fn) {
  let executed = false;
  return function () {
    if (!executed) {
      console.log(executed);
      executed = true;
      return fn();
    }
  };
}
let run = runOnce(() => {
  console.log("hii onece");
});
run();
run();
run();

/* function closure() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let close = closure();
close();
close(); */

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

function wait() {
  return new Promise((resolve) => resolve("hiii"));
}

function wait1() {
  return new Promise((resolve) => setTimeout(() => resolve("welcome"), 2000));
}

async function promise2() {
  const awai = await wait1();
  return awai;
}

async function promise1() {
  const awai = await wait();
  return awai;
}

Promise.all([promise1(), promise2()]).then((res) => console.log(res));

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "madhan",
        email: "madhanjoshva44@gmail.com",
        age: 19,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function resultData() {
  const data = await fetchData();

  return data;
}

let dat1 = resultData();
dat1.then((res) => console.log(res));

function OnceOnec(fn) {
  let executed = false;
  return function (...args) {
    if (!executed) {
      executed = true;
      return fn(...args);
    }
  };
}
const onceFunctionn = OnceOnec((...args) => console.log(args));
onceFunctionn(1, 2, 3, 4, 5, 6, 7);
onceFunctionn();
onceFunctionn();

function deBounce1(fn, delay) {
  let timeOut = 0;
  return function (...args) {
    clearTimeout(timeOut);
    console.log("timeout", timeOut);
    timeOut = setTimeout(() => {
      return fn(...args);
    }, delay);
  };
}

const deb = deBounce1(() => console.log("madhan"), 3000);
deb();
deb();

function throttel(fn, delay) {
  let lastcall = 0;
  return function (...args) {
    let now = Date.now();
    console.log("hii are you", now);
    if (now - lastcall >= delay) {
      lastcall = now;
      return fn(...args);
    }
  };
}
const thro = throttel(() => console.log("funtion is nothig to return"), 3000);
thro();
thro();

const detectType = (value) => {
  if (typeof value === "number") {
    return typeof Number;
  } else if (typeof value === "string") {
    return typeof String;
  } else if (typeof value === "boolean") {
    return typeof Boolean;
  } else if (typeof value === "undefined") {
    return undefined;
  } else if (typeof value === "symbol") {
    return typeof Symbol;
  } else if (typeof value === "object") {
    return typeof Object;
  }
};

console.log("thorttle", detectType("madhan"));

const productsSection = [
  { id: 1, name: "T-shirt", price: 300 },
  { id: 2, name: "Jeans", price: 1200 },
  { id: 3, name: "Cap", price: 150 },
];

const cartSection = {
  1: 2,
  2: 1,
  3: 3,
};

const productTotal = (productsSection, cartSection) => {
  return productsSection.reduce((total, item) => {
    const qty = cartSection[item.id] || 0;

    return total + item.price * qty;
  }, 0);
};
console.log(productTotal(productsSection, cartSection));

const productsDesire = [
  { id: 1, name: "T-shirt", category: "clothing", price: 300 },
  { id: 2, name: "Jeans", category: "clothing", price: 1200 },
  { id: 3, name: "Cap", category: "accessories", price: 150 },
  { id: 4, name: "Socks", category: "clothing", price: 100 },
  { id: 5, name: "Watch", category: "accessories", price: 3500 },
];

const DesireProduct = (productsDesire) => {
  return productsDesire.reduce((acum, item) => {
    if (
      item.category === "clothing" &&
      item.price >= 300 &&
      1000 >= item.price
    ) {
      acum[item.category] = item;
    }
    return acum;
  }, {});
};
console.log(productsDesire);
