<?php
 
    //Секретный ключ інтернет-магазин
    $key = "7c4f317b65345a6732373970507646544c6c35755037696a6b7165";

    $number = microtime(true);
 
    $fields = array(); 
 
    // Добавление полей формы в ассоциативный массив
    $fields["WMI_MERCHANT_ID"]    = "138243077619";
    $fields["WMI_PAYMENT_AMOUNT"] = "900.00";
    $fields["WMI_CURRENCY_ID"]    = "980";
    $fields["WMI_PAYMENT_NO"]     = $number;
    $fields["WMI_DESCRIPTION"]    = "BASE64:".base64_encode("Payment for order in youniverse-whitening.com");
    $fields["WMI_EXPIRED_DATE"]   = "2029-12-31T23:59:59";
    $fields["WMI_SUCCESS_URL"]    = "http://youniverse-whitening.com/";
    $fields["WMI_FAIL_URL"]       = "http://youniverse-whitening.com/php/fail.php";
    //$fields["MyShopParam1"]       = "Value1"; // Дополнительные параметры
    //$fields["MyShopParam2"]       = "Value2"; // интернет-магазина тоже участвуют
    //$fields["MyShopParam3"]       = "Value3"; // при формировании подписи!
    //Если требуется задать только определенные способы оплаты, раскоментируйте данную строку и перечислите требуемые способы оплаты.
    //$fields["WMI_PTENABLED"]      = array("UnistreamRUB", "SberbankRUB", "RussianPostRUB");
 
    //Сортировка значений внутри полей
    foreach($fields as $name => $val) 
    {
        if (is_array($val))
        {
            usort($val, "strcasecmp");
            $fields[$name] = $val;
        }
    }
 
    // Формирование сообщения, путем объединения значений формы, 
    // отсортированных по именам ключей в порядке возрастания.
    uksort($fields, "strcasecmp");
    $fieldValues = "";
 
    foreach($fields as $value) 
    {
        if(is_array($value))
            foreach($value as $v)
            {
                //Конвертация из текущей кодировки (UTF-8)
                //необходима только если кодировка магазина отлична от Windows-1251
                $v = iconv("utf-8", "windows-1251", $v);
                $fieldValues .= $v;
            }
        else
        {
            //Конвертация из текущей кодировки (UTF-8)
            //необходима только если кодировка магазина отлична от Windows-1251
            $value = iconv("utf-8", "windows-1251", $value);
            $fieldValues .= $value;
        }
    }
 
    // Формирование значения параметра WMI_SIGNATURE, путем 
    // вычисления отпечатка, сформированного выше сообщения, 
    // по алгоритму MD5 и представление его в Base64
 
    $signature = base64_encode(pack("H*", md5($fieldValues . $key)));
 
    //Добавление параметра WMI_SIGNATURE в словарь параметров формы
 
    $fields["WMI_SIGNATURE"] = $signature;
 
    // Формирование HTML-кода платежной формы
 
    print "<form action='https://wl.walletone.com/checkout/checkout/Index' method='POST'>";
 
    foreach($fields as $key => $val)
    {
        if(is_array($val))
            foreach($val as $value)
            {
                print "$key: <input type='text' name='$key' value='$value'/>";
            }
        else     
            print "$key: <input type='text' name='$key' value='$val'/>";
    }
 
    print "<input type='submit'/></form>";
 
?>