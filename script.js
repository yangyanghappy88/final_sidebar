/* elements */

const enter = document.getElementById("enter");
const log = document.getElementById("log");
const fill = document.getElementById("fill");
const boot = document.getElementById("boot");
const doors = document.getElementById("doors");
const particles = document.querySelector(".particles");

/* data */

const messages = [
    "academy node ............ online",
    "secure connection ....... established",
    "student database ........ connected",
    "decrypting records ...... complete",
    "oaa framework ........... synchronized",
    "security level .......... ii",
    "command modules ......... loaded",
    "anhs system ............. ready"
];

const hex = [
    "0xA41F93",
    "0x7C821D",
    "0xF42B88",
    "0x19AC52",
    "0xE91D40"
];

/* state */

let bootFinished = false;

/* wait */

const wait = ms =>
    new Promise(resolve => setTimeout(resolve, ms));

/* hex */

function randomHex() {

    return hex[
        Math.floor(Math.random() * hex.length)
    ];

}

/* type */

async function typeLine(text) {

    const line = document.createElement("div");

    log.appendChild(line);

    for (const char of text) {

        line.textContent += char;

        await wait(20);

    }

    log.scrollTop = log.scrollHeight;

}

/* boot */

async function startBoot() {

    enter.disabled = true;
    enter.textContent = "loading";

    log.innerHTML = "";
    fill.style.width = "0%";

    for (let i = 0; i < messages.length; i++) {

        await typeLine("> " + messages[i]);

        await wait(150);

        if (i % 2 === 0) {

            await typeLine("  " + randomHex());

        }

        fill.style.width =
            ((i + 1) / messages.length) * 100 + "%";

        await wait(250);

    }

    bootFinished = true;

    enter.disabled = false;
    enter.textContent = "initialize system";

}

/* particles */

function createParticles(amount = 40) {

    if (!particles) return;

    for (let i = 0; i < amount; i++) {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            Math.random() * 100 + "vh";

        particle.style.animationDelay =
            Math.random() * 3 + "s";

        particles.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 4000);

    }

}

/* shutdown */

async function shutdown() {

    enter.disabled = true;
    enter.textContent = "access granted";

    await wait(700);

    boot.classList.add("hide");

    createParticles();

    doors.classList.add("open");

    await wait(1600);

    boot.remove();
    doors.remove();

}

/* events */

window.addEventListener("load", startBoot);

enter.addEventListener("click", () => {

    if (!bootFinished) return;

    shutdown();

});