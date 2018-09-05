function numberoffibonacci(n) {
    let firstNumber = 1;
    let secondNumber = 1;
    let sumNumber = firstNumber + secondNumber;

    for (let i = 3; i <= n; i++) {
        sumNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sumNumber;
    }

    return secondNumber;
}
let n = prompt('Get a Fibonacci number', 'Enter a number from 0 to 50');
if (n=>0 && n < 50) {
    document.write('<h1>' + 'The number of Fibonacci  ' + n + '<br>' + 'will be  ' + numberoffibonacci(n) + '<h1>')
} else {
    alert('Please enter a number greater than 0 or less than 50')
}

/*function numberoffibonacciarr(n){
let arr=[];
let firstNumber=1;
let secondNumber=1;
let sumNumber=firstNumber+secondNumber;
if(n==0){
	return 0
}
else if(n==1||n==2){
	return 1
}
for (let i=3; i<=n;i++){
	sumNumber=firstNumber+secondNumber;
	firstNumber=secondNumber;
	secondNumber=sumNumber;
arr.push(secondNumber);
}return arr.slice(-1)
}
document.write(numberoffibonacciarr(6))
*/
