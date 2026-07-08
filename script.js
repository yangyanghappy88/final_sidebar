// element

const button = document.getElementById("accessButton");

const portal = document.getElementById("portal");

const doors = document.getElementById("doors");

const checks = [

    {
        icon: document.getElementById("icon1"),
        text: document.getElementById("text1"),
        done: "Secure connection established."
    },

    {
        icon: document.getElementById("icon2"),
        text: document.getElementById("text2"),
        done: "Student modules loaded."
    },

    {
        icon: document.getElementById("icon3"),
        text: document.getElementById("text3"),
        done: "Interface integrity verified."
    },

    {
        icon: document.getElementById("icon4"),
        text: document.getElementById("text4"),
        done: "Dashboard ready."
    }

];

// delay

function wait(ms){

    return new Promise(resolve => setTimeout(resolve, ms));

}

// boot seq

async function bootSequence(){

    button.disabled = true;

    button.textContent = "INITIALIZING...";

    for(const item of checks){

        item.icon.classList.remove("pending");

        item.icon.classList.add("loading");

        await wait(900);

        item.icon.classList.remove("loading");

        item.icon.classList.add("complete");

        item.text.textContent = item.done;

        await wait(300);

    }

    await wait(700);

    portal.classList.add("hide");

    await wait(500);

    doors.classList.add("open");

    await wait(1400);

    // Remove doors after opening

    doors.style.display = "none";

    // Remove portal completely

    portal.style.display = "none";

}


button.addEventListener("click", bootSequence);