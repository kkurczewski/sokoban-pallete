function updateTable(table, rows, cols) {
    const prevRows = table.rows.length
    for (let i = prevRows; i < rows; i++) {
        table.insertRow()
    }
    for (let i = rows; i < prevRows; i++) {
        table.deleteRow(-1)
    }
    for (const row of table.rows) {
        const prevCols = row.cells.length
        for (let i = prevCols; i < cols; i++) {
            const cell = row.insertCell()
            cell.classList.add("cell")
        }
        for (let i = cols; i < prevCols; i++) {
            row.deleteCell(-1)
        }
    }
}