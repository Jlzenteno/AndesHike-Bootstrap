// Formulario de reservas
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservation-form");
    const message = document.getElementById("reservation-message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const tour = document.getElementById("tour").value;
      const date = document.getElementById("date").value;
  
      // Aquí podrías enviar los datos a tu servidor para procesar la reserva
  
      message.textContent = `¡Reserva realizada! ${name}, has reservado el tour ${tour} para el ${date}.`;
      form.reset();
    });
  });

  const toggleButton = document.getElementById('toggleDescription');
  const tourDescription = document.getElementById('tourDescription');

  toggleButton.addEventListener('click', () => {
    if (tourDescription.style.display === 'none' || tourDescription.style.display === '') {
      tourDescription.style.display = 'block';
      toggleButton.textContent = 'Ver menos';
    } else {
      tourDescription.style.display = 'none';
      toggleButton.textContent = 'Ver más';
    }
  });
  // Fin Formulario de reservas