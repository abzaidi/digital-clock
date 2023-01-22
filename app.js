
setInterval(function(){
    const clock = document.querySelector("h1");

    let time = new Date().toLocaleTimeString("en-US");

    clock.innerHTML = time;

}, 1000);
