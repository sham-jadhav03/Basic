let grow = 0;
var btn = document.querySelector('button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('.inner')
var main = document.querySelector('main')

btn.addEventListener("click", function () {

    btn.style.pointerEvents = 'none'

    var num = 50 + Math.floor(Math.random()*50)

    var int = setInterval(() => {
        grow++;
        h2.innerHTML = grow + '%'
        inner.style.width = grow + '%'
    }, num)

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity= 0.5
        alert('Downloaded in', num/10,'seconds')
        main.style.backgroundColor='pink'
    }, num*100)

})