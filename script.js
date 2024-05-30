//pegando os elementos do HTML pelo ID
var formulario = document.getElementById('formulario');
var cep = document.getElementById('cep');
var tbody = document.getElementById('tbody');

var listaDeCeps = [];

//função responsavel por buscar cep
function buscarCep(event) {
    //previne o comportamento padrão do formulario
    event.preventDefault();

    //pegando o valor do INPUT DE CEP
    var valorDoCep = cep.value;
    console.log(valorDoCep)

    //fazendouma requisição para a API VIA CEP
    fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)
        .then( (response) => response.json())
        .then( (data) => {
            console.log(data)

            //adicionando o CEP na lista de CEPs
            listaDeCeps.push(data);

            console.log(listaDeCeps);

            var novaLinha = tbody.insertRow();

            var colunaCep = novaLinha.insertCell(0);
            var colunaLogradouro = novaLinha.insertCell(1);
            var colunaBairro = novaLinha.insertCell(2);
            var colunaCidade = novaLinha.insertCell(3);
            var colunaUf = novaLinha.insertCell(4);

            listaDeCeps.forEach(item => {

                colunaCep.innerText = item.cep;
                colunaLogradouro.innerText = item.logradouro ? item.logradouro : 'Não informado';
                colunaBairro.innerText = item.bairro ? item.bairro : 'Não informado';
                colunaCidade.innerText = item.localidade ? item.localidade : 'Não informado';
                colunaUf.innerText = item.uf ? item.uf : 'Não informado';

            })
            
            


            //pegando o elemento do HTML pelo ID
            //var resultado = document.getElementById("resultado");


            //adicionando conteudo do HTML
            //resultado.innerText = `CEP: ${data.cep} - ${data.logradouro} - ${data.bairro}, - ${data.localidade} - ${data.uf}`;
        });

    console.log(valorDoCep);
}


function mascaraCep(event) {
    event.currentTarget.maxLength = 9
    let value = event.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')

    event.currentTarget.value = value

    return event
}


cep.addEventListener("keyup", mascaraCep);

//adicionando um evento de SUBMIT (ENVIO) no formulario
formulario.addEventListener('submit', buscarCep)