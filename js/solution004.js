snail = function (array) {
	// enjoy

	const n = array.length;
	let result = [];

	for (let i = 0, move = 1; i < 2 * n - 1; i++) {

		switch (move) {

			case 1: // add the whole top array
				result.concat(array.shift())
				console.log(result)
				move++
				break;

			case 2: //add the right side of matrix
				for (let j = 0; j < array.length; j++) {
					result.concat(array[j].pop())
				}
				move++
				break;

			case 3: //add the bottom row in reverse
				result.concat(array.pop().reverse())
				move++
				break;

			case 4: // add the left side
				for (let j = 0; j < array.length; j++) {
					result.concat(array[j].shift())
				}
				move = 1
				break;
		}
	}
}



/*
PREP

Parameters
One parameter
Array with arrays
  Number of elements within the parameter array is equal to the size of elemental/individual arrays

Returns
Return a single array with the path of the snail from outer most elements to inner in a matrix layout
going in a clockwise direction
Array has numbers


Examples
array = [[1,2,3],
		 [4,5,6],
		 [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

Pseudo Code

Loop through all the moves necessary to snail through the outer layer of the matrix
  Total moves for an n*n matrix is 2n-1

In a 4 move cycle remove the elements from the array and add them to the result array

  Move 1: Right Upshift Top row
  Move 2: Down Pop Right side 
  Move 3: Up Upshift Bottom Row and reverse
  Move 4: Left shift Left side  and reverse

*/