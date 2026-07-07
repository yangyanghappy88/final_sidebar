// sys script



const initializeButton = document.getElementById(
    "initializeButton"
);

const bootScreen = document.getElementById(
    "bootScreen"
);

const dashboard = document.getElementById(
    "dashboard"
);




// init


initializeButton.addEventListener(
    "click",
    function(){

        // no rep click

        initializeButton.disabled = true;



        // hide term

        bootScreen.classList.add(
            "hide"
        );



        // academy system

        setTimeout(
            function(){

                dashboard.classList.add(
                    "show"
                );

            },
            600
        );


    }
);