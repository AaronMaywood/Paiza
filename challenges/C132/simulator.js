let N = Math.floor(Math.random()*100)
let M = Math.floor(Math.random()*N)

console.log(`N: ${N}、M: ${M}`)

// 部屋を生成
let floor = []
for(let i=0;i<N;i++) floor[i] = false

function all_clear(){
	let clear = true
	for(let i=0;i<N;i++) {
		if(floor[i] === false) {
			clear = false
			break;
		}
	}
	return clear
}

// ロボットを動かす
let index = 0
let clear = false
for(let i=0;i<N;i++){
	floor[index] = true
	index = (index + M) % N
	if(all_clear()) {
		clear = true
		break;
	}
}

console.log( clear ? 'Yes' : 'No')

