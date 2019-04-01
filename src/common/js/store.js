//存取本地
export function saveToLocal(id, key, value) {
	let seller = window.localStorage.__seller__;
	if(!seller){
		seller = {};
		seller[id] = {};
	}else{
		seller = JSON.parse(seller);
		if(!seller[id]){
			seller[id] = {};

		}
	}
	seller[id][key] = value;
	window.localStorage.__seller__ = JSON.stringify(seller);
}
//读取api
export function loadFromLocal(id, key, def) {
	//获取localStorage的__seller__
	let seller = window.localStorage.__seller__;
	console.log(seller);
	//如果没有seller返回默认值 
	if (!seller) {
		return def;
	}
	seller = JSON.parse(seller)[id];
	// console.log(seller[id]);
	//如果取不到此id的值，返回默认值
	if(!seller){
		return def;
	}
	//如果取不到商家的key，返回默认值（存在就返回ret）
	let ret = seller[key];
	return ret || def;
}