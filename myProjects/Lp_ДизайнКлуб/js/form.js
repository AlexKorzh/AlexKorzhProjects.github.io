function ajaxsend_form(id) { //Ajax отправка формы
    var msg = $("#form"+id).serialize();
    var delay_popup = 0;
    var faults = $('#form'+id+' input').filter(function() {
    return $(this).data('required') && $(this).val() === "";
    }).css({"border-color": "#ff8787"}); // выделяем это поле красным
    if(faults.length) {
        return false;
    }
	else
	{
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: msg,
        success: function(data) {
            $('#thanks-popup').show();
            $(".dialogs").show();
            $(".dialogs").animate({"opacity":1}, 200, function() {
                $('#thanks-popup').addClass('active');
            });
            $("#form"+id)[0].reset();
        },
        error:  function(xhr, str){
            alert("Возникла ошибка!");
        }
    });
    }
}

jQuery.fn.notExists = function() { //Проверка на существование элемента
    return $(this).length == 0;
}