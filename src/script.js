const boxShadowClass = document.querySelectorAll(".box-shadow");
const body = document.querySelector("body");
const monsters = document.querySelectorAll("input[name='monster']")
const colorPicker = document.querySelector(".color-picker")
const colorToggle = document.querySelector(".color-toggle")


colorToggle.addEventListener('click', function () {
    colorPicker.classList.toggle('hidden')
    colorPicker.classList.toggle('grid')
})


monsters.forEach(m => {
    m.addEventListener('change', function (e) {
        console.log(e.target.value)
        shadow(e.target.getAttribute('data-shadow'))
        body.style.backgroundColor = this.value;
    })
})





function shadow(color) {
    boxShadowClass.forEach(e => {
        e.style.boxShadow = `6px 6px ${color}`;
    })    
}



// inputColor.forEach(element => {
//     element.addEventListener("click", function (e)  {

//         console.log(this.getAttribute('data-color'))
//         console.log(element)
//         // console.log(e.target.disable)
//         body.style.backgroundColor = this.getAttribute('data-color');
//         shadow(this.getAttribute('data-shadow'));
//     })
// });
