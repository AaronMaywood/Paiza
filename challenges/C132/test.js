let N = Math.floor(Math.random()*100)
let M = Math.floor(Math.random()*N)

console.log(`N: ${N}、M: ${M}`)

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

