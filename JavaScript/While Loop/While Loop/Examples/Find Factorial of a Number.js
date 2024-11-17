// Find Factorial of a Number

let val = 5;
let factorial = 1;

while (val>0)
{
	factorial *= val;
	val--;
}
document.write("Factorial of 5: ", factorial);