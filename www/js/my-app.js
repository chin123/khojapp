// Initialize app
var myApp = new Framework7({
    swipePanel: 'left'
});
var novisit = 0;

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    material: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'schoolmap') {
    
	    $('img[usemap]').rwdImageMaps();
        // Following code will be executed for page with data-page attribute equal to "about"
        if (novisit == 0) {
            myApp.alert('You can touch a room to see the exhibits present!');
        }
        novisit++;
    }
    if (page.name == 'searchkhoj') {
        var mySearchbar = myApp.searchbar('.searchbar', {
            searchList: '.list-block-search',
            searchIn: '.item-title'
        }); 
          
    }
})