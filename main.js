var sueldo, horas, total;

sueldo=prompt("Por favor, ingresa un sueldo $ ", " ");
sueldo=parseInt(sueldo);
horas= prompt("Por favor, ingresa un Nro de horas ", " ");
horas=parseInt(horas);

total= sueldo * horas;
total= parseInt(total); 
alert("El pago total es " + total + "$");


