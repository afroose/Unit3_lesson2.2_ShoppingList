// 1 - add single state object - store shopping list

var state = {
    items: []
};

// 2 - add function to modify the state = store items added

var addItem = function(state, addedItem) {
    state.items.push(addedItem);
}

// 3 - add function to render the state = add element to DOM

var renderList = function(state, element){ // element = DOM element that will store the new construct
    var itemsHTML = state.items.map(function(newItem) {    // map() = new array
        return '<li><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle"><span class="button-label">check</span></button>' +
        '<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'

    });
    // insert constructed items
    element.html(itemsHTML); // overwrite element existing html with itemsHTML
}

// 4 - Event Listener(s) to capture the added element, then create element (call addItem and renderList)
//     Use jQuery - check form class for submit

    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault(); // do not submit yet
        // add triggered functions
        addItem(state, $('#shopping-list-entry').val());
        renderList(state,$('.shopping-list'));
        //alert("test");
    });

