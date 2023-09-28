document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservation-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const date = form.querySelector("#date").value;
    const guests = form.querySelector("#guests").value;

    // Validar datos aquí (por ejemplo, validar el formato de correo electrónico)

    const reservationData = {
      name: name,
      email: email,
      date: date,
      guests: guests,
    };

    // Aquí deberías enviar los datos al backend usando una solicitud AJAX

    // Mostrar una alerta con los datos de la reserva (esto es solo para fines de demostración)
    alert(
      "Reserva realizada:\n" +
        "Nombre: " +
        reservationData.name +
        "\nEmail: " +
        reservationData.email +
        "\nFecha: " +
        reservationData.date +
        "\nNúmero de invitados: " +
        reservationData.guests
    );

    // Restablecer el formulario
    form.reset();
  });

  const cardLinks = document.querySelectorAll(".card-link");

  cardLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      window.location.href = href;
    });
  });
});
