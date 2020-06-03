abstract class vehicle {
  abstract wheels:number;
  start():void{
    console.log("Brummm");
  }
}

class car extends vehicle {
  wheels:number = 4;
}
class bycycle extends vehicle{
  wheels:number = 2;
}

let xenia = new car();

console.log(xenia.wheels);
