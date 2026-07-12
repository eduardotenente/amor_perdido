// Aúdio
const audio = document.getElementById("Jane");
const inicio = 1;
const fim = 93;
audio.addEventListener("loadedmetadata", () => {
audio.currentTime = inicio

function controlarFim() {
    if (audio.currentTime >= fim) {
    audio.pause();
    audio.removeEventListener("timeupdate", controlarFim);
    }
}
audio.addEventListener("timeupdate", controlarFim);
// Tenta desmutar depois de iniciar
audio.muted = false;
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