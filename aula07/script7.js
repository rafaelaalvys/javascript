const lista = document.getElementById("list");

function adicionarItem() {
    // criar um novo elemento de "li" (item de lista) e o armazena na variável "novaLi"
    const novaLi = document.createElement("li");

    // Define o texto do novo item, este texto será exibido no navegador como conteúdo da nova "li"
    novaLi.textContent = "Novo item";

    //adiciona o novo item (novaLi) como o último filho do elemento 'lista, isso faz com que o item seja exibido corretamente dentro da UL(lista).
    //O appendChild acrescenta ao elemento selecionado, o que for declarado na sequencia entre parenteses (appendChild(NovaLi) ).
    lista.appendChild(novaLi);
}

function removerItem() {
    //seleciona o último elemento filho dentro de 'lista e o armazena na variável 'ultimo item'.
    //lastElementChild retorna o último elemento diretamente contido em "lista", que é o último item da lista
    const ultimoItem = lista.lastElementChild;

    //remove o último item (ultimoItem) dentro de "lista".
    //removeChild é um método que remove o elemento filho especificado.
    lista.removeChild(ultimoItem)
}