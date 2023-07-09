const spinner = document.getElementById("spinner")

function spinnerLoader(){
    setTimeout(() => {
        spinner.classList.add('hide')
    }, 2000)
}