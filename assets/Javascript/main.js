var imgElements = document.querySelectorAll('#img')

startSlides(imgElements)

function startSlides(element) {
    var i = 1

    setInterval(() => {
        if (i == element.length) {
            i = 0
        }
        setDisplay(element)
        element[i].style.display = 'block'
        i++
    }, 3000)
}

function setDisplay(element) {
    for (var i = 0; i < element.length; i++) {
        element[i].style.display = 'none'
    }
}
