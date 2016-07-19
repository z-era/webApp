export function limitNum(value) {
	var len = value.length;
	if ( len > 31 && /.*[\u4e00-\u9fa5]+.*$/.test(value)) {
		return value.slice(0,26) + '...';
	} else if(len > 56) {
		return value.slice(0, 50) + '...';
	} else {
		return value;
	}
}
