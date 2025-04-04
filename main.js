let botao = document.getElementById('btn');
let tarefa = document.getElementById('input-tarefa');
let lista = document.getElementById('list');

botao.addEventListener('click', function() {
    let paragrafo = document.createElement('p');
    paragrafo.innerHTML = tarefa.value;
    paragrafo.classList.add('estilo-paragrafo');
    lista.appendChild(paragrafo);
    paragrafo.addEventListener('click', function() {
        paragrafo.style.textDecoration = 'line-through';
    });
    paragrafo.addEventListener('dblclick', function() {
        lista.removeChild(paragrafo);
    });
})

