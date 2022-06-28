# Ejecución de servicios

Luego de tener levantado el servidor node y el swagger desde un navegador se podrá visualizar 
el swagger en el cual ya se pueden hacer los llamados. En el mismo se podrán ejecutar llamados
POST, GET, PUT Y DELETE.
Abra un navegador web e ingrese lo siguiente en la barra de direcciones:
(servidor:xxxx corresponde al host y puerto donde esta levantado el server)

http://servidor:xxxx/api-docs


<img :src="$withBase('/img/12.png')" class="center">

Independientemente de cómo arme el BTServicesExposer por defecto los archivos json que se 
encuentran en \BTExposer\swagger_routes en base a los wsdl de los servicios, los parámetros se 
podrán modificar (ya sea el método, como los parámetros).


* Para modificar el método, se podrá a través del parámetro method. Las opciones validas son POST, GET, PUT o DELETE.

* Para agregar parámetros en la url del llamado se deben agregar dos puntos “:” en el caso de path y corchetes “{“”}” en el caso de path_swagger de la siguiente forma:

**
    "path": "/api/Actualizar/:clienteUId"
    "path_swagger": "/api/Actualizar/{clienteUId}" 
**

Si fueran más de un parámetro:

**
    "path": "/api/Actualizar/:clienteUId/:personaUId”
    "path_swagger": "/api/Actualizar/{clienteUId}/{personaUId}”
**

En caso de agregar estos parámetros a la ruta de acceso se tiene que agregar los mismos a 
parameters de la siguiente forma:

``` json
"parameters": [
 {
 "name": "clienteUId",
 "in": "path",
 "required": true,
 "type": "integer",
 "format": "int64"
 } ,
 {
 "name": "personaUId",
 "in": "path",
 "required": true,
 "type": "integer",
 "format": "int64"
 }
]

```

<img :src="$withBase('/img/13.png')" class="center">

Luego para ejecutar los llamados desde el Swagger, se cliquea en la opción Try it out y se
agregan los Parameters y Request body en caso de que sea necesario. 



<img :src="$withBase('/img/14.png')" class="center">

<img :src="$withBase('/img/15.png')" class="center">


