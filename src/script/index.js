var segurado = document.querySelector('segurado').value
var sinistro = document.querySelector('sinistro').value
var ambiente = document.querySelector('ambiente').value
var statusVistoria = document.querySelector('status').value
var descarteSim = document.querySelector('sim')
var descarteNao = document.querySelector('nao')

var outroProduto = document.querySelector('outro-produto').value

var defeito = document.querySelector('defeito')

// Saida
var laudo = document.querySelector('laudo-saida')

entrada.addEventListener('input', function () {
    // Atualiza o conteúdo do elemento de saída com o valor atual da entrada
    if (ambiente == 'analise-virtual-tc' && statusVistoria == 'procedente' && descarteSim == True){
        laudo.textContent = `
        Realizada vistoria online com Sr.(a) ${segurado}. Validado modelo e características do produto. Sr.(a) ${segurado} relata que o produto ${defeito}. Na vistoria online, realizados testes que validam os defeitos informados pelo segurado, defeitos funcionais que impedem o funcionamento correto do produto. Sem evidências de avarias ou danos por agentes externos no aparelho. Testado tomada elétrica com outro aparelho (${outroProduto}). Após orientação, produto foi adequado para descarte.   Link:
        `;
    }
});

