

//id attribute
document.getElementById("demo").innerHTML = "Hello JavaScript by id";

//name atribute
document.getElementsByName("plcholder")[0].innerHTML = "Hello JavaScript by Name";
// document.getElementsByName("plcholder")[1].innerHTML = "Hello JavaScript by Name";

//class attribute

//document.getElementsByClassName("clsPlcholder")[0].innerHTML = "Hello JavaScript by Class";
//document.getElementsByClassName("clsPlcholder")[1].innerHTML = "Hello JavaScript by Class";

const clsPlaceholder = document.getElementsByClassName("clsPlcholder");
if (clsPlaceholder && clsPlaceholder.length > 0) {
    for (let i = 0; i < clsPlaceholder.length; i++) {
        clsPlaceholder[i].innerHTML = "Hello JavaScript by Class";
    }
}

//typeof function
console.log(typeof '')
console.log(typeof {})
console.log(typeof true)
console.log(typeof 1123)
console.log(typeof 123.89)

//property on function
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName2: () => {
        return this.person.firstName + " " + person.lastName;
    }
};
 
//console.log(person.fullName2());

const handler = {}

handler.lisghtOnOff = (lightOn) => {
    const lightOnFlag = typeof lightOn === 'boolean' ? lightOn : false;

    if (lightOnFlag)
        document.getElementById('imgLoader').src = "https://www.w3schools.com/js/pic_bulbon.gif"
    else
        document.getElementById('imgLoader').src = "https://www.w3schools.com/js/pic_bulboff.gif"
}

//object declaration
const x = new String();        // Declares x as a String object
const y = new Number();        // Declares y as a Number object
const z = new Boolean();       // Declares z as a Boolean object

const username='Rejwanul Reja'

console.log(username)

// date function

const dt=new Date();

console.log(dt)


const dtw= Date();

console.log(dtw)

//Escape 
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text)

//string object
var str = new String("John");
console.log(`str`, str[0])

let strTest = "Please visit Microsoft and Microsoft!";
let newText = strTest.replace('Microsoft', "W3Schools");

console.log(`newText`, newText)

/*

slice(start, end)
substring(start, end)
substr(start, length)

*/

let htxt = "HELLO WORLD";
let char = htxt.charAt(0);
let charCode = htxt.charCodeAt(0);

//console.log(`char`, charCode)
console.log(`htxt[0]`, htxt[0])


//foreach

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach((object)=> console.log(`object`, object));

