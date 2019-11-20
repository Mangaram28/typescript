var _this = this;
var message = 'hello world';
console.log(message);
var addeds = /** @class */ (function () {
    function addeds(engine) {
        this.engine = engine;
    }
    addeds.prototype.disp = function () {
        return "The engine is" + this.engine;
    };
    return addeds;
}());
var obj = new addeds('ford ecosports');
obj.disp();
var hobbies = ["painting", "cricket", "tennis"];
console.log(hobbies[0]);
document.querySelector("#app").innerHTML = obj.disp();
var arrayVal = new Array;
function genericInArray(getdata) {
    // arrayVal = [getdata];
    arrayVal.push([getdata]);
    return [getdata];
}
var stringArray = genericInArray('this is generics');
var numberArray = genericInArray(123);
console.log(arrayVal);
console.log(stringArray);
console.log(numberArray);
var empTuple = ["Rohit Sharma", 25, "ram"];
console.log("Name of the Employee is : ***" + empTuple[1]);
var team = {
    name: 'ram',
    contact: 7896,
    address: function (test) {
        return _this.name;
    }
};
console.log(team.address('london street'));
