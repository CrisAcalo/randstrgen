#!/usr/bin/env node

const RandStrGen = require('../src');
const args = require('node:process').argv;

// Opciones por defecto
let options = {
    length: 20,
    useLowercase: true,
    useUppercase: true,
    useNumbers: true,
    useSpecials: true,
};

// Parseo muy básico de argumentos
args.slice(2).forEach(arg => {
    if (arg.startsWith('--length=')) {
        options.length = parseInt(arg.split('=')[1]);
    }
    if (arg === '--no-lowercase') options.useLowercase = false;
    if (arg === '--no-uppercase') options.useUppercase = false;
    if (arg === '--no-numbers') options.useNumbers = false;
    if (arg === '--no-specials') options.useSpecials = false;
});

try {
    const generator = new RandStrGen(options);
    console.log(generator.generate());
} catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
}
