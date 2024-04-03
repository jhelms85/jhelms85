$(document).ready(function() {
    $.ajax({
        url: 'components/header.json',
        dataType: 'json',
        success: function(data) {
            renderHeader(data);
        },
        error: function(xhr, status, error) {
            console.error('Error loading header:', error);
        }
    });
});

function renderHeader(data) {
    var headerHTML = '<h1>' + data.title + '</h1>';
    headerHTML += '<nav>';

    // Add links with dividers except for the first one
    data.links.forEach(function(link, index) {
        if (index !== 0) {
            headerHTML += ' || '; // Add divider before the link
        }
        headerHTML += '<a href="' + link.url + '">' + link.text + '</a>';
    });

    headerHTML += '</nav>';
    headerHTML += '<nav class="secondary-navigation">';

    // Add secondary links with dividers except for the first one
    data.secondaryLinks.forEach(function(link, index) {
        if (index !== 0) {
            headerHTML += ' || '; // Add divider before the link
        }
        headerHTML += '<a href="' + link.url + '">' + link.text + '</a>';
    });

    headerHTML += '</nav>';
    $('#header').html(headerHTML);
}
