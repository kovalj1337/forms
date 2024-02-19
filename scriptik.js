// cancel.onclick = () => {
//     popup.style.display = "none"
//     lol.style.display = "block"
// }
// lol.onclick = () => {
//     popup.style.display = "block"
//     lol.style.display = "none"
// }
document.addEventListener('DOMContentLoaded', function(){
    const lol = document.querySelector('#lol'),
        popup = document.querySelector('#popup'),
        cancel = document.querySelector('#cancel')
        cancel.addEventListener('click', function(e){
            e.preventDefault()
            popup.style.display = "none"
            lol.style.display = "block"
        })
        lol.addEventListener('click', function(e){
            e.preventDefault()
            popup.style.display = "flex"
            lol.style.display = "none"
        })
})