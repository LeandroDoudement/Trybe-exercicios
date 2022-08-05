function sucessSubmit() {
  const submitButton = document.querySelector('#submit');
  const inputName = document.querySelector('#input-name');
  const inputEmail = document.querySelector('#input-email');
  submitButton.addEventListener('click', function () {
    if (inputName.value.length <= 10 && inputEmail.value.length <= 10) {
      alert('Dados Inválidos');
    } else {
      alert(
        'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.'
      );
    }
  });
}
sucessSubmit();
