// 접근 제한자(Access modifier) = public, private, protected
class Car {
    constructor(color) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
// const car = new Car("red"); 추상화는 상속만 통해서 사용가능
class Bmw extends Car {
    constructor(color) {
        super(color);
    }
    doSomething() {
        console.log(3);
    }
}
const z4 = new Bmw("black");
// Generic
function getSize(arr) {
    return arr.length;
}
const arr1 = [1, 2, 3,];
console.log(getSize(arr1));
const arr2 = ["a", "b", "c"];
getSize(arr2);
const arr3 = [false, true, true];
getSize(arr3);
const arr4 = [{}, {}, { name: "Tom" }];
getSize(arr4);
const uk = "name";
// Partial<T> - 프로퍼티를 모두 옵션으로 바꿔줘서 일부 프로퍼티만 사용가능
let admin = {
    id: 1,
    name: "Bob",
    // job: "ddong", // 없는 프로퍼티 사용시 에러
};
// Required<T> - 모든 프로퍼티를 필수로 바꿔줌 예를들어: ?를 필수입력으로
let hoho = {
    id: 2,
    name: "hoho",
    age: 30,
    gender: "m",
    message: "사랑해요",
};
// ReadOnly<T> - 프로퍼티 값 입력후 변경불가.
let reon = {
    id: 2,
    name: "reon",
    age: 33,
    gender: "f",
    message: "ㅎㅎㅎ",
};
const score = {
    "1": "A",
    "2": "B",
    "3": "C",
    "4": "D",
};
// Pick<T,K> - 타입에서 키 골라서 쓸수있음
const pickme = {
    id: 0,
    name: "픽미",
};
// Omit<T,K> 픽과 반대로 제외하고 쓸수있음
const omt = {
    id: 0,
    name: "오밋",
};
