var name = prompt("Ismingizni kiriting")
console.log(`Mening Ismim ${name}`);
var age = +prompt("Yoshngizni kiriting")
console.log(`Men ${age} yoshdaman`);


var misol = +prompt("6+3=?")
if (misol===9) {
    console.log(`Sizning javob tugri: ${misol}`);
} else {
    console.log(`Sizning javob notugri: ${misol}.Tugri javob: 9`);
}
var misol = +prompt("20-5=?")
if (misol===15) {
    console.log(`Sizning javob tugri: ${misol}`);
} else {
    console.log(`Sizning javob notugri: ${misol}.Tugri javob: 15`); 
}
var misol = +prompt("15*2=?")
if (misol===30) {
    console.log(`Sizning javob tugri: ${misol}`);
} else {
    console.log(`Sizning javob notugri: ${misol}.Tugri javob: 30`); 
}
var misol = +prompt("8/4=?")
if (misol===2) {
    console.log(`Sizning javob tugri: ${misol}`);
} else {
    console.log(`Sizning javob notugri: ${misol}.Tugri javob: 2`); 
}
var misol = +prompt("10%3=?")
if (misol===1) {
    console.log(`Sizning javob tugri: ${misol}`);
} else {
    console.log(`Sizning javob notugri: ${misol}.Tugri javob: 1`); 
}
alert(`Natijani kurish uchun konsolni oching`);

var age = +prompt("Yoshingiz nechida")
if (age >= 151){
    alert("Nimadur notugri ketdi")
} else if (age >= 60) {
    alert("Pensyonerga uxshaysiz agar tirik bulsangiz  :)")
} else if (age >= 51) {
    alert("Yaqinda pensiyaga chiqasiz")
}  else if (age >= 50){
    alert("Ishlashingiz kerak ")
}  else if (age >= 19) {
    alert("Ishlashingiz kerak")
}  else if(age >= 18){
    alert("Yoshsiz uqishingiz kerak ")
}  else if (age >= 8) {
    alert("Maktabga  borishingz kerak")
}  else if (age >= 1) {
    alert("Beshigda dam olishingiz kerak")
}  else {
    alert("Nimadur notugri ketdi")
}