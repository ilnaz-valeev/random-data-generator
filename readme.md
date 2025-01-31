# Random Data Generator

Это простая библиотека для генерации случайных данных, таких как имена и числа, полезная для тестирования или создания имитационных данных.

## Installation

Вы можете установить библиотеку с помощью npm:

```bash
npm install random-data-generator


const randomData = require('random-data-generator');

console.log(randomData.getRandomName()); // Random name
console.log(randomData.getRandomNumber(1, 100)); // Random number between 1 and 100
