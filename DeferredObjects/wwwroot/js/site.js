$(document).ready(function () {
    var googlePromise = getGooglePromise();
    var elComercioPromise = getElComercioPromise();
    var laRepublicaPromise = getLaRepublicaPromise();
    var youtubePromise = getYoutubePromise();

    $.when(googlePromise, elComercioPromise).done(function (googleResult, elComercioResult) {
        $('#google').html(googleResult);
        $('#el-comercio').html(elComercioResult);
    }).fail(function () {
        alert('Error');
    });

    $.when(youtubePromise, laRepublicaPromise).done(function (youtubeResult, laRepublicaResult) {
        $('#youtube').html(youtubeResult);
        $('#la-republica').html(laRepublicaResult);
    }).fail(function () {
        alert('Error');
    });
});

function getGooglePromise() {
    var dfd = $.Deferred();

    var timer = setTimeout(function () {
        clearTimeout(timer);
        $.get('http://localhost:1900/Home/Google', function (data) {
            dfd.resolve(data);
        }).fail(function () {
            dfd.reject();
        });
    }, 1000);

    return dfd.promise();
}

function getElComercioPromise() {
    var dfd = $.Deferred();

    var timer = setTimeout(function () {
        clearTimeout(timer);
        $.get('http://localhost:1900/Home/ElComercio', function (data) {
            dfd.resolve(data);
        }).fail(function () {
            dfd.reject();
        });
    }, 2000);

    return dfd.promise();
}

function getLaRepublicaPromise() {
    var dfd = $.Deferred();

    var timer = setTimeout(function () {
        clearTimeout(timer);
        $.get('http://localhost:1900/Home/LaRepublica', function (data) {
            dfd.resolve(data);
        }).fail(function () {
            dfd.reject();
        });
    }, 2000);

    return dfd.promise();
}

function getYoutubePromise() {
    var dfd = $.Deferred();

    var timer = setTimeout(function () {
        clearTimeout(timer);
        $.get('http://localhost:1900/Home/Youtube', function (data) {
            dfd.resolve(data);
        }).fail(function () {
            dfd.reject();
        });
    }, 3000);

    return dfd.promise();
}