
let co = document.getElementById("count")
let count = 0
console.log(co)
function increment() {
    count += 1
    console.log("button was pressed")
    co.innerText = `count: ${count}`
}

function nuke() {
    count = 0
    console.log("value reset")
    co.innerText = `count: ${count}`
}

function whatever() {
    count -= 1
    console.log("decrement button was pressed")
    co.innerText = `count: ${count}`
}
