// 함수
function add(num1, num2) {
    // return num1 - num2;
    console.log(num1 + num2);
}
add(1, 2);
function hello(name) {
    return `Hello, ${name || "world"}`;
}
function hello2(name = "word") {
    return `Hello, ${name}`;
}
function hello3(name, age) {
    if (age !== undefined) {
        return `Hello, ${name}. You are age is ${age}.`;
    }
    else {
        return `Hello, ${name}`;
    }
}
const result = hello3("park", 32);
console.log(result);
function add2(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}
let fun = add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(fun);
const Sam = { name: 'Sam' };
function showName(age, gender) {
    console.log(this.name, age, gender);
}
const a = showName.bind(Sam);
a(30, 'm');
function join(name, age) {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요";
    }
}
const tom = join("Tom", 30);
const smith = join("Smith", "30");
console.log(tom);
console.log(smith);
// Literal Types
const userName1 = "Bob";
let userName2 = "Tom";
const user = {
    name: "Bob",
    job: "developer",
};
function getGift(gift) {
    console.log(gift.color);
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
const toyCar = {
    name: "타요",
    start() { },
    color: "red",
    price: 1000,
};
