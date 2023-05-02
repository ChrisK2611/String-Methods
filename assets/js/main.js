// lenght

let firstName = "Chris";
console.log(firstName.length);
let lastName = "Keil";
console.log(lastName.length);
let fullName = firstName + lastName;
console.log(fullName.length);

// indexOf

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf ("h"));
console.log(txt.indexOf ("Earth"));
console.log(txt.indexOf("Moon"));

// search

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

let searchPos = txt2.search(";");
console.log(searchPos);
let searchPos1 = txt2.search("green");
console.log(searchPos1);
let searchPos2 = txt2.search("blue");
console.log(searchPos2);

// slice

// const A = "Susi is going to codingschool";

// let var1 = (A.slice(0, 5));
// document.write(var1 + "<br>");

// let var2 = (A.slice(5, 7));
// document.write(var2 + "<br>")

// let var3 = (A.slice(5));
// document.write(var3 + "<br>");

// let var4 = (A.slice(-6));
// document.write(var4 + "<br>");

// document.write(var1 + " " + var2 + " " + var4);

// replace 

// const text = "Sam is good at codingschool";

// let var5 = (text.replace("good", "bad"));
// document.write(var5 + "<br>");

// let var6 = (text.replace("Sam", "Susi"));
// document.write(var6 + "<br>");

// let var7 = (text.replace("codingschool", "tennis"));
// document.write(var7);

// toLowerCase + toUpperCase

// const text1 = "Sam is going to codingschool";

// let var8 = (text1.toUpperCase());
// document.write(var8 + "<br>");

// let var9 = (text1.toLowerCase());
// document.write(var9 + "<br>");

// let upperCase = (text1
//     .replace("Sam" , "SAM")
//     .replace("codingschool", "CODINGSCHOOL"));
    

// let lowerCase = (text1.replace("is going to", "IS GOING TO"));

// document.write(upperCase + "<br>");
// document.write(lowerCase + " <br>");

// let fullSent = (text1
//     .replace("is", "Is")
//     .replace("going", "Going")
//     .replace("to" ,"To")
//     .replace("codingschool", "Codingschool"));

// document.write(fullSent);

// concat

// const text4 = "Sam is going to codingschool";
// const text5 = "Susi";
// const text6 = "and";

// let moreText = "to the movie theater"
// document.write(text4.concat (" " + text6 + " " + moreText)+ "<br>");

// let sent2 = (text4.replace("codingschool", "movie theater"));
// document.write(sent2 + "<br>");

// let Two = (text4.replace("is", "are"));
// document.write(text5 + " "+ text6 + " "+ Two + "<br>");

// let muchText = (text4.replace("codingschool", "gym")
// .replace("is", "are"));
// document.write(text5 + " " + text6 + " " + Two + " " + text6 + " " + moreText + "<br>");

// let NameS = (text4.replace("Sam", "Susi"));
// document.write(NameS + " "+ text6 + " "+ moreText);

// String Methods

let x = "Hello";
let y = "World<br>";
let z = x + y;
document.write(z);

let n = x + " " + y;
document.write(n);

let blur = (n.concat(`${x}`));
document.write(blur + y);

let meinString = "Ich bin Erster";
let stringZwei = "Ich komme auf Platz zwei";
console.log(meinString.concat(" " + stringZwei));






   






