// const a = "1";
// console.log("aaa", a);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// tsc main.ts -w
//  watch the file
// variables:
//  constant value cant change
var hello = "world";
// for  change we can use let :
var Hello = "world"; // this can only be string value
Hello = "foo";
//  we can change value only to the same type
// Hello =true; // we will get error
//  becoz boolean vlaue can not assign to Hello
// asign type :
var Helloo = "world";
// functions :
var getfullname = function (name, surname) {
    // mention that name n surname should string (specify every type )
    return name + " " + surname;
};
console.log(getfullname("shivali", "umbarkar"));
// create objects in typescript  :
var user = {
    name: "shanti",
    age: 19
};
// we can specify at once n can reuse it evrry where not just duplicated every time  becoz we can make mistake
var user2 = {
    name: "jack",
    age: 21
};
//  interfaces
// interfaces in typescript: it a special entity in typescript which help is to create objects with some properties
//  to create interface : word interface is used
//interface  gives us  best auto complete n type check-in ->(highlights error )in world
// we can define function inside the interface
// we can create c;asses in interface
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// {name:string; age:number }  this is replace by the interface User noneed to define every where
var user3 = {
    name: "jack",
    age: 21,
    getmessage: function () {
        return "Hello" + name;
    }
};
var user4 = {
    name: "jack",
    age: 21,
    getmessage: function () {
        return "Hello" + name;
    }
};
console.log(user.name);
// types and union :
// union operator:
var username = "alex";
//  signle pipe in betn datatypes that is union operator
//  the type can be string or number
//  union operator :used to  send some value of different type
//  union :operator  to combine data types
var pagenumber = "1";
// by default it will be null and at some point if we get error it will show message which will written in string
var errormessage = null;
//  populartag[] this entity inside our application
//  ["tea", "coffee"] this the array of entities
var populartags = ["tea", "coffee"];
//  we create one property user0 it can be default null becoz we didnt fetch user
//  or we fetch user n then it will be Userinteface
var dragonstag = "dargon";
// by default it will be null otherwise will be userinterface
var user0 = null;
//  void :we use void when we dont return something from function
var dosomething = function () {
    //  if function not have return then it return void
    console.log("dosomething");
};
var foo = undefined;
// Any type: any type turns off typescript checks
//  if u cant fixed a typescript  error u can write any
// any is not solution but start of bogger problems
//  type never :
//  normally it is used in libraries
// below function with never cant be excecuted to the end
//  never : is somthing that never happen
// never ends
var dosomething1 = function () {
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
var pagenumber1 = "1";
//  we need to convert it to unknown type  first n then  as number : this is called type assertion or datatypes
var numericpagenumber = pagenumber1;
//  working with DOM:
// read one dom element
// read a  class : .foo
// typescript has lots of types for DOM out of box
//  typescript doesnt known about markup
// const someElement: Element -> is an element
var someElement = document.querySelector(".foo");
// element  is the highest hierarchy
console.log("someElement", someElement.value);
// adding listener
var someElement1 = document.querySelector(".foo");
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    //  console.log("event",event.target.value);
});
//  inside class interface is implementing
var User1 = /** @class */ (function () {
    // suppose we try to change the value it will poke error
    // changeUnchangablename():void{
    // showing error
    //     this.unchangeablename ="fooo";
    // }
    // we can also define constructor in class
    function User1(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    User1.prototype.getfullname = function () {
        //  this : we can all properties inside the class
        return this.firstname + "" + this.lastname;
    };
    //   trying static properties :are only accessible on classes itself not on  instances
    User1.maxAge = 50;
    return User1;
}());
//  instances of class :
// that means user1 dont have static properties
var user1 = new User1("monster", "lessons");
console.log(User1.maxAge); // maxAge is somthing that only get on the classes
// donot access firstname becoz it will be outside class
console.log(user1.getfullname);
// private: we can use only inside the class
// public:every thing is public by default
// protected: is allowed in class and its children
// if we doing inheritance it will access inside the children class
// inheritance :
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User1));
var admin = new Admin("Apple", "VIVO");
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
var searchStr = "foo";
// cehck each element of array if it matches or not
// const hasSearchString =any <string>((el:string)=>el.contains(searchStr),
// ["foo","bar","baz"]);
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
// Generic type 'candidateinterface<T>' requires 1 type argument(s).
var candidate = {
    name: "jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
// hey function we are calling generic function n here we r passing generic datA TYPE :candidateinterface
// const result = addId<candidateinterface>(candidate);
// console.log("result", result);
// after name of interface <T> :interface become generic
// <T> means that we can provde different data types
// understanding enumeration (enum):
var statuses = {
    notstarted: 0,
    inprogress: 1,
    done: 2
};
console.log(statuses.inprogress);
// Enum:a reserved word to create enumerable
// object should be in capital
var Status;
(function (Status) {
    // Names with capital letter is a default code style
    //  here we use = to sign to assign any value
    Status["Notstarted"] = "notstarted";
    Status["InProgress"] = "inprogress";
    Status["Done"] = "finished";
})(Status || (Status = {}));
//  benifit of enum: we can use enum as value and as a data type
var notstarted = Status.Done;
notstarted = Status.Done;
console.log(Status.InProgress);
