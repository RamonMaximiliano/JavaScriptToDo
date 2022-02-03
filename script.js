function addItem(){

    let item = document.querySelector("input.inputText").value

/*     Normal replace =   let endItem = item.replace(" ","")
       Multiple characters replace, separa por pipes cada coisa a ser replaced =  let endItem = item.replace(/ |  |   |    |     |      /g,''); 
 */

    let endItem = item.replace(/ |  |   |    |     |      |       |        |         |          /g,''); 
    console.log(endItem)

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
}

function excludeItem(event){
    //o this.id já foi incluido direto como  parametro na hora de chamar função
    let itemExclude = document.querySelector(`[data-id=${event}]`)
    console.log(event)
    itemExclude.remove()

}

//o querySelector somente aceita characters como identifiers, ele não aceita numeros no inicio, a class tem que começar com um character não numero 

