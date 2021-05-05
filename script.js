const sendEmail = () => {
    let message = document.getElementById("form_mensagem");
    let phone = document.getElementById("form_telefone");
    let name = document.getElementById("form_nomesobrenome");
    let email = document.getElementById("form_email");
    window.open(`https://wa.me/5551981377877/?text=[${form_nomesobrenome.value}]%0D[${form_telefone.value}]%0D[${form_email.value}]%0D[${form_mensagem.value}]`);
}