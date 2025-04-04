function coletarCep() {
    let cep = document.getElementById("cep").value;
    console.log(cep);
    if(validarCEP(cep)) {
    Dados(cep);
    } else {
        alert("CEP inválido. Por favor, digite um CEP válido")
    }
}

async function Dados(cep) {
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json() ) 
    dadosTela(dados);
    
}

function dadosTela(dados) {
document.querySelector("#endereco").innerHTML = " Endereço : " + dados.logradouro;
    document.querySelector("#bairro").innerHTML = " Bairro : " + dados.bairro;
    document.querySelector("#cidade").innerHTML = "Cidade : " + dados.localidade;
    document.querySelector("#estado").innerHTML = "Estado : " + dados.uf;
    document.querySelector("#regiao").innerHTML = "Regiao : " + dados.regiao; 
    
}

function apagar() {
    document.querySelector("#endereco").innerHTML = "Endereço"
    document.querySelector("#bairro").innerHTML = "Bairro"
    document.querySelector("#cidade").innerHTML = "Cidade"
    document.querySelector("#estado").innerHTML = "Estado"
    document.querySelector("#regiao").innerHTML = "Região" 
}

function validarCEP(cep) {
    const cepPattern = /^[0-9]{5}-?[0-9]{3}$/;
    return cepPattern.test(cep);
}

