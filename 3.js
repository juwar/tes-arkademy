function acak(){
	let a='';
	let b='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let c=32;
	let d=b.length;

	for (let i = 0; i < c; i++) {
		a+=b.charAt(Math.floor(Math.random()*d));
	}
	return a;
}

function ulang(peng){
	let e = [];
	for (let u = 0; u < peng; u++) {
		let ini = acak();
		if (e.includes(ini)) {
			peng++;
		}else{
			e.push(ini);
		}
	}

	e.forEach(item=>{
		console.log(item);
	})
}

ulang(10);