process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	// 玉に書かれている数字が 7 の時は大吉となります。
	// 大吉の場合は「Yes」、そうでない場合は「No」と 1 行に出力してください。
	const N = Number(line)
	console.log( N === 7 ? 'Yes' : 'No')
});
