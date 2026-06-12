window.onload = function() {
    const botao = document.getElementById("btnVoltarTopo");
    
    if (botao) {
        botao.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    } else {
        console.error("Erro: O botão com o ID 'btnVoltarTopo' não foi encontrado no HTML.");
    }
};
