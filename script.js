let chessboard = function (chessBoardVariable) {
	//initializing empty string
	let output = '';

	for (let i = 0; i < chessBoardVariable; i++) {
		for (let j = 0; j < chessBoardVariable; j++) {
			(i + j) % 2 == 0 ? (output += ' ') : (output += '#');
		}
		output += '\n';
	}
	console.log(output);
};
// console.log(chessboard(18));
