process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	/*
	変数 N を 0 で初期化する
	N に A を足した値を N へ代入する
	N に B をかけた値を N へ代入する
	N を C で割ったあまりを N へ代入する
	N を出力する
	 */
	const [A,B,C] = line.split(' ').map(i=>Number(i))
	let N = 0
	N += A
	N *= B
	N %= C
	console.log(N)

});
