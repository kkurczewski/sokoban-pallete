window.addEventListener("load", () => {
    const anchor = document.getElementById("download")
    const columns = document.getElementById("cols")

    anchor.text = "Save"
    anchor.download = "level.txt"
    anchor.href = gridToLink()
    anchor.onclick = (e) => {
        e.target.href = gridToLink()
    }

    function gridToLink() {
        const textContent = gridToText()
        const blob = buildBlob(textContent)

        return URL.createObjectURL(blob)

        function buildBlob(text) {
            return new Blob([text], { type: "text/plain", oneTimeOnly: true })
        }

        function gridToText() {
            return Array.from(document.querySelectorAll(".cell"))
                .map(it => it.textContent ? it.textContent : " ")
                .reduce((a, b) => a + b)
                .match(new RegExp(`.{${columns.value}}`, "g"))
                .join("\n")
        }
    }
})