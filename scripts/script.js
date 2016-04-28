$(document).ready(function () {
    function init() {
        if (localStorage["username"]) {
            $('#name').val(localStorage["username"]);
        }
        if (localStorage["surname"]) {
            $('#surname').val(localStorage["surname"]);
        }
        if (localStorage["birthday"]) {
            $('#date').val(localStorage["birthday"]);
        }
        if (localStorage["tel_number"]) {
            $('#tel').val(localStorage["tel_number"]);
        }
        if (localStorage["100m"]) {
            $('#100m').val(localStorage["100m"]);
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"]);
        }
        if (localStorage["web_url"]) {
            $('#web_url').val(localStorage["web_url"]);
        }
    }
        init();
});

$('.stored').keyup(function () 
    {localStorage[$(this).attr('name')] = $(this).val();
});

$('#localStorageTest').submit(function() 
    {localStorage.clear();
});
