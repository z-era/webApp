export function limitNum(value) {
	var len = value.length;
	if ( len > 30 && /.*[\u4e00-\u9fa5]+.*$/.test(value)) {
		return value.slice(0,22) + '...';
	} else if(len > 55) {
		return value.slice(0, 40) + '...';
	} else {
		return value;
	}
}
