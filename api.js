const url = "https://randomuser.me/api/?results=10";
const ul = document.getElementById('authors'); // url da api
function createNode(element){ // função para criar um item
    return document.createElement(element); // resposta da função (item unico)
}

function append(parent,el){ // função para adicionar um elemento na lista
    return parent.appendChild(el); // adicionando o elemento no superior

}
fetch(url) // pegando o dado da url
    .then((res) =>res.json()) // falando que o dado é um json
    .then(function(data){ // criando uma função para salvar os dados
        console.log('dados da requisição: ',data); // exibindo no console os dadis para salvar os dados
        let authors = data.results; //salvando apenas os resultados
        console.log(authors); // exibindo o dado dos autores no console
        return authors.map(function(author){
            let li = createNode('li'); // chamando a função para criar um elemento da lista
            let img = createNode('img'); // chamando a função para criar um elemento da lista
            let span = createNode('span'); // chamando a função para criar um elemento da lista
            img.src = author.picture.medium; // criando a imagem com base na lista
            span.innerHTML = `${author.name.first} ${author.name.last}`; // misturando 2 dados
            append(li,img);
            append(li,span);
            append(ul,li)
        })
    })
    .catch(function(error){ // caso tenha um erro
        console.log(error); // console do erro
    });