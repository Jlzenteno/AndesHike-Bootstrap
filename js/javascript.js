// Formulario reservas pagina detalle destino


<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservation-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.querySelector("#name").value;
      const email = form.querySelector("#email").value;
      const date = form.querySelector("#date").value;
      const guests = form.querySelector("#guests").value;

      // Aquí puedes agregar la lógica para enviar los datos a tu backend
      // Por ahora, simplemente mostraremos una alerta con los datos

      const reservationData = {
        name: name,
        email: email,
        date: date,
        guests: guests,
      };

      // Mostrar alerta con los datos de la reserva
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
  });
</script>
