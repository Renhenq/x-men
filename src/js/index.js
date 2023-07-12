console.log("Oidwa9dwa")
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({
                top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        AlterarNomePersonagemSelecionado(personagem);

        AlterarDescricaoPersonagemSelecionado(personagem);
    })
})

function AlterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function AlterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const idPersonagem = personagem.attributes.id.value;
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    imagemPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
