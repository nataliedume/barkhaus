
/* ==================================================
   BARKHAUS JAVASCRIPT
   ================================================== */


/* ----------------------------------------------
   NAVIGATION
   ---------------------------------------------- */

const nav =
    document.querySelector(".nav");


function handleNavigation() {

    if (window.scrollY > 45) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleNavigation,
    {
        passive: true
    }
);


handleNavigation();



/* ----------------------------------------------
   SCROLL REVEALS
   ---------------------------------------------- */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(

    (element) => {

        observer.observe(
            element
        );

    }

);

/* ----------------------------------------------
   MAGNETIC BUTTONS
   ---------------------------------------------- */

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


magneticButtons.forEach(

    (button) => {

        button.addEventListener(

            "mousemove",

            (event) => {

                const rectangle =
                    button.getBoundingClientRect();


                const x =
                    event.clientX
                    - rectangle.left
                    - rectangle.width / 2;


                const y =
                    event.clientY
                    - rectangle.top
                    - rectangle.height / 2;


                button.style.transform =
                    `translate(
                        ${x * 0.12}px,
                        ${y * 0.12}px
                    )`;

            }

        );


        button.addEventListener(

            "mouseleave",

            () => {

                button.style.transform =
                    "";

            }

        );

    }

);

/* ----------------------------------------------
   EMAIL SIGNUP
   ---------------------------------------------- */

const signupForm =
    document.querySelector(
        ".signup-form"
    );


if (signupForm) {

    signupForm.addEventListener(

        "submit",

        (event) => {

            event.preventDefault();


            const input =
                signupForm.querySelector(
                    "input"
                );


            const message =
                document.querySelector(
                    ".form-note"
                );


            const email =
                input.value.trim();


            if (!email) {

                message.textContent =
                    "Please enter your email.";

                return;

            }


            message.textContent =
                "You're on the Haus list. Welcome.";


            signupForm.reset();

        }

    );

}
