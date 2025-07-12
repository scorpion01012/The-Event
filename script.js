(function(){
  emailjs.init("VuISYk-PmmM3aEks6"); // Your EmailJS User ID
})();

// Handle main booking form submission
document.getElementById("ticketForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Send booking form via EmailJS
  emailjs.sendForm("service_dakr%##", "template_qpgpkz5", this)
    .then(() => {
      document.getElementById("responseMessage").innerText = "🎉 Booking submitted successfully!";
    }, () => {
      document.getElementById("responseMessage").innerText = "❌ Error sending booking.";
    });

  // Copy values to confirmation form
  document.getElementById("confirmedName").value = document.querySelector('[name="name"]').value;
  document.getElementById("confirmedTicket").value = document.querySelector('[name="ticket"]').value;
  document.getElementById("confirmedPhone").value = document.querySelector('[name="phone"]').value;
});

// Handle payment confirmation form submission
document.getElementById("confirmPaymentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_dakr%##", "template_qpgpkz5", this)
    .then(() => {
      document.getElementById("confirmationMessage").innerText = "✅ Payment confirmation sent!";
    }, () => {
      document.getElementById("confirmationMessage").innerText = "❌ Error sending payment confirmation.";
    });
});

// Countdown timer to event date
const countdown = document.getElementById("countdown");
const eventDate = new Date("2025-08-08T21:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎉 The event has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Toggle booking display section after booking form is submitted
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("simpleBookingForm");
  const resultBox = document.getElementById("afterSubmit");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.style.display = "none";
      resultBox.style.display = "block";
      window.scrollTo({ top: resultBox.offsetTop - 100, behavior: 'smooth' });
    });
  }
});