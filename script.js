// Send Email
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("A8LpEJBYveQJtmJGU");
})();

const msg = document.querySelector(".contact-form");

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      document.querySelector(".loader").classList.add("show");
      emailjs.sendForm("service_0afvek6", "template_4cfttvi", this).then(
        function () {
          document.getElementById("contact-form").reset();
          document.querySelector(".loader").classList.remove("show");
          msg.innerHTML = "";
          msg.innerHTML += "<span class='success-msg'>Email Sent</span>";
          msg.classList.add("show");
          setTimeout(() => msg.classList.remove("show"), 2000);
          console.log("SUCCESS!");
        },
        function (error) {
          document.querySelector(".loader").classList.toggle("show");
          msg.classList.add("show");
          msg.innerHTML += "<span class='error-msg'>Email Not Sent</span>";
        }
      );
    });
};
