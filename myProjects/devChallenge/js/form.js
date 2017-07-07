function ajaxsend_form(id) {
    var msg = $("#form"+id).serialize();
    var delay_popup = 0;
    var faults = $('#form'+id+' input').filter(function() {
        return $(this).data('required') && $(this).val() === "";
    }).css({"border-bottom-color": "red"});
    if(faults.length) {
        return false;
    }
	else
	{
    // $.ajax({
    //     type: "POST",
    //     url: "php/mail.php",
    //     data: msg,
    //     success: function(data) {
    //         $("#form"+id)[0].reset();
    //     },
    //     error:  function(xhr, str){
    //         alert("Возникла ошибка!");
    //     }
    // });
    }
}

jQuery.fn.notExists = function() {
    return $(this).length == 0;
}