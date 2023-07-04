process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	const nums = line.split(' ')
	console.log((nums[0]-nums[1]) + ' ' + (nums[0]*nums[1]))
});
