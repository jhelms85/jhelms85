document.addEventListener('DOMContentLoaded', function() {
    $.ajax({
        url: 'components/footer.json',
        dataType: 'json',
        success: function(data) {
            renderFooter(data);
        },
        error: function(xhr, status, error) {
            console.error('Error loading footer:', error);
        }
    });
});

function renderFooter(data) {
    var footerHTML = '<nav class="link-bar">';
    data.links.forEach(function(link) {
        footerHTML += '<a href="' + link.url + '">' + link.text + '</a> || ';
    });
    footerHTML += '</nav>';

    footerHTML += '<p>Designed by: <a href="' + data.designedBy.url + '">' + data.designedBy.name + '</a></p>';

    footerHTML += '<p>';
    data.certifications.forEach(function(cert) {
        footerHTML += '<a href="' + cert.url + '">' + cert.text + '</a>, ';
    });
    footerHTML = footerHTML.slice(0, -2);
    footerHTML += '</p>';

    footerHTML += '<p><strong>"' + data.disclaimer + '"</strong></p>';

    data.validators.forEach(function(validator) {
        footerHTML += '<a id="' + validator.id + '" style="text-decoration: none;" href="' + validator.url + '">';
        footerHTML += '<img style="border:0;width:88px;height:31px" src="' + validator.imgSrc + '" alt="' + validator.imgAlt + '">';
        footerHTML += '</a>';

        var validationLink = document.getElementById(validator.id);
        if (validationLink) {
            validationLink.setAttribute("href", validator.url + "?uri=" + encodeURIComponent(location.href));
        } else {
            console.error("Element with ID '" + validator.id + "' not found.");
        }
    });

    $('#footer').html(footerHTML);
}
