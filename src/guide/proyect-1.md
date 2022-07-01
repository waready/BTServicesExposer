# Instrucciones de configuración 

Para usar BTServicesExposer lo primero que se tiene que hacer son algunas configuraciones en los 
siguientes archivos de configuración.

## Paso 1 – Configurar aplicación Node

Primero hay que configurar el archivo config.js que se encuentra en la ruta `\BTExposer\config\config.js.` 
En el mismo hay una sección btservices donde se podrá configura los 
servicios a ser utilizados. 

Los datos para ingresar son:

::: tip Nota
Los siguientes 5 parámetros se completan si se usa autenticación oauth2, de lo contario se pueden 
dejan como string vacío
:::

* **Canal**:  Nombre del canal. Identifica el canal o aplicación que utiliza el servicio
* **Requerimiento**: Requerimiento de los servicios
* **Usuario**: Nombre de usuario. Identifica el usuario de ejecución del requerimiento. Este  usuario debe ser válido para el canal que se está ejecutando en BTS
* **Userid**: Nombre de usuario de los servicios Bantotal
* **Userpassword**: Contraseña encritada para la authentication de los servicios (AES Encryptor)
* **Protocol**: Las opciones de protocolos son http y https
* **HostName**: IP o DNS del servidor
* **Port**: Puerto donde están publicados los servicios 
* **BaseUrl**: Base de la url de los servicios publicados
* **SSLPublicCert**: Ubicación certificado público para cifrado de datos
* **SSLAutoSigned**: ¿Es el certificado autofirmado? true | false
* **User**: parámetros por si se tiene autenticación básica
* **Pass**: parámetros encriptado por si se tiene autenticación básica (AES Encryptor)
* **headers**: User-Agent
* **authenticate**: ejemplo ‘odwsbt_Authenticate_v1?Execute’ (no poner package ni aspx)
* **plataform**: Las opciones de plataforma son JAVA o .NET 
* **prefijo**: En caso de estar trabajando con servicios de V3R1, hay que agregarle en el parámetro prefijo la opción de `“ardwsbt_” en vez de “odwsbt_”`. 

``` json
btservices:{
    Canal:"BTDIGITAL",
    Requerimiento:1,
    Usuario: "INSTALADOR",
    Userid: "MINSTALADOR",
    Userpassword:"U2FsdGVkX1/9/hjoJ2QCNI1iN4VDJtu2aR+6byblALQ~",
    Protocol:"http",
    HostName:"monitoreo2019",
    Post:"6015",
    BaseUrl:"/arqgx16sql/servlet",
    SSLPublicCert:"",
    SSLAutoSigned:false,
    User:"bantotal",
    Pass:"U2FsdGVkX19JZoxBwIzDjg64HFJAKALZEGz/GW2pAzI-",
    header:{
        "User-Agent":"",
    },
    authenticate:"ardwsbt_Authenticate?Execute",
    plataform:"JAVA",
},
prefijo:"ardwsbt_", //odwsbt_ o ardwsbt_
```

En el mismo archivo de config.js hay que configurar otras cosas imprescindibles como la ruta de 
acceso para el archivo responseData.json, que es donde se almacenan las respuestas para luego 
mostrarlas en el swaggger como ejemplos de los llamados. En caso de no querer guardar las 
respuestas se deja la variable enable en false.


``` json
storeResponses:{
    enable:true,
    storeFile:"C://User//Administra//Documents//BTExposer//swagger//responseData.json"
}

```

En esta versión se podrá usar BTServicesExposer con configuración de oauth2, o prescindir de ella y 
solamente utilizar la autenticación de Bantotal Services con el servicio de Authenticate. 
Entonces, para utilizar oauth2 hay que tener el parámetro auth en true (de lo contrario se deja en 
false), auth_version en `oauth2` (de lo contrario se deja vacío), y agregar el tiempo que indica 
cuanto tarda el token de autenticación en expirar con el parámetro accessTokenLifetime (expresada 
en segundos, 3600 equivale a una hora). Lugo cargar el parámetro database_auth con los datos 
relativos a la base de datos PostgreSQL (más adelante en el documento se hace referencia a esto
nuevamente)


