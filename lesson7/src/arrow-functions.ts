// Arrow function that sums elements of an array
const sumArrayAF = (arr: (number | string)[]): number =>
    arr.reduce((acc: number, curr: number | string): number => {
        const num = Number(curr);
        return isNaN(num) ? acc : acc + num;
    }, 0);

const numbersAF: number[] = [42, 73, 18];
const stringsAF: string[] = ['73', '19', 'JS', '30', 'Test'];

console.log('Sum of numbers:', sumArrayAF(numbersAF));

console.log('Sum of strings (numeric only):', sumArrayAF(stringsAF));
