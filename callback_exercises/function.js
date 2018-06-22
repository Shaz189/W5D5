Function.prototype.myBind = function (context) {
  
  return () => {
    // this = the function
    this.apply(context); 
    //'this' is referring to sayName on line 22 or any method that preceeds it when called
    // the context is then the "object" that is passed too it, like app in link 22
  };
}; 

class Apple {
  constructor(name) {
    this.name = "name";
  }
}

function sayName () {
  console.log(`${this.name}`);
}

const app = new Apple();

const bindedSay = sayName.myBind(app);

bindedSay(); // -> apple

