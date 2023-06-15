// 함수

function add(num1: number, num2: number): void{
    // return num1 - num2;
    console.log(num1 + num2);
}

add(1,2);



function hello(name?: String){
    return `Hello, ${name || "world"}`;
}

function hello2(name = "word"){
    return `Hello, ${name}`;
}

function hello3(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are age is ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

const result = hello3("park", 32);
console.log(result);

function add2(...nums: number[] ){
    return nums.reduce((sum, num) => sum + num, 0);
}

let fun = add2(1,2,3,4,5,6,7,8,9,10);
console.log(fun);

interface Useru {
    name: string;
}
const Sam: Useru = {name: 'Sam'}

function showName(this:User, age:number, gender:'m' | 'f'){
    console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, 'm');

interface User2 {
    name: string;
    age: number;
}

function join(nmae: string, age: string): string;
function join(nmae: string, age: number): User2;
function join(name: string, age: number | string ): User2 | string{
    if(typeof age === "number"){
        return{
            name,
            age,
        }
    } else{
        return "나이는 숫자로 입력해주세요";
    }
}

const tom: User2 = join("Tom", 30);
const smith: string = join("Smith", "30");

console.log(tom);
console.log(smith);



// Literal Types
const userName1 = "Bob";
let userName2 = "Tom";  

type Job = "police" | "developer" | "teacher";

interface User3 {
    name: string;
    job: Job;
}

const user:User3 = {
    name: "Bob",
    job: "developer",
}

interface HighSchoolStudent {
    name: number | string;
    grade: 1 | 2 | 3;
}

// Union Types
interface Car {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car | Mobile){
    console.log(gift.color);
    if(gift.name === "car"){
        gift.start();
    } else {
        gift.call();
    }
}

// Intersection Types(교차타입)
interface Car2 {
    name: string;
    color: string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & Car2 = {
    name: "타요",
    start(){},
    color: "red",
    price: 1000,
}
