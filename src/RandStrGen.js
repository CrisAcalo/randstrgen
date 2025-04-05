// src/RandStrGen.js

const {
    LOWERCASE_LETTERS,
    UPPERCASE_LETTERS,
    NUMBERS,
    SPECIAL_CHARACTERS,
} = require('./utils/charsets');

class RandStrGen {
    constructor(options = {}) {
        // Opciones con valores por defecto
        const {
            length = 20,
            useLowercase = true,
            useUppercase = true,
            useNumbers = true,
            useSpecials = true,
        } = options;

        this.length = length;
        this.charset = this.buildCharset({
            useLowercase,
            useUppercase,
            useNumbers,
            useSpecials,
        });

        if (this.charset.length === 0) {
            throw new Error('No character sets selected. Enable at least one type of character.');
        }
    }

    buildCharset({ useLowercase, useUppercase, useNumbers, useSpecials }) {
        let charset = '';
        if (useLowercase) charset += LOWERCASE_LETTERS;
        if (useUppercase) charset += UPPERCASE_LETTERS;
        if (useNumbers) charset += NUMBERS;
        if (useSpecials) charset += SPECIAL_CHARACTERS;
        return charset;
    }

    generate() {
        let result = '';
        for (let i = 0; i < this.length; i++) {
            const randomIndex = Math.floor(Math.random() * this.charset.length);
            result += this.charset[randomIndex];
        }
        return result;
    }
}

module.exports = RandStrGen;
