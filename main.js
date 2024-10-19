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

// Return false because Show filters link href=# is making the website jump when we click smt
// return false bloks the default action
    return false

})



// trying if the data attribute works here data-filters
// it's weird that without return false  - the console in the chrome dev tools
// didn't display "it works!" but after I wrote return false
// which is for blocking the href to go to the page in any link for example all.html
// return false blocks the default action, this behaviour and it also enables console 
// to print "it works"


//$('.filters-list a').on('click', function(){
//console.log('it works!')
//return false
//})


// instead of "it works!" we write this 
// which gives us entire <a> line with all the details
// when we click bananas link on the website chrome dev console
// prints <a href="bandanas.html" data-filter=".bandanas">Bandanas</a>

//$('.filters-list a').on('click', function(){

//   console.log(this)
//    return false
    
//    })

// next step would be, selecting the data-filter in each and every a tag
// with some modification
// now console only prints .bags .bandanas - basically what we had written
// to ...data-filters =".bandanas"> in html


//$('.filters-list a').on('click', function(){

//    console.log($(this).data('filter'))
//    return false
    
//    })

// exact same thing as above but smarter 
// because we paste the value to a variable and then print it to the console

$('.filters-list a').on('click', function(){

    var filter = $(this).attr('data-filter')

    console.log(filter)

    // 1- hide all the products
    // 2- show the products with a particular filter 
    // when we say $('.bags).show() - it will show all the products with bags class name
    // but we will use our variable filter

    $('.product').hide()
    $(filter).show()

    // we want to grab the clicked link- The way we do it is $(this)
    // below adds a selected class to the filter link we just clicked on
    // but this makes every filter link on selected state not removing the
    // selected state from the passive links- we need to toggle off the others
    // so just before we add a class name called 'selected' we are going to grab
    // all the '.filters-list a' and remove the class name called 'selected'

   // $(this).addClass('selected')

    $('.filters-list a').removeClass('selected')
    $(this).addClass('selected')


    return false
    
    })