// $('.show-filters').on('click', function(){

//    $('.filters-list').toggle(300)
// }) 


    // 1- when the nav is expanded, collapse it.
    // 2- change text of show filters to "show filters"
    // 3- otherwise, if the nav is collapsed, expand it. 
    // 4- change text of show filters to "hide filters"

// test if the elements are displaying in the screen or not =
// $('filters-list').is(':visible')
// console'a yazdiginda true ya da false veriyor

// if (conditions you want to test){


// }

//noktayi unutmusum chatgpt buldu

/* $('.show-filters').on('click', function(){

if ($('filters-list').is(':visible')){
    $('.filters-list').slideUp()
     $('.show-filters').text('Show filters')
} else{
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
}

})

*/

/* $('.show-filters').on('click', function () {
  
    // check what is currently happening
    if ($('.filters-list').is(':visible')) {
      // if filters are visible, hide them and change text
      $('.filters-list').slideUp()
      $('.show-filters').text('Show filters')
    } else {
      // if filters are hidden, show them and change text
      $('.filters-list').slideDown()
      $('.show-filters').text('Hide filters')
    }
  
  });

  */


$('.show-filters').on('click', function(){

if ($('.filters-list').is(':visible')){
    $('.filters-list').slideUp()
     $('.show-filters').text('Show filters')
} else{
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
}

})
