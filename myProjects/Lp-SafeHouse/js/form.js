function ajaxsend_form(id) { //Ajax отправка формы
    var msg = $("#form"+id).serialize();
    var delay_popup = 0;
    var faults = $('#form'+id+' input').filter(function() {
    return $(this).data('required') && $(this).val() === "";
    }).css({"box-shadow": "inset 0px 0px 10px rgba(255,0,0,1)"}); // выделяем это поле красным
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
                if(id == 1){
                    setTimeout("document.getElementById('parent_popup').style.display='block'", delay_popup);
                }
                if(id == 2){
                    setTimeout("document.getElementById('parent_popup2').style.display='block'", delay_popup);
                }
                if(id == 21){
                    setTimeout("document.getElementById('parent_popup3').style.display='block'", delay_popup);
                }
            
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