# Instalación como Servicio Windows 

Se podrán ejecutar los scripts de Node.js como servicios de Windows.
Los pasos para instalar un servicio son:
1 Extraer la carpeta NodeWinService
2 Ejecutar cmd como Administrador y posicionarse en la raíz de la carpeta NodeWinService
3 Ejecutar node install.js
4 Selecciona la acción que deseas ingresar.

<img :src="$withBase('/img/16.png')" class="center">

5 Ingresar Nombre de Servicio (Sin espacios)
6 Ingresar Descripción del servicio
7 Ingresar Ruta absoluta de Servidor Node referenciando el archivo app.js (ejemplo: C:\Node\BTOnline\app.js)
8 Confirmar la acción con S

Esto proporciona un nombre y descripción al script de Node.js que debe ejecutarse como servicio. Al 
ejecutar esto, el script será visible desde la utilidad de Servicios de Windows, donde se podrá iniciar 
y detener el mismo.

<img :src="$withBase('/img/17.png')" class="center">