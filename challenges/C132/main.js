process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
	const [N,M] = lines
	// 部屋が偶数の場合は
	if(N % 2 === 0){
		// ロボットの移動数が奇数でなければ終わらない
		if(M % 2 === 1){
			console.log('yes')
		}else{
			console.log('no')
		}
	}
	// 部屋が奇数の場合は
	else{
		console.log('yes')
	}
});

