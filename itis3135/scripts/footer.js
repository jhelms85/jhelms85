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
    
    data.links.forEach(function(link, index) {
        if (index !== 0) {
            footerHTML += ' || ';
        }
        footerHTML += '<a href="' + link.url + '">' + link.text + '</a>';
    });
    
    footerHTML += '</nav>';

    footerHTML += '<p>Designed by: <a href="' + data.designedBy.url + '">' + data.designedBy.name + '</a>';
    
    var certificationsText = data.certifications.map(function(cert) {
        return '<a href="' + cert.url + '">' + cert.text + '</a>';
    }).join(", ");
    
    footerHTML += ' ©2024, certified in ' + certificationsText + '.</p>';

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

    $('#removeCSSButton').click(function() {
        if (confirm("Are you sure you would like to remove styling? This is useful if you are experiencing rare compatibility issues. Refresh the page to restore styling.")) {
            document.querySelectorAll('link[rel=stylesheet]').forEach(function(e) {
                e.setAttribute('href', '');
            });
        }
    });
}

