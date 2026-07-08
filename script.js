const enter = document.getElementById("enter");

const fill = document.getElementById("fill");

const log = document.getElementById("log");

const boot = document.getElementById("boot");

const doors = document.getElementById("doors");


/* system messages */

const messages = [

    "connecting to academy network...",

    "verifying student credentials...",

    "synchronizing class points...",

    "loading OAA framework...",

    "accessing academy registry...",

    "loading command modules...",

    "preparing ANHS operating system...",

    "initialization complete."

];


/* delay */

function wait(ms){

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}


/* boot */

enter.addEventListener("click", async () => {


    enter.disabled = true;

    enter.textContent = "ACCESSING";


    log.innerHTML = "";


    for(let i = 0; i < messages.length; i++){


        fill.style.width =
            ((i + 1) / messages.length) * 100 + "%";


        log.innerHTML +=
            "> " + messages[i] + "<br>";


        log.scrollTop =
            log.scrollHeight;


        await wait(650);


    }


    await wait(700);


    /* hide terminal */

    boot.classList.add("hide");


    await wait(700);


    /* open doors */

    doors.classList.add("open");


    await wait(1400);


    boot.remove();

    doors.remove();


});