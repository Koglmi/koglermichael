window.addEventListener('load', () => {
    const name = document.querySelector('#homeName');
    const strName = name.textContent;
    const splitName = strName.split("");
    name.textContent = "";

    name.style.display = 'flex';
    // console.log(splitName);
    for (let i = 0; i < splitName.length; i++) {
        name.innerHTML +="<span>" + splitName[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 150);

    function onTick() {
        const span = name.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if (char === splitName.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }
})