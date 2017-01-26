function ajaxsend_form(id) { //Ajax отправка формы
    var msg = $("#form"+id).serialize();
    var delay_popup = 0;
    var faults = $('#form'+id+' input').filter(function() {
    return $(this).data('required') && $(this).val() === "";
    }).css({"box-shadow": "0px 0px 15px rgba(255,0,0,1)"}); // выделяем это поле красным
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
            setTimeout("document.getElementById('parent_popup').style.display='block'", delay_popup);
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