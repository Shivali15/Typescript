// const a = "1";
// console.log("aaa", a);

// tsc main.ts -w
//  watch the file

// variables:
//  constant value cant change
const hello = "world";

// for  change we can use let :

let Hello = "world"; // this can only be string value
Hello = "foo";

//  we can change value only to the same type
// Hello =true; // we will get error
//  becoz boolean vlaue can not assign to Hello

// asign type :
let Helloo: string = "world";

// functions :

const getfullname = (name: string, surname: string): string => {
  // mention that name n surname should string (specify every type )
  return name + " " + surname;
};

console.log(getfullname("shivali", "umbarkar"));

// create objects in typescript  :
const user: { name: string; age: number } = {
  name: "shanti",
  age: 19,
  // typescript read all properties n can understand  our objects by default
};

// we can specify at once n can reuse it evrry where not just duplicated every time  becoz we can make mistake
const user2: { name: string; age: number } = {
  name: "jack",
  age: 21,
};

//  interfaces

// interfaces in typescript: it a special entity in typescript which help is to create objects with some properties
//  to create interface : word interface is used
//interface  gives us  best auto complete n type check-in ->(highlights error )in world
// we can define function inside the interface

// we can create c;asses in interface

class User {}
interface IUser {
  // define properties inside the interface is mandatory
  name: string;
  // but  if not need age every time then we can define it with ?   mark sign
  age?: number;
  // function inside the interface
  getmessage(): string;
}
// {name:string; age:number }  this is replace by the interface User noneed to define every where
const user3: IUser = {
  name: "jack",
  age: 21,
  getmessage() {
    return "Hello" + name;
  },
};
const user4: IUser = {
  name: "jack",
  age: 21,
  getmessage() {
    return "Hello" + name;
  },
};
console.log(user.name);

// types and union :
// union operator:
let username: string = "alex";
//  signle pipe in betn datatypes that is union operator
//  the type can be string or number
//  union operator :used to  send some value of different type
//  union :operator  to combine data types
let pagenumber: string | number = "1";

// by default it will be null and at some point if we get error it will show message which will written in string
let errormessage: string | null = null;

//  in union we can used custom interfaces

//  type allases in typescript :we can create allases of differeent types
type ID = string; // we can write allases for basic types andcan used it every where

type populartag = string;
//  custom type in union
type maybepopulartag = string | null;
interface Userinterface {
  id: ID;
  //  inside this interface we have name n surname of type string

  name: string;
  surname: string;
}
//  populartag[] this entity inside our application
//  ["tea", "coffee"] this the array of entities
const populartags: populartag[] = ["tea", "coffee"];
//  we create one property user0 it can be default null becoz we didnt fetch user
//  or we fetch user n then it will be Userinteface
const dragonstag: maybepopulartag = "dargon";
// by default it will be null otherwise will be userinterface
let user0: Userinterface | null = null;

//  void :we use void when we dont return something from function
const dosomething = (): void => {
  //  if function not have return then it return void
  console.log("dosomething");
};
let foo: void = undefined;

// Any type: any type turns off typescript checks
//  if u cant fixed a typescript  error u can write any
// any is not solution but start of bogger problems

//  type never :
//  normally it is used in libraries
// below function with never cant be excecuted to the end
//  never : is somthing that never happen
// never ends
const dosomething1 = (): never => {
  throw "never ";
};

// type unknwon : indroduced  in typescript3
// let vAny: any = 10;
// let Vunknown = 10;

// let s1: string = vAny;
// let s2: string = Vunknown;
// console.log(vAny.foo());
// console.log(Vunknown.foo());

// type assertion in typescript :one type into another type

let pagenumber1: string = "1";
//  we need to convert it to unknown type  first n then  as number : this is called type assertion or datatypes
let numericpagenumber: number = pagenumber1 as unknown as number;

//  working with DOM:
// read one dom element
// read a  class : .foo
// typescript has lots of types for DOM out of box
//  typescript doesnt known about markup
// const someElement: Element -> is an element
const someElement = document.querySelector(".foo") as HTMLInputElement;
// element  is the highest hierarchy
console.log("someElement", someElement.value);

// adding listener
const someElement1 = document.querySelector(".foo");
someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  //  console.log("event",event.target.value);
});

// creating interface :
interface userinteface {
  getfullname(): string;
}
//  inside class interface is implementing
class User1 implements userinteface {
  //  inside this interface we have name of type string

  private firstname: string;
  protected lastname: string;
  //  readonly : need to make constant value
  readonly unchangeablename: string;

  //   trying static properties :are only accessible on classes itself not on  instances
  static readonly maxAge = 50;

  // suppose we try to change the value it will poke error

  // changeUnchangablename():void{
  // showing error
  //     this.unchangeablename ="fooo";
  // }

  // we can also define constructor in class
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getfullname(): string {
    //  this : we can all properties inside the class
    return this.firstname + "" + this.lastname;
  }
}
//  instances of class :

// that means user1 dont have static properties
const user1 = new User1("monster", "lessons");
console.log(User1.maxAge); // maxAge is somthing that only get on the classes
// donot access firstname becoz it will be outside class
console.log(user1.getfullname);

// private: we can use only inside the class
// public:every thing is public by default
// protected: is allowed in class and its children
// if we doing inheritance it will access inside the children class

// inheritance :
class Admin extends User1 {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }
  getEditor(): string {
    return this.editor;
  }
}

const admin = new Admin("Apple", "VIVO");
console.log(admin.getfullname);

// generics in typescript :build a function which will get as an argument to some object we wnt to add just id to it
// obj: Parameter 'obj' implicitly has an 'any' type, but a better type may be inferred from usage.
//  if we dont provide argument type -it will be any
// instead of using any : we can use generic
//  avoid any
// <T> : T is a default name for generic
//  all generic data types are written inside <>
//  obj:T -> text properties
// this generic type we r passing must be an object
const searchStr = "foo";
// cehck each element of array if it matches or not
// const hasSearchString =any <string>((el:string)=>el.contains(searchStr),
// ["foo","bar","baz"]);
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};
//  to make interface generic add <T> /<V> after name
// generic type requires one argument
// created one generic interface which provides different data types
interface candidateinterface<T, V> {
  //  inside this interface we have name of type string
  name: string;
  data: T;
  meta: V;
}
// Generic type 'candidateinterface<T>' requires 1 type argument(s).
const candidate: candidateinterface<{ meta: string }, string> = {
  name: "jack",
  data: {
    meta: "foo",
  },
  meta: "bar",
};
// hey function we are calling generic function n here we r passing generic datA TYPE :candidateinterface
// const result = addId<candidateinterface>(candidate);
// console.log("result", result);

// after name of interface <T> :interface become generic

// <T> means that we can provde different data types

// understanding enumeration (enum):

const statuses = {
  notstarted: 0,
  inprogress: 1,
  done: 2,
  // now  this all can accessible application
};

console.log(statuses.inprogress);

// Enum:a reserved word to create enumerable
// object should be in capital
enum Status {
  // Names with capital letter is a default code style
  //  here we use = to sign to assign any value
  Notstarted = "notstarted",
  InProgress = "inprogress",
  Done = "finished",
}
// console.log(Status.InProgress);

// enum inside interfaces L
interface Task {
  id: string;
  status: Status;
}

//  benifit of enum: we can use enum as value and as a data type
let notstarted: Status = Status.Done;
notstarted = Status.Done;
console.log(Status.InProgress);
