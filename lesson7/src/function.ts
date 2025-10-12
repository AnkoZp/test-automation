// Function that sums elements of an array
function sumArrayF(arr: (number | string)[]): number {
    return arr.reduce((acc: number, curr: number | string): number => {
        const num = Number(curr);
        return isNaN(num) ? acc : acc + num;
    }, 0);
}

const numbers: number[] = [55, 9, 31, 76];
const strings: string[] = ['1', '2', '3', 'hello', '4'];

console.log('Sum of numbers:', sumArrayF(numbers));

console.log('Sum of strings (numeric only):', sumArrayF(strings));
