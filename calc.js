
function reloadSliders() {
    const element = document.getElementById("alloys");
    console.log(element.value)
}

window.onload = reloadSliders;

function sliderMoved() {
    sliders = [document.getElementById("slider_1"), document.getElementById("slider_2"), document.getElementById("slider_3")]
    slidersPercentage = [Number(sliders[0].value), Number(sliders[1].value), Number(sliders[2].value)]
    console.log(slidersPercentage)
    total = slidersPercentage.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(total)

    const totalElement = document.getElementById("total");
    if(total != 100) {
        totalElement.style.color = "red"
    } else {
        totalElement.style.color = "black"
    }
    totalElement.innerText =`Total: ${total}%`
}
