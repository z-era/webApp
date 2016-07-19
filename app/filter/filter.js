export function limitNum(value) {
	var len = value.length;
	if ( len > 31 && /.*[\u4e00-\u9fa5]+.*$/.test(value)) {
		return value.slice(0,25) + '...';
	} else if(len > 55) {
		return value.slice(0, 45) + '...';
	} else {
		return value;
	}
}
