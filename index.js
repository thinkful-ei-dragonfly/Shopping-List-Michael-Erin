'use strict';

function handleSubmit() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let entry = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    $('.shopping-list').append(`
      <li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  });
}

function checkItem() {
  $('.shopping-item-toggle').click(event => {
    console.log($(this).parent().parent().find('.shopping-item').attr('class'));//.addClass('shopping-item__checked');
  });
}

$(handleSubmit);
$(checkItem);