``` json
    auth:true, //opciones true or false
    auth_version:"oauth2",//opciones:oauth2 or jwt(json web token)
    database_auth:{
        user:"postgres",
        host:"localhost",
        database:"oauth2",
        password:"admin",
        port:5432,
    }
```
Hay una sección en este archivo donde se podrá configurar el almacenamiento de logs. El parámetro 
debug indica si va a almacenar los logs, level indica el nivel de información a mostrar pudiendo ser 
“error” o “debug” (en caso de ser debug se imprimen tanto logs de información como errores), y 
finalmente el parámetro logsUrl que es la ruta de acceso del archivo donde quedan los logs 
almacenados.

``` json
    debug: true,
    level: "debug", //error debug
    logsUrl:"C://User//Administra//Documents//BTExposer//logs//",
```

La limitación de velocidad es una función que se utiliza para controlar las solicitudes entrantes y 
salientes en un servidor. Podríamos limitar la cantidad de solicitudes que hace un usuario por 
ejemplo. Para eso se tiene en el config parámetros para poder hacer uso o no de esta función.

``` json
    rateLimiter:{
        enable:true,
        points:100,
        duration:60,
        timeoutMs:3000    
    }
```
Siguiendo con la configuración, agregan los siguientes parámetros:
* **no_cache**: se deja en true en caso de querer usar el BTExposer sin Swagger (de lo contario hay q dejarlo en false)
* **trust_forwared_for**: En true si sabemos que la cabecera x-forwarded-for contiene la IP real 
del cliente. Dependiendo del modelo del balanceador:
    * El balanceador agrega la IP del cliente al principio de la lista: ip_forwarded_last=false
    * El balanceador agrega la IP del cliente al final de la lista:ip_forwarded_last=true

``` json
    trust_forwarded_for:false,
    ip_forwarded_last:false,
    no_cache:false,
```

Y por último control de hash a nivel del mensaje para asegurar la integridad de los mimos mismo

``` json
    disabledhash:false,
    KeyHash:"!_CLAVEXXX_!"
```

## Paso 2 – Configurar aplicación Swagger

Luego hay que configurar otro archivo config para levantar el Swagger. Ese archivo config.js se 
encuentra en la siguiente ruta `\BTExposer\swagger\config.js` en el cual hay parámetros 
imprescindibles para levantar el swagger, como el endpointFolder, storeFile, url y puerto.


* **endpointFolder**: Ruta donde se encuentra los archivos json con la definición de los llamados a los servicios de BTS
* **baseUrl**: Base de la url del swagger
* **port**: Puerto donde queda levantado el swagger 
* **storeFile**: Ruta del archivo responseData.json donde se almacenan las respuestas

``` json
   endpointFolder: "C://User//Administra//Documents//BTExposer//swagger_routes",
   baseUrl:"/api-docs",
   port:"3000",
   storeFile:"C://User//Administra//Documents//BTExposer//swagger//responseData.json",
```

* **servers**: Descripción y url que apunta al api por el cual se hace los request a los servicios.

``` json
   servers:[
       {
           url:"http.//localhost:3001/",
           description:"Local server"
       },
       {
           url:"http.//192.168.1.5:3001/",
           description:"Local server"
        },
   ],
```
En el mismo archivo se podrán configurar más datos a modo de información que aparece en el 
swagger como la versión que corresponde a BTServicesExposer, el título y la descripción de la API 
que aparece en la página web.

<img :src="$withBase('/img/01.png')" class="center">

Se agrega de forma opcional en el config dos parámetros para habilitar Swagger Codegen.
Swagger Codegen es un generador de código de fuente abierta para crear stubs de servidor y SDK 
de cliente directamente desde la API RESTful definida por Swagger.
Al ejecutar el swagger con esta opción habilitada se va a crear una carpeta nueva en la ruta y 
nombre indicados en codegenfile

``` json
    codegen:true,
    codegenfile:"./mu-api"
```
