// Nが 100 以下の場合はYESを、そうではない場合はNOを出力してください。
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	const N = Number(line)
	console.log( N <= 100 ? 'YES' : 'NO' )
});
