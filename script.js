let itemsArray = []

function addItem(){

    let item = document.querySelector("input.inputText").value

/*     Normal replace =   let endItem = item.replace(" ","")
       Multiple characters replace, separa por pipes cada coisa a ser replaced =  let endItem = item.replace(/ |  |   |    |     |      /g,''); 
 */

    if(item != ""){
       
    let endItem = item.replace(/ |  |   |    |     |      |       |        |         |          /g,''); 
    console.log(endItem)

    //validando se o item já existe no array
    let checkExists = itemsArray.indexOf(endItem)
    if(checkExists > -1){
        window.alert("This item already exists, provide another item")
    } else {

    //criando div do item
    let newItem = document.createElement("div")
    newItem.setAttribute("class", "newItem")
    newItem.setAttribute("data-id", endItem)

    //criando paragraph
    let newItemParagraph = document.createElement("p")
    newItemParagraph.setAttribute("class", "paragraph")
    let itemContent = document.createTextNode(item)
    newItemParagraph.appendChild(itemContent)
    
    //Adicionando o item ao HTML
    document.querySelector(".itemList").appendChild(newItem)

    document.querySelector(`[data-id=${endItem}]`).appendChild(newItemParagraph)

    let exclude = document.createElement("img")
    exclude.setAttribute("src", "./images/delete.png")
    exclude.setAttribute("class", "excludeButton")
    //é importante por o this.id como parametro na função já caso contrario não encontra o ID quando chama a função
    exclude.setAttribute("onclick", "excludeItem(this.id)")
    exclude.setAttribute("id", endItem)
    document.querySelector(`[data-id=${endItem}]`).appendChild(exclude)


    //adding new item to the array    
    itemsArray.push(endItem)
    }

} else {
    window.alert("We do not accept empty items in the list!")
}

console.log(itemsArray)
}

function excludeItem(event){
    //o this.id já foi incluido direto como  parametro na hora de chamar função
    let itemExclude = document.querySelector(`[data-id=${event}]`)
    console.log(event)
    itemExclude.remove()

    //remove item from the array
    /* array.splice(index,1)
    No splice o primeiro props é a posição no array que vai remover baseado no index, e o segundo props são quantos items ira remover
    Este splice method ta dizendo que na position do elemento index, remover 1 item, ou seja acaba deletando ele mesmo */

    let indexOfItem = itemsArray.indexOf(event)
    if (indexOfItem >-1){
        itemsArray.splice(indexOfItem,1)
}
console.log(itemsArray)
}

//o querySelector somente aceita characters como identifiers, ele não aceita numeros no inicio, a class tem que começar com um character não numero 

