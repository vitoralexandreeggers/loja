
const form = document.getElementById("formCadastro");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const senhaValue = senha.value;
    const confirmarSenhaValue = confirmarSenha.value;

    if (senhaValue !== confirmarSenhaValue) {
        alert("As senhas não coincidem!");
        return;
    }

    if (senhaValue.length < 4) {
        alert("A senha deve ter pelo menos 4 caracteres!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(user => user.email === emailValue);

    if (existe) {
        alert("Esse email já está cadastrado!");
        return;
    }

    const novoUsuario = {
        nome: nomeValue,
        email: emailValue,
        senha: senhaValue
    };

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");

    form.reset();

    window.location.href = "index.html";
});