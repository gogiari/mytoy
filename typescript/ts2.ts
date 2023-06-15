
// 접근 제한자(Access modifier) = public, private, protected
abstract class Car{
    color: string;
    constructor(color: string){
        this.color = color;
    }
    start(){
        console.log("start");
    }
    abstract doSomething():void;
}

// const car = new Car("red"); 추상화는 상속만 통해서 사용가능

class Bmw extends Car {
    constructor(color: string){
        super(color);
    }
    doSomething(): void {
        console.log(3);
    }
}

const z4 = new Bmw("black");

// Generic

function getSize<T>(arr: T[]): number{
    return arr.length;
}

const arr1 = [1,2,3,];
console.log(getSize(arr1));

const arr2 = ["a", "b", "c"];
getSize(arr2);

const arr3 = [false, true, true];
getSize(arr3);

const arr4 = [{}, {}, { name: "Tom"}];
getSize(arr4);

interface show<T>{ 
    moName: string;
    price: number;
    option: T;
}

//// Utility Types

// keyof
interface User{
    id: number;
    name : string;
    age: number;
    gender: "m" | "f";
    message?: string;
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk:UserKey = "name"

// Partial<T> - 프로퍼티를 모두 옵션으로 바꿔줘서 일부 프로퍼티만 사용가능
let admin: Partial<User> = {
    id: 1,
    name: "Bob",
    // job: "ddong", // 없는 프로퍼티 사용시 에러
}

// Required<T> - 모든 프로퍼티를 필수로 바꿔줌 예를들어: ?를 필수입력으로
let hoho: Required<User> = {
    id: 2,
    name: "hoho",
    age: 30,
    gender: "m",
    message: "사랑해요",
}

// ReadOnly<T> - 프로퍼티 값 입력후 변경불가.
 let reon: Readonly<User> = {
    id: 2,
    name: "reon",
    age: 33,
    gender: "f",
    message: "ㅎㅎㅎ",
}
// reon.age = 33; // 읽기전용이라 수정불가

// Record<K,T> - K : key, T : type
type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";

const score: Record<Grade, Score> = {
    "1": "A",
    "2": "B",
    "3": "C",
    "4": "D",
}

// Pick<T,K> - 타입에서 키 골라서 쓸수있음
const pickme: Pick<User, 'id' | 'name'> = {
id: 0,
name: "픽미",
}

// Omit<T,K> 픽과 반대로 제외하고 쓸수있음
const omt: Omit<User, 'age' | 'gender'> = {
id: 0,
name: "오밋",
}

// Exclude<T1, T2> - 오밋과 비슷하지만, 오밋은 프로퍼티 제거, 익스쿨루드는 타입으로 제거함
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<Type>
type TT1 = string | null | undefined | void;
type TT2 = NonNullable<TT1>;


