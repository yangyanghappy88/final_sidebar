const enter = document.getElementById("enter");

const fill = document.getElementById("fill");

const log = document.getElementById("log");

const boot = document.getElementById("boot");

const doors = document.getElementById("doors");

const status = document.getElementById("status");

const particles = document.querySelector(".particles");


/* boot */

const lines = [

    "academy node ............ online",

    "secure connection ....... established",

    "decrypting registry ..... complete",

    "loading student records . complete",

    "syncing class points .... complete",

    "loading oaa framework ... complete",

    "verifying permissions ... level ii",

    "system ready."

];


/* wait */

function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}


/* type */

async function type(text){

    const row=document.createElement("div");

    log.appendChild(row);

    for(const c of text){

        row.textContent+=c;

        await wait(18);

    }

    log.scrollTop=log.scrollHeight;

}


/* particles */

function makeParticle(){

    const p=document.createElement("div");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=
        5+Math.random()*5+"s";

    p.style.animationDelay=
        Math.random()*2+"s";

    particles.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },10000);

}

setInterval(makeParticle,220);


/* boot */

enter.addEventListener("click",async()=>{

    enter.disabled=true;

    enter.textContent="initializing...";

    log.innerHTML="";

    fill.style.width="0%";

    status.textContent="booting academy terminal";

    for(let i=0;i<lines.length;i++){

        await type("> "+lines[i]);

        fill.style.width=
            ((i+1)/lines.length)*100+"%";

        status.textContent=
            Math.round(((i+1)/lines.length)*100)
            +"% loaded";

        await wait(180);

    }

    await wait(500);

    status.textContent="access granted";

    enter.textContent="welcome";

    await wait(700);

    boot.classList.add("hide");

    await wait(250);

    doors.classList.add("open");

    await wait(1500);

    boot.remove();

    doors.remove();

});