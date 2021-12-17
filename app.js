

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

//function
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    //fullName:this.firstName + " " + this.lastName,
    fullName2: () => {
        return person.firstName + " " + person.lastName;
    }
};

//console.log(person.fullName); 
console.log(person.fullName2());

const handler = {}

handler.lisghtOnOff = (lightOn) => {
    const lightOnFlag = typeof lightOn === 'boolean' ? lightOn : false;

    if (lightOnFlag)
        document.getElementById('imgLoader').src = "https://www.w3schools.com/js/pic_bulbon.gif"
    else
        document.getElementById('imgLoader').src = "https://www.w3schools.com/js/pic_bulboff.gif"
}



