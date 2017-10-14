window.onload = function() {
    init();
}

function init() {
    let form =  document.getElementById('item-form');

    form.addEventListener("submit", handleItemForm);
}

function handleItemForm(e) {
    if(e.preventDefault()) {
        e.preventDefault();
    }

    createListItem();

    return false;
}

function createListItem(){
    // Get the list item values
    let itemName = document.getElementById("item-name");
    let amount = document.getElementById("amount");
    let id = String(Math.random());

    //Create the list item itself on the DOM 
    let itemHtml = createListItemHtml(itemName.value, amount.value, id);
    let itemList = document.getElementById("shopping-list");
    itemList.insertAdjacentHTML("afterend", itemHtml);

    // Enable the delete button
    setDeleteButton(id);
}

function setDeleteButton(id) {
    let delButton = document.getElementById(id);
    delButton.addEventListener('click', () => {
        removeListItem(id);
    });
}

function createListItemHtml(itemName, amount, id) {
    return `<li id="item${id}">
                ${itemName} - ${amount} 
                <button type="button" id='${id}'>Delete</button>
            </li>`
}

function removeListItem(id) {
    var listItem = document.getElementById('item'+id);
    listItem.parentNode.removeChild(listItem);
}
