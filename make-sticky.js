best_width = '' + $('.data').width() + 'px';

// Handle the nav bar
var tabs = $('.js-pull-request-tabs');
tabs.sticky({topSpacing: 0});
tabs.on('sticky-start', function() {
    $(this).css('z-index', 1);
    $(this).css('top', '-15px');
    $(this).css('width', best_width);
    $(this).css('background-color', 'white');
});
tabs.on('sticky-end', function() {
    $(this).css('width', '');
});



// Handle file names
sticks = $('.meta').sticky({topSpacing:38});
top_z = 1;

sticks.on('sticky-start', function() {
    $(this).css('width', best_width);
    $(this).css('z-index', top_z++);
})

sticks.on('sticky-end', function() {
    $(this).css('width', '');
})
