<button id="btnVoltarTopo" class="btn-sim" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;">
        ↑ Voltar ao Início
    </button>

    <script>
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
    </script>
</body>
