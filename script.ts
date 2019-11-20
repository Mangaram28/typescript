const message :string= 'hello world';

console.log(message);

class addeds { 
    engine: string;


    constructor(engine: string) { 
        this.engine = engine;

    }

    disp(): string{
        return "The engine is"+ this.engine;
    }
}

var obj = new addeds('ford ecosports');
obj.disp();

let hobbies = ["painting","cricket","tennis"];
console.log(hobbies[0]);
document.querySelector("#app").innerHTML = obj.disp();

var arrayVal = new Array;

function genericInArray<Type>(getdata: Type): Type[]{
       // arrayVal = [getdata];
      
        arrayVal.push([getdata]);
        return [getdata];
}

const stringArray = genericInArray('this is generics');
const numberArray = genericInArray(123);

console.log(arrayVal);
console.log(stringArray);
console.log(numberArray);

let empTuple: any[] = ["Rohit Sharma", 25,"ram"];  
console.log("Name of the Employee is : ***"+empTuple[1]);  

//never
        /*    function neverreturn(): never{
                throw new Error('An error!');
            }

            console.log(neverreturn());  */


//alias

type data ={name: string, contact: number,address:(test:any) => string};

let team:data = {
    name:'ram',
    contact:7896,
    address:(test) => {
        return this.name;
    }
};

console.log(team.address('london street'));