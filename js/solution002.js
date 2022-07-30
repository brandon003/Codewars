function solution(number) {

	if (number <= 2) return 0;
	let sum = 0;

	for (let i = 3; i < number; i++) {
		if (i % 3 == 0 || i % 5 == 0) sum += i;
	}

	return sum;

}


/*

PREP

Parameters
One parameter
Number
Can be negative

Returns
Return the sum of all the numbers from 0 to given number where numbers are divisible by 3 and or 5

Examples
solution (10) // returns 23 3+5+6+9
solution (-10) // returns 0 
solution (20) // returns 78 3+5+6+9+10+12+15+18

Pseudo Code
return 0 if parameter is negative
Loop through the numbers from 1 to parameter
sum all the numbers that are divisible by 3 or 5
return the sum
*/
