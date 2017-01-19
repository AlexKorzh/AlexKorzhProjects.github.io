#!/usr/bin/php
<?php
 
//Секретний ключ інтернет-магазину (настроюється в кабінеті)
 
$skey = "7c4f317b65345a6732373970507646544c6c35755037696a6b7165";
 
// Функція , яка повертає результат в Єдину касу
 
function print_answer($result, $description)
{
  print "WMI_RESULT=" . strtoupper($result) . "&";
  print "WMI_DESCRIPTION=" .urlencode($description);
  exit();
}
 
// Перевірка наявності необхідних параметрів в POST- запиті
 
if (!isset($_POST["WMI_SIGNATURE"]))
  print_answer("Retry", "Відсутня параметр WMI_SIGNATURE");
 
if (!isset($_POST["WMI_PAYMENT_NO"]))
  print_answer("Retry", "Відсутня параметр WMI_PAYMENT_NO");
 
if (!isset($_POST["WMI_ORDER_STATE"]))
  print_answer("Retry", "Відсутня параметр WMI_ORDER_STATE");
 
// Витяг всіх параметрів POST-запиту, крім WMI_SIGNATURE
 
foreach($_POST as $name => $value)
{
  if ($name !== "WMI_SIGNATURE") $params[$name] = $value;
}
 
// Сортування масиву за іменами ключів в порядку зростання
// І формування повідомлення , шляхом об'єднання значень форми
 
uksort($params, "strcasecmp"); $values = "";
 
foreach($params as $name => $value)
{
  //Конвертація з поточного кодування (UTF-8)
  //необхідна тільки якщо кодування магазину відмінна від Windows-1251
  $value = iconv("utf-8", "windows-1251", $value);
  $values .= $value;
}
 
// Формування підписи для порівняння її з параметром WMI_SIGNATURE
 
$signature = base64_encode(pack("H*", md5($values . $skey)));
 
//Порівняння отриманої підпису з підписом W1
 
if ($signature == $_POST["WMI_SIGNATURE"])
{
  if (strtoupper($_POST["WMI_ORDER_STATE"]) == "ACCEPTED")
  {
    // TODO: Помітити замовлення, як «Сплачений» в системі обліку магазину
 
    print_answer ("Ok", "Замовлення #".$ _POST [" WMI_PAYMENT_NO "]."сплачена!");
  }
  else
  {
    // Сталося щось дивне, прийшло невідоме стан замовлення
 
    print_answer("Retry", "Неправильне стан ". $_POST["WMI_ORDER_STATE"]);
  }
}
else
{
  // Підпис не збігається, можливо ви поміняли настройки Інтернет-магазину
 
  print_answer("Retry", "Невірна підпис ". $_POST["WMI_SIGNATURE"]);
}
 
?>