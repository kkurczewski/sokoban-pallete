window.addEventListener("load", () => {
    const rows = document.getElementById("rows")
    const cols = document.getElementById("cols")
    const grid = document.getElementById("grid")
    const table = document.getElementById("grid")

    grid.addEventListener("click", onClicked)
    grid.addEventListener("mousemove", onHover)

    updateTable(table, rows.value, cols.value)

    function onClicked(e) {
        const cell = e.target
        if (!cell.classList.contains("cell")) {
            return
        }
        const palleteTile = document.querySelector("#pallete :checked")
        const tileName = palleteTile.id
        const tileSymbol = palleteTile.dataset.symbol
        if (palleteTile.dataset.exclusive) {
            document.querySelectorAll(`.cell[data-type=${tileName}]`).forEach(cell => {
                cell.dataset.type = ''
                cell.textContent = ''
            })
        }
        cell.dataset.type = tileName
        cell.textContent = tileSymbol
    }

    function onHover(e) {
        if (e.ctrlKey) {
            e.target.click()
        }
    }

    rows.oninput = cols.oninput = () => updateTable(table, rows.value, cols.value)
})