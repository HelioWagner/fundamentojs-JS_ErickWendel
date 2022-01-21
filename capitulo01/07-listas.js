const minhaLista = []
const minhaListaDeTarefas = [
    'Manda email',
    'coloca comida para o dog',
    'limpa o quarto'
]

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[2])
console.log(minhaListaDeTarefas[4])

//quantidade de linhas no arrqy
console.log(minhaListaDeTarefas.length)

//adicionar item no array push sempre adiciona no final
minhaListaDeTarefas.push('formatar computador')
console.log(minhaListaDeTarefas)

//remover ultimo da lista
const ultimo = minhaListaDeTarefas.pop()
console.log(ultimo,minhaListaDeTarefas)

//remover o primeiro da lista
const primeiro = minhaListaDeTarefas.shift()
console.log(primeiro,minhaListaDeTarefas)

//remover um item espefifico a part de um indice
minhaListaDeTarefas.splice(2,1)
console.log(minhaListaDeTarefas)

//verificar se é array da forma correta
console.log(Array.isArray(itens))


//ordenar
const numeros = [3,2,1,0]
console.log(numeros.sort())