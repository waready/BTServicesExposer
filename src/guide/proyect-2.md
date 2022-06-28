# Instrucciones de instalación 

##  Paso 1 – Copiar carpeta con la instalación

Copiar la carpeta recibida en algún directorio donde desee instalar la aplicación.
Por ejemplo, en `C:\BTExposer`.

## Paso 2 – Instalar dependencias

Instalar todas las dependencias que se necesitan. Para eso desde consola, estando en la carpeta de instalación BTExposer, ejecutar el siguiente comando:

    npm install

De forma predeterminada, npm install instalará todos los módulos enumerados como 
dependencias en package.json.

## Paso 3 - Iniciar aplicación Node

    node app.js 

## Paso 4 - Iniciar aplicación Swagger

Para eso desde consola estando en la carpeta de instalación BTExposer, ejecutar el siguiente comando:

    cd swagger 
    node swagger.js

## Paso 5 - Generar endpoints

    node BTExposer.js wsdl_para_generar\odwsbt_BTConfiguracionBantotal_v1.xml

Para generar los endpoint se debe guardar el archivo xml del wsdl en la siguiente ruta `\BTExposer\wsdl_para_generar` y los json generados quedaran en `\BTExposer\swagger_routes`.
Cada vez que se generen nuevos endpoints hay que volver a levantar tanto el node como el swagger

<img :src="$withBase('/img/02.png')" class="center">





