snail = function (array) {
	// enjoy

	const n = array.length;
	let array1 = array.slice(0);
	let result = [];
	for (let i = 0, move = 1; i < 2 * n - 1; i++) {


		switch (move) {

			case 1:
				// add the whole top array

				result.concat(array1.shift())
				console.log(result)
				move++
				break;

			case 2:
				for (let j = 0; j < array1.length; j++) {
					result.concat(array[j][array[j].length - 1].pop())
				}
				move++
				break;

			case 3:
				for (let j = 0; j < array1.length; j++) {
					result.concat(array[j][array[j].length - 1].shift())
				}
				move++
				break;

			case 4:
				// add the whole bottom array in reverse
				result.concat(array.pop())
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
  Move 3: Left Pop Left side 
  Move 4: Up Upshift Bottom Row

*/