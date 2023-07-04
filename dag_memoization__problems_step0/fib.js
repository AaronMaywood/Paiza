process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
reader.on('line', (line) => {
	lines.push(line);
	for(i=0;i<line;i++) fib(i)
	console.log(Number(fib(line) % 1_000_000_007n ))	// BIGINT -> Number
														// 1_000_000_007n の余りを出しているのは仕様による
});

let memo = {}
function fib(n){
	if(n==0) return 0n	// BIGINT
    if(n==1) return 1n	// BIGINT
	// https://qiita.com/rymiyamoto/items/be91b04f70de2b621bb3
	if(! memo.hasOwnProperty(n)){
		memo[n] = fib(n-1)+fib(n-2)
	}
	return memo[n]
}

