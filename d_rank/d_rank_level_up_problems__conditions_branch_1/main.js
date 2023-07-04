process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	// Sがpaizaと一致する場合はYESを、一致しない場合はNOを出力してください。
	console.log( line === 'paiza' ? 'YES' : 'NO' )
});
