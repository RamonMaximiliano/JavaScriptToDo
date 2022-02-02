function addItem(){

    let item = document.querySelector("input.inputText").value
    console.log(item)

    //criando div do item
    let newItem = document.createElement("div")
    newItem.setAttribute("class", "newItem")
    newItem.setAttribute("id", item)

    //criando paragraph
    let newItemParagraph = document.createElement("p")
    newItemParagraph.setAttribute("class", "paragraph")
    let itemContent = document.createTextNode(item)
    newItemParagraph.appendChild(itemContent)
    
    document.querySelector(".itemList").appendChild(newItem)

    document.querySelector(".newItem").appendChild(newItemParagraph)

    let exclude = document.createElement("img")
    exclude.setAttribute("src", "./images/delete.png")
    exclude.setAttribute("class", "excludeButton")
    document.querySelector(".newItem").appendChild(exclude)

    


}

// setar um Id baseado no texto, adicionar items baseados no id, e se o id já existir avisar



