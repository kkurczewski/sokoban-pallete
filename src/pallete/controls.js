document.addEventListener("keydown", e => {
    if (document.activeElement.tagName == "INPUT") {
        return
    }
    switch (e.key) {
        case "ArrowUp":
            document.querySelector("#pallete input:has(+ label + :checked), #pallete input:last-of-type").click()
            break
        case "ArrowDown":
            document.querySelector(":checked ~ input, #pallete input:has(~ input:last-of-type:checked)").click()
            break
    }
})