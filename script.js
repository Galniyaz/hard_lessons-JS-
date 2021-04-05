"use strict";

let lang = prompt("День недели?", "")

if (lang === "ru" ) {
  alert("Пн, вт, ср, чт, пт, сб, вс");
} else if (lang === "en" ) {
  alert("Md, Td, Wd, Th, Fr, St, Sd");
} else {
  alert("Ошибка");
}

switch (lang) {
  case "ru":
    alert("Пн, вт, ср, чт, пт, сб, вс");
    break;
  case "en":
    alert("Md, Td, Wd, Th, Fr, St, Sd");
    break;
}

let arr = {
	'ru':["Пн, вт, ср, чт, пт, сб, вс"],
	'en':["Md, Td, Wd, Th, Fr, St, Sd"],
};
alert(arr[lang]);



let namePerson = prompt('Имя?', '');

let name = (namePerson === "Артем") ? console.log("директор"):
 (namePerson === "Максим") ?  console.log("преподаватель"):
 console.log("студент");
