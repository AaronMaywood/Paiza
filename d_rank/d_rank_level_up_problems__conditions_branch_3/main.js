process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	// 式 A × B ≦ C が成立している場合はYESを、そうではない場合はNOを出力してください。
	const [A,B,C] = line.split(' ').map(i=>Number(i))
	console.log( A*B <= C ? 'YES' : 'NO')
});
