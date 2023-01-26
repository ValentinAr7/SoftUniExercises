class Matrix {
    constructor(size) {
        this.matrix = new Array(size);
        for (let i = 0; i < size; i++) {
            this.matrix[i] = new Array(size).fill(0);
        }
    }

    ReadTriangleMatrix() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = i; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = parseInt(prompt(`Enter element at row ${i + 1} and column ${j + 1}:`));
            }
        }
    }
}

const matrix = new Matrix(3);
matrix.ReadTriangleMatrix();
console.log(matrix.matrix);
console.log(matrix.GetColumnsMax());
console.log(matrix.GetMinMax());