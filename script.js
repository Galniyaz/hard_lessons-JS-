"use strict";

const argment = function (data) {
if (typeof data !== 'string' ) {
    return ("Это не строка");
} else {
    data.trim();
    if (data.length > 30) {
        return ((data.substring(0,30)) + '...');
    } else {
        return data;
    }
}

}

console.log(argment('     Visual Studio Code - бесплатный редактор от Microsoft, в последнее  