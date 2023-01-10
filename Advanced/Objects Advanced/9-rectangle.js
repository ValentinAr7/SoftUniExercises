function rectangle(width, height, color) {
    let rect = {
        width: width,
        height: height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea: function() {
            return this.width * this.height;
        }
    }
    return rect;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width); // 4
console.log(rect.height); // 5
console.log(rect.color); // 'Red'
console.log(rect.calcArea()); // 20