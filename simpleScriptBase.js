var a = 3923;
var b = "sd";
var c = a + b;
//alert("script enabled");

function construct(c) {
    this.val = c;
    this.prop = null;
}

var testValue = new Object("new value");
var newByFunc = new construct(15);
var jsonLikeObject = {
    prop1: "valueofProp1",
    prop2: "valueOfProp2"

}
var bools = Boolean(-2);
bools = !!0;

var funcDifferences = new function () { };
//alert(funcDifferences);//object
document.write("string");
document.write("<div><b> Div inserted </b></div>")
var squareObj = { "Uppercorner": {x : 10, y : 30},
                  "lowercorner": {x : 40, y :50}
};
document.writeln(squareObj.Uppercorner.x + "<br>");

var firstArr = new Array();
var almostFixedSize = new Array(10);
firstArr[0] = 0;
firstArr[1] = 1;
firstArr[3] = 3;
almostFixedSize[11] = 15;
document.write("empty element is " + firstArr[2] + "<br>");
document.write("12th element is " + almostFixedSize[11] + "<br>");

if (undefined == null )
    document.write("NULL===false" + "<br>");

var stringTypes = "this is string, which is type: ";
var stringTypeTwo = new String("this is the scond type, which is: ");
document.write(stringTypes + typeof (stringTypes) + "<br>");
document.write(stringTypeTwo + typeof (stringTypeTwo) + "<br>");

//document.write("transition to object result: " + typeof (Object(stringTypeTwo)) + "<br>");
//document.write(" transition to string result: " + typeof (stringTypes.valueOf()) + "<br>")
//var arr = new Array();
//document.write(arr.toString + " " +typeof (arr) + "<br>")
//var arrTwo = [];
//document.write (arrTwo.toString + " " + typeof (arrTwo) + "<br>")
//var num = new Number(10);
//function passNumberByRef(num) {
//    num.valueOf = 15;
//}
//passNumberByRef(num);
//document.write("the new value of num is: " + num.valueOf + "<br>");

//outer: for (var i = 0; i < 100; i++) {
//    for (var j = 200; j < 250; j++){
//        document.write("i: " + i + " " + "j: " + j + "<br>");
//        if (j == 230)
//            break outer;
//    }
//}
function returningUndefined() {
    //alert("functionBody");
    
}
var res = returningUndefined();
//alert(res);
document.write(typeof res);
var p = 10;
if (function () {
    return p == 10;
    })
    {
    //function f (p){
    //    alert(p);
    //}
    //alert(p);
}
function caller(x) {
    //alert(y);
    //alert(function () {
    //    var y = 19;
    //   return x;
    //}());
}
caller(17);
var ourDiv = document.getElementById("di");
ourDiv.innerText = "I've got the power";
ourDiv.style.backgroundColor = "red";

function ClassConstruct() {

    this.prop = "prop value";
}
ClassConstruct.prototype.staticFunction =new function () {
    prompt("this is the static function");
}
var val = new ClassConstruct();
val.prop = 15;
//document.write(val.staticFunction);
var secondObject = new ClassConstruct();
//document.write(secondObject.staticFunction());
//document.write("<br>" + secondObject.prop + " " + secondObject.staticFunction + "<br>");
val.staticFunction= function () {
    alert(" function changed through first object");
}
//document.write("<br>" + secondObject.prop + " " + secondObject.staticFunction + "<br>");
//for (property in val)
//    document.write("<br>" + property);

//document.write(ClassConstruct.staticFunction());