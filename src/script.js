const boxShadowClass = document.querySelectorAll(".box-shadow-1");
const boxShadowClass2 = document.querySelectorAll(".box-shadow-2");
const body = document.querySelector("body");
const color = document.querySelectorAll("input[name='color']")
const colorPicker = document.querySelector(".color-picker")
const colorToggle = document.querySelector(".color-toggle")
const logoBgColor = document.querySelector(".logo-bg-color")


colorToggle.addEventListener('click', function () {
    colorPicker.classList.toggle('hidden')
    colorPicker.classList.toggle('grid')
})


color.forEach(e => {
    e.addEventListener('change', function (e) {
        console.log(e.target.value)
        changeBoxShadow(e.target.getAttribute('data-shadow'))
        body.style.backgroundColor = this.value;
        logoBgColor.style.backgroundColor = this.value;
    })
})





function changeBoxShadow(color) {
    boxShadowClass.forEach(e => {
        e.style.boxShadow = `6px 6px ${color}`;
    })    
    boxShadowClass2.forEach(e => {
        e.style.boxShadow = `3px 3px ${color}`;
    })
}