// 1 - add single state object - store shopping list

var state = {
    items: ['bread','eggs']
};

// 2 - add function to modify the state = store items added

var addItem = function(state, addedItem) {
    state.items.push(addedItem);
}

// 3 - add function to render the state = add element to DOM

var renderList = function(state, element){ // element = DOM element that will store the new construct
    var itemsHTML = state.items.map(function(newItem) {    // map() = new array
        return '<li id="' + newItem + '"><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle"><span class="button-label">check</span></button>' +
        '<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'

    });
    // insert constructed items
    element.html(itemsHTML); // overwrite element existing html with itemsHTML
}

$(function(){

// 4 - Event Listener(s) to capture the added element, then create element (call addItem and renderList)
//     Use jQuery - check form class for submit

    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault(); // do not submit yet
        // add triggered functions
        addItem(state, $('#shopping-list-entry').val());
        renderList(state,$('.shopping-list'));
         //alert("test");
    });

// 5 - add event listener to existing item (Shopping-list)  to handle deletion (click on new button .shopping-item-delete)

    $('.shopping-list').on('click', '.shopping-item-delete', function(event){ // NB remember .shopping-item-delete is not jquery item - single quotes only
        //event.stopPropagation();
        var itemToDelete = $(this).closest('li').attr('id');
        //alert($(this).closest('li').attr('id'));
        //alert(itemToDelete);
        //alert($.inArray(itemToDelete, state.items));
        this.closest('li').remove();
        state.items.splice($.inArray(itemToDelete, state.items),1); //use splice and inArray to retrieve index by id  (for ex. "bread") and remove item from object state
        
    });

// 6 - add event listener to existing item (Shopping-list)  to handle "checking" (click on new button .shopping-item-toggle) - add class .shopping-item__checked

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){ // NB remember .shopping-item-toggle is not jquery item - single quotes only 
        $(this).closest('li').addClass('shopping-item__checked');    
    });

    renderList(state,$('.shopping-list'));
})

