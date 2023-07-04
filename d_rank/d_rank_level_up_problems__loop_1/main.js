process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	// 1〜Nまでを出力
	const N = Number(line)
	for(let i = 1 ; i <= N ; i++){
		console.log(i)
	}
});
