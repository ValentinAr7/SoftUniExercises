function tableToJson(table) {
    // Split table into rows
    let rows = table.map(row => row.split('|').map(cell => cell.trim()));

    // Extract headings
    let headings = rows[0].slice(1, -1);

    // Extract data rows
    let data = rows.slice(1).map(row => {
        let cells = row.slice(1, -1);

        // Create an object using headings as keys and cells as values
        let obj = {};
        headings.forEach((heading, index) => {
            obj[heading] = cells[index];
        });
        return obj;
    });

    // Parse latitude and longitude to numbers
    data.forEach(row => {
        row.Latitude = parseFloat(row.Latitude).toFixed(2);
        row.Longitude = parseFloat(row.Longitude).toFixed(2);
    });

    // Convert data to JSON
    let json = JSON.stringify(data);

    return json;
}

let input = [
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
];

console.table(tableToJson(input));