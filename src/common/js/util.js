/**
 * 解析url参数
 * @example ?id=12&a=b
 * @return Object {id:12,a:b}
 */
export function urlParse() {
	let url = window.location.search;
	let obj = {};
	let reg = /[?&][^?&]+=[^?&]+/g;
	let arr = url.match(reg);
	//['?id=12','&a=b']
	if (arr) {
		arr.forEach((item) => {
			//substring(1)截取一个字符串  split('=')分割字符串
			let temArr = item.substring(1).split('=');
			// 解码url
			let key = decodeURIComponent(temArr[0]);
			let val = decodeURIComponent(temArr[1]);
			obj[key] = val;
		})
	}
	return obj;
};