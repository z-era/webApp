
export function saleStatusColor(value) {
    var colors = [ "rgba(247, 51, 97, 1)", "rgba(245, 166, 35, 1)", 
                   "rgba(74, 144, 226, 1)", "rgba(74, 144, 226, 1)",
                   "rgba(74, 144, 226, 1)", "rgba(151, 150, 156, 1)"
                ];
    this.el.style.color = colors[value];
}

export function progressStatus(value) {
    var colors = ['rgba(155, 155, 155, 1)', 'rgba(126, 211, 33, 1)'];
    this.el.style.color = colors[value];
}