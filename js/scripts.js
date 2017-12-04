$(document).ready(function () {
    var quote;
    var author;

    function getRandomQuote() {
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('.quote-text').text(quote);
                if (author) {
                    $('.quote-author').text('said by ' + author);
                } else {
                    $('.quote-author').text(' unknown');
                }
            }
        });
    }
    getRandomQuote();

    $('#get-quote').on('click', function (event) {
        event.preventDefault();
        getRandomQuote();
    });

    $('#tweet').on('click', function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '- ' + author));
    });
});
