// document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count+1;
    countEl.innerText = count

    alert(count)
}

function save() {
    console.log(count)

}

save()