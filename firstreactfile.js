//See First to Create React App Command is 
//1)npx create-react-app myapp Now through this command we can use created app without downloading package. Now it will create files inside the folder whose name will be name of our app
//2)npm install -g create-react-app myapp now through this command we can create app permanent means it will use space while above command will not use space

//npm helps us to install packages in Nodejs
//if we don't want to create files inside folder and we want outside then just use "npx create-react-app ."

//See there are main two folders:- In "src" folder we will be putting all the "react components" and in that components we will be sending "props". 

//Also there is "states" like component inside react .for eg:- if the heading of website is HARRY then it will be the part of state

//Also see that the command "npm start" is to be run in the file/folder/directory where the "package.JSON" file is located

//Now see all the editings is to be done inside "app.js" file because the whole thing inside that is shown at browser

//Now to start Our App then Just write this command "npm start"


// ->Useful js before starting reactjs
//Using let keyword if there are two variable defined same then error will come`
//let is used at block level and var is used at functional level
//for eg:- let a=10
//let a=20 then error will come 
//if var=10 
//var=20 then error will not come

//const keyword we know that once the value is assigned then we cannot change its value.

//then functions 
// let obj={
//     name:"John",
//     age:35,
//     // func:function myfun(number){
//     //     console.log("the no is:-"+number);
//     // }  or
//     func:(number)=>{
//         console.log("The no is:-"+number);
//     }
// }

// //Now in normal functions if we target through "this" then we will see undefined
// //But using arrow function then we will see [object window] instead of undefined

// let obj3={
//     'a':20,
//     name:"harry",
//     func:(no)=>{
//         console.log(no);
//     }
// }

// obj3.func(10);

// let obj1={
//     'a':20,
//     name:"harry",
//     func:function myfun(no){
//         console.log(no);
//     }
// }

// obj1.func(20);
// //obj1.func.myfun(20);->error 

// function fun(number){
//     console.log("no is:-"+this);
// }

// let fun1=(number)=>{
//     console.log("no is:-"+number);
// }
// fun();
// fun1();
// //see this will be the output
// // no is:-[object global]
// // no is:-undefined

// //also observe by putting the parameters inside fun and fun1 functions
// // fun(10)
// //fun1(10)
// //o/p:-
// // no is:-[object global]
// // no is:-20

// //then if we wrap the function inside the object then
// let myobj={
//     fun2:(number)=>{
//         console.log("no is:-"+this);
//     }
// }
// myobj.fun2();

// let myobj2={
//     fun3: function fun3(number){
//         // console.log("no is:-"+this);
//         // or 
//         console.log(`the no is :- ${this}`);
//     }
// }
// myobj2.fun3();

//see Now there are callback functions such as settimeout,settimeinterval etc.

// for eg:-
setTimeout(()=>{console.log('hello')},3000);//here setTimeout takes a call
console.log("I will be executing till by then after 3ms the above function will execute");

//See Now Understand JSX :-
//There are two types of react components:- 1)Function based 2)Class based components
//Mostly function based components are used

//Now open app.js file which is our main file because whatever things we write in that will be shown in browser .
//in that see this
// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }

//Now the portion returned inside the parenthesis i.e inside this "return()" is called JSX . it is purely HTML and the main fact is that we can also write JS inside that together with HTML.

//But there are only few changes like:-
//we have to write "div classname" instead of "div class"

//Also Remember that we can return  only and only one tag 
//to written multiple tag then enclosed in all tags        <> inside this</>  ->>>like this


//final understanding of that using 'this' and arrowfunctions and normal functions
let obj={
    'a':20,
    name:"harry",
    func:(no)=>{
        console.log(no);
    }
}

obj.func();//undefined
// obj.func(10); 10

let obj1={
    'a':20,
    name:"harry",
    func:function myfun(no){
        console.log(no);
    }
}

obj1.func();//undefined
// obj1.func(20);20

function fun(number){
    console.log("no is:-"+this);//here no object is made of fun hence we will get "Object Global"
}

let fun1=(number)=>{
    console.log("no is:-"+number);
}
fun(10);
fun1(20);

let myobj={
    fun2:(number)=>{
        console.log("no is:-"+this);
    }
}
// myobj.fun2(10);//Object Object
myobj.fun2();//Object Object

let myobj2={
    fun3: function fun3(number){
        // console.log("no is:-"+this);
        // or 
        console.log(`the no is :- ${this}`);
    }
}
// myobj2.fun3();//Object Object
myobj2.fun3();//Object Object

