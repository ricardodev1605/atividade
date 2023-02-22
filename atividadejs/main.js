/*Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);
Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. Caso contrário, apenas repasse o valor do produto para variável de 
preço final;
Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais.
Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final;
Crie um array de demandas com os valores: 10, 2, 1, 30, 5.
Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.
Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato:
"O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array
que deverá começar vazio. Mostre o total obtido de todos os clientes no console. No formato: "O total de lucro é de R$ 5000",
por exemplo.*/

// -----------------------------------------------------------//


let nomeProduto = "Batata";
let valorProduto = 1000;
const descontoProduto = 0.05;
descontoValido = Boolean;
let valorFinal = 0;

    if (valorProduto > 900) {
    descontoValido = true;
    valorFinal = valorProduto - (valorProduto * (descontoProduto * descontoValido));
    }
    if (valorProduto < 1000) {
    descontoValido = false;
    valorFinal = valorProduto;
    }

    console.log("Preço final:R$"+ valorFinal)

let demandas = [10, 2, 1, 30, 5];
let valoresPagos = [0];
        
    for (let i = 0; i < demandas.length; i++){
    let valorPago = demandas[i] * valorFinal;
    valoresPagos.push (valorPago);
    console.log ("O cliente " + (i + 1) + " deverá pagar:R$" + valorPago);
    }

    let lucroTotal = valoresPagos.reduce((a,b) => a + b,0);
    {console.log("O total do lucro é de R$" + lucroTotal);
    }