const audio = document.getElementById("Jane");
const telaEntrada = document.getElementById("tela-entrada");
const btnEntrar = document.getElementById("btn-entrar");
const inicio = 1;
const fim = 93;

function controlarFim() {
    if (audio.currentTime >= fim) {
        audio.pause();
        audio.removeEventListener("timeupdate", controlarFim);
    }
}
// Essa função roda assim que o usuário clica no botão "Entrar"
btnEntrar.addEventListener("click", () => {
    // 1. Esconde a tela de boas-vindas
    telaEntrada.style.display = "none";
    
    // 2. Configura o tempo e toca o áudio
    audio.currentTime = inicio;
    audio.addEventListener("timeupdate", controlarFim);
    
    audio.play().catch(error => {
        console.log("Erro ao tocar áudio:", error);
    });
});


// GIFs
// Seleciona todas as imagens ocultas
const images = document.querySelectorAll('.hidden')

// Configura o observador para detectar entrada e saída
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe quando a imagem ENTRA na tela
            entry.target.classList.add('show')
        } else {
            // Remove a classe quando a imagem SAÍ da tela
            entry.target.classList.remove('show')
        }
    })
}, {
// Dispara o efeito quando pelo menos 15% da imagem estiver visível
threshold: 0.15 
})

// Vincula cada imagem ao observador
images.forEach(image => {
observer.observe(image)
})