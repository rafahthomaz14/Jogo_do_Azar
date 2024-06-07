let numeroEscolhido;

function armazenarNumero() {
    let num = document.getElementById('num');
    let numValue = Number(num.value);
    let saldoElement = document.getElementById('saldo');
    let saldoAtual = Number(saldoElement.textContent.replace('R$', '').replace(',', '.'));

    if (numValue >= 1 && numValue <= 100) {
        if (saldoAtual >= 10) {
            numeroEscolhido = numValue;
            saldoAtual -= 10;
            saldoElement.textContent = 'R$ ' + saldoAtual.toFixed(2).replace('.', ',');
            console.log('Número escolhido:', numeroEscolhido);
        } else {
            alert('Saldo insuficiente. Adicione mais saldo.');
        }
    } else {
        console.log('Por favor, digite um número ');
    }
}

function gerar() {
    let sorteio = document.getElementById('txt1');
    let res = document.getElementById('res');
    let res1 = document.getElementById('res-1');

    if (numeroEscolhido === undefined) {
        alert('Por favor, confirme um número antes de realizar o sorteio.');
        return;
    }

    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    } while (numeroAleatorio === numeroEscolhido);

    res1.innerHTML = '';
    res.innerHTML = numeroAleatorio;
    res1.innerHTML += '<strong>QUE PENA !</strong><br>';
    res1.innerHTML += '<strong>VOCE NAO GANHOU !</strong>';
}

function limpar() {
    let num = document.getElementById('num');
    let res = document.getElementById('res');
    let res1 = document.getElementById('res-1');

    num.value = '';
    num.focus();
    res.innerHTML = '';
    res1.innerHTML = '';
    numeroEscolhido = undefined;
}

function mostrarCampoSaldo() {
    document.getElementById('campoSaldo').style.display = 'block';
}

function adicionarSaldo() {
    let valorSaldo = Number(document.getElementById('valorSaldo').value);

    if (valorSaldo >= 30) {
        alert('Saldo carregado');
        let saldoElement = document.getElementById('saldo');
        let saldoAtual = Number(saldoElement.textContent.replace('R$', '').replace(',', '.'));
        let novoSaldo = saldoAtual + valorSaldo;
        saldoElement.textContent = 'R$ ' + novoSaldo.toFixed(2).replace('.', ',');
        document.getElementById('campoSaldo').style.display = 'none';
        document.getElementById('valorSaldo').value = '';
    } else {
        alert('Por favor, insira um valor de no mínimo R$ 30,00.');
    }
}