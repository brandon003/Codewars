array = [[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]

array1= [[1, 2, 3, 4, 5, 6, 7],
	[24, 25, 26, 27, 28, 29, 8],
	[23, 40, 41, 42, 43, 30, 9],
	[22, 39, 48, 49, 44, 31, 10],
	[21, 38, 47, 46, 45, 32, 11],
	[20, 37, 36, 35, 34, 33, 12],
	[19, 18, 17, 16, 15, 14, 13]]

function snail(array) {

	let result = [];

	while (array.length) {

		// Move 1: add the whole top array
		result = result.concat(array.shift());
		console.log(result);
		// Move 2: add right side of matrix
		for (let j = 0; j < array.length; j++) {
			result.push(array[j].pop());
		}
		console.log(result);
		// Move 3: add the whole bottom array in reverse
		result = result.concat((array.pop() || []).reverse());
		console.log(result);
		// Move 4: add left side of matrix
		for (let j = array.length - 1; j >=0; j--) {
			result.push(array[j].shift());
		}
		console.log(result);

	}
	return result;
}

// snail(array);
snail(array1);
