function changeColor() {
    const text = document.querySelector("#lesson_1 .content")
    if (text) text.style.color = "red"
}

function displayToggle() {
    const content = document.querySelector("#lesson_2 .content")
    if (content) content.hidden = !content.hidden
}

function clickCount() {
    const countText = document.querySelector("#lesson_3 .content")
    if (!countText) return

    const count = Number(countText.dataset.count || 0) + 1
    countText.dataset.count = count
    countText.textContent = count
}

function updateText() {
    const input = document.querySelector("#lesson_4 input")
    const result = document.querySelector("#lesson_4 .result")
    if (input && result) result.textContent = input.value
}

function changeBackground(color) {
    document.body.style.backgroundColor = color
}

function addTodo() {
    const input = document.querySelector("#lesson_6 input")
    const list = document.querySelector("#lesson_6 ul")
    if (!input || !list || !input.value.trim()) return

    const item = document.createElement("li")
    item.textContent = input.value.trim()

    const removeButton = document.createElement("button")
    removeButton.textContent = " Xóa"
    removeButton.onclick = () => item.remove()
    item.append(removeButton)

    list.append(item)
    input.value = ""
}

function updateLength(input) {
    const result = document.querySelector("#lesson_8 .result")
    if (result) result.textContent = `${input.value.length} ký tự`
}

function makeBold(text) {
    text.style.fontWeight = "bold"
}

function resetBold(text) {
    text.style.fontWeight = "normal"
}

function validateForm(event) {
    event.preventDefault()

    const input = document.querySelector("#lesson_10 input")
    const message = document.querySelector("#lesson_10 .message")
    if (!input || !message) return

    const hasValue = input.value.trim() !== ""
    message.textContent = hasValue ? "Gửi thành công!" : "Vui lòng nhập dữ liệu."
    message.style.color = hasValue ? "green" : "red"
}
