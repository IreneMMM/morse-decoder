const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const inputArr = expr.split("");
    const result = [];
    const decodedArr = [];
    const finalArr = [];
    const strDecoded = [];

    for (let i = 0; i < inputArr.length; i = i + 2) {
        result.push(`${inputArr[i]}${inputArr[i + 1]}`);
    }

    for (let key of result) {
        let newKey = "";
        if (key === "10") {
            newKey = key.replace("10", ".");
            decodedArr.push(newKey);
        } else if (key === "11") {
            newKey = key.replace("11", "-");
            decodedArr.push(newKey);
        } else if (key === "**") {
            newKey = key.replace("**", "*");
            decodedArr.push(newKey);
        } else {
            newKey = "";
            decodedArr.push(newKey);
        }
    }

    for (let i = 0; i < decodedArr.length; i = i + 5) {
        finalArr.push(decodedArr.slice(i, i + 5).join(""));
    }

    for (let word of finalArr) {
        if (word == "*****") {
            strDecoded.push(" ");
        }

        for (let key in MORSE_TABLE) {
            if (word === key) {
                strDecoded.push(MORSE_TABLE[key]);
            } else {
                continue;
            }
        }
    }
    return strDecoded.join("");
}

module.exports = {
    decode
}