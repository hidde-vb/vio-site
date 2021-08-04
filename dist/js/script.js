/* Hamburger Menu */
const hamburger = document.getElementById('hamburger');
const headerNav = document.getElementById('navigation');

let active = false;

hamburger.onclick = function () {
    active = !active;
    if (active) {
        hamburger.className = 'hamburger active';
        headerNav.className = 'vertical';
    } else {
        hamburger.className = 'hamburger';
        headerNav.className = '';
    }
};

const headerIcon = document.getElementById('header-icon');

let showOnScroll = function () {
    let y = window.scrollY;
    if (y <= 50) {
        headerIcon.className = 'header-icon';
    } else {
        headerIcon.className = 'header-icon hide';
    }
};
window.addEventListener('scroll', showOnScroll);

/* JSMail */

function generateMessage(message, phone) {
    return message + "\n\n telefoon: " + phone;
}

(function () {
    emailjs.init('user_tsBv3qPDJaxkkm7K9BsQi');

    window.onload = function () {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            emailjs.send("hiddevbavel_gmail_com", "template_V9HUOUNS", {
                "from_name": document.querySelector("#user_name").value,
                "message": generateMessage(
                    document.querySelector("#message").value,
                    document.querySelector("#user_phone").value),
                "from_mail": document.querySelector("#user_mail").value,
            }).then(function (response) {
                document.querySelector("#contact-form").classList.add("hidden")
                document.querySelector("#succes-message").classList.remove("hidden")

                const snack = document.querySelector("#snackbar");
                snack.className = "show";
                setTimeout(function () {
                    snack.className = snack.className.replace("show", "");
                }, 5000);
            }, function (error) {
                console.log('FAILED...', error);
            });
        });
    }
})();