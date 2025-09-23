const randomNumber = Math.floor(Math.random() * 8) + 1;; // Random number between 1 and 7

console.log('Your lucky number today is:', randomNumber);
switch (randomNumber) {
    case 1:
        console.log('Tomorrow you will have a small surprise that will lift your mood.');
        break;
    case 2:
        console.log('Very soon you will get lucky with something small you did not even plan.');
        break;
    case 3:
        console.log('An idea that comes to you today will lead to something bigger.');
        break;
    case 4:
        console.log('A friend will remember you and reach out in the coming days.');
        break;
    case 5:
        console.log('The dream you will have tonight will be funny but with a hidden meaning.');
        break;
    case 6:
        console.log('Within the next week, you will receive something unexpected (even if it is just kind words).');
        break;
    case 7:
        console.log('A small step you take today will lead to a big result later.');
        break;
    default:
        console.log('Unlucky today :(');
}
