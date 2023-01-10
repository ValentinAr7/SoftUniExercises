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