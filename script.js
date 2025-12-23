// Contact form
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("success-msg");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSfQgQU7lKzU4gbT5J1If8GZF4zRtymoVFmNHa2aX4JcvPCNcA/formResponse",
          {
            method: "POST",
            mode: "no-cors",
            body: formData
          }
        ).then(() => {
            successMsg.style.display = "block";
            form.reset();
        }).catch(() => {
            alert("Something went wrong. Please try again.");
        });
    });
}