$( document ).ready(function() {
  const spacerr = " ";
  const itemsadded = []
  let book_name = document.getElementById('bookName');
  let summary = document.getElementById('bookSummary');
  let author = document.getElementById('bookAuthor');
  let genre = document.getElementById('bookGenre');
  let second_genre = document.getElementById('bookSubGenre');
  let select_book = document.getElementById('testc');
  let info_added = document.getElementById('tester');
  let output_name = document.getElementById('outputName');
  let output_author = document.getElementById('outputAuthor');
  let output_genre = document.getElementById('outputGenre');
  let output_subgenre = document.getElementById('outputSubGenre');
  let output_summary = document.getElementById('outputSummary');
  let cover_img = $('#picture');
  let change_output = $('#changeOutput')
  let all_fields = $(".collector");
  let display_info = $('#testOutput');
  let default_value = "Enter Details";
  let search_input = $('#testSearch');

  $("#bookName").keypress(function(e) {
    let option = document.createElement("OPTION");
    if (e.which == 13) {
      if (book_name.value != '') {
        option.text = book_name.value;
        localStorage.setItem(option.text, [option.text, spacerr+author.value,
           spacerr+summary.value, spacerr+genre.value, spacerr+second_genre.value]);
        select_book.add(option);
        itemsadded.push(option.text);
        info_added.innerHTML = itemsadded;
        alert('"' + book_name.value + '"' + " has been added to the list.");
      };
      blank = "";
      $(".collector").val(blank);
      console.log(all_fields.val());
    };
  });

  change_output.click(function changer() {
    let select_book = document.getElementById('testc');
    let display_info = document.getElementById('testOutput');
    let info_added = document.getElementById('tester');
    let x = select_book.selectedIndex;
    if(localStorage.getItem(select_book[x].text)) {
      console.log(select_book[x].text)
      display_info.value = localStorage.getItem(select_book[x].text);
      console.log(localStorage.getItem(select_book[x].text))
      info_added.innerHTML = localStorage.getItem(select_book[x].text);
      output_name.innerHTML = localStorage.getItem(select_book[x][2].text);
    };
  });

  $('#bookName').focus($('#bookName'), function() {
    $('#bookName').animate({width: "220", height: "21"}, 500, "linear");
  });

  $('#bookName').focusout($('#bookName'), function() {
    $('#bookName').animate({width: "170", height: "16"}, 500, "linear");
  });

  $('#bookSummary').focus($('#bookSummary'), function() {
    $('#bookSummary').animate({width: "220", height: "21"}, 500, "linear");
  });

  $('#bookSummary').focusout($('#bookSummary'), function() {
    $('#bookSummary').animate({width: "170", height: "16"}, 500, "linear");
  });

  $('#bookAuthor').focus($('#bookAuthor'), function() {
    $('#bookAuthor').animate({width: "220", height: "21"}, 500, "linear");
  });

  $('#bookAuthor').focusout($('#bookAuthor'), function() {
    $('#bookAuthor').animate({width: "170", height: "16"}, 500, "linear");
  });

  $('#bookGenre').focus($('#bookGenre'), function() {
    $('#bookGenre').animate({width: "220", height: "21"}, 500, "linear");
  });

  $('#bookGenre').focusout($('#bookGenre'), function() {
    $('#bookGenre').animate({width: "170", height: "16"}, 500, "linear");
  });

  $('#bookSubGenre').focus($('#bookSubGenre'), function() {
    $('#bookSubGenre').animate({width: "220", height: "21"}, 500, "linear");
  });

  $('#bookSubGenre').focusout($('#bookSubGenre'), function() {
    $('#bookSubGenre').animate({width: "170", height: "16"}, 500, "linear");
  });
});
