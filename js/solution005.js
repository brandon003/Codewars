
/* Count by X  8kyu
Create a function with two arguments that will return an array of the first(n) multiples of(x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array(or list in Python, Haskell or Elixir).

	Examples:
count ( x, n )
countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countBy(2, 5) === [2, 4, 6, 8, 10]


PREP:
	count ( x, n )

	Parameters:
		2 Parameters 
		Both will be numbers
		First parameter number x is the multiple
		Second parameter number n is the number of multiples of x required 

	Returns:
		Return an array of the required n number of multiples of x

	Examples:
		countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		countBy(2, 5) === [2, 4, 6, 8, 10]

	Pseudo Code:
		Use a for loop to create an array of the first n number of multiples of x


*/

function countBy(x, n) {
	let z = [];

	for(let i=0;i<n;i++){
		z.push((i+1)*x);
	}
	return z;
}

console.log(countBy(1, 10));