/******  chessboard Assignment   *****/
//creating an 8 x 8 grid columns and rows. For each row and column, alternate between a space and a hash.

//1.using a for loop inside a for loop
//2.setting variables (output initialized to empty string)
//3.size sets a limit for iterations to be used inside the loop

let chessboard = (size) => {
	//setting an empty string for the output
	let output = '';

	//looping through rows
	for (let i = 0; i < size; i++) {
		//looping through columns
		for (let j = 0; j < size; j++) {
			//if row is odd
			if (i % 2 == 0) {
				if (j % 2 == 0) {
					output += ' ';
				} else {
					output += '#';
				}
			}

			//if row is even
			else {
				if (j % 2 == 0) {
					output += '#';
				} else {
					output += ' ';
				}
			}
		}
		output += '\n';
	}

	return output;
};
console.log(chessboard(8));
