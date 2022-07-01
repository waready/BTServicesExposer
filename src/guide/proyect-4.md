# Seguridad con OAuth 2.0 (Opcional)

La autorización es el proceso por el cual permitimos acceder a recursos privados.
Se utiliza OAuth 2.0 que es un estándar abierto para la autorización de APIs, que nos 
permite compartir información entre sitios sin tener que compartir la identidad.
Dentro de este protocolo existen 4 modos de funcionamiento posibles denominados Grant 
Types:

* Authorization Code Grant Type
* Implicit Grant Type
* Password Credentials Grant Type
* Client Credentials Grant Type

En esta primera versión utilizamos el modelo **Password Credentials** Grant Type.
Primero hay que asegúrese de tener PostgreSQL instalado en el sistema operativo, ya que va a 
ser el sistema de gestión de bases de datos relacional orientado a objetos y de código abierto que 
vamos a utilizar.

Una vez que este instalado correctamente, hay que cree una nueva base de datos llamada por 
ejemplo **oauth2** y ejecutar las siguientes SQL para crear las tablas de **access_tokens** , 
**oauth_refresh_tokens** y de **users**.

``` sql
    CREATE TABLE public.users
    ( 
    id serial,
    username text,
    user_password text,
    device text,
    usuario text,
    requerimiento text,
    canal text,
    userpassword text,
    userid text,
    PRIMARY KEY (id)
    )
    WITH (
    OIDS = FALSE
    );
```
``` sql
CREATE TABLE 
public.access_tokens
(
 id serial,
 access_token text,
 user_id integer,
 expires timestamp 
with time zone,
 PRIMARY KEY (id)
)
WITH (
 OIDS = FALSE
);
```

``` sql
CREATE TABLE 
public.oauth_refresh_toke
ns
(
 id serial,
 refresh_token text,
 client_id text,
 user_id integer,
 expires timestamp 
with time zone,
 PRIMARY KEY (id)
)
WITH (
 OIDS = FALSE
);

```

Como se mencionó anteriormente, para que los endpoint se generen con la autenticación 
habilitada, hay que setera el parámetro auth en true y auth_version con “oauth2” en el archivo 
config.js que se encuentra en la ruta `\BTExposer\config\config.js`. Regenerar los endpoints y
asegurarse de tener generados los endpoint (json que se encuentran en la carpeta swagger_routes)
con el parámetro auth en true. 

``` json
{
    "method":"POST",
    "path":"/api/Clientes/v1/Actulizar/:clienteUId",
    "path_swagger":"/api/Cliente/v1/Actualizar/{clineteUId}",
    "tags":[
        "Bantotal Services"
    ],
    "description" :"Ingrese una Descripción",
    "parmsIn":[
        {
            "id":"stdPersona",
            "example":""
        }
    ],
    "service":"odwsbt_BTClientes_v1?Actualizar",
    "parameters":[
        {
            "name":"clienteUId",
            "in":"path",
            "required":true,
            "type":"integer",
            "format":"int64",
        }
    ],
    "auth":true
}
```


De igual modo se podrá sestear a mano este parámetro directamente desde el archivo JSON 
correspondiente.

Ahora, pasemos a la configuración de la base de datos. Una vez que haya creado la base de 
datos y las tablas con éxito, vamos al archivo de configuración que se encuentra en la siguiente ruta 
`\BTExposer\swagger\config.js`, y modificamos los datos para acceder a la base de datos 
correspondiente. 

``` json
    oauth2:{
        user:"postgres",
        host:"localhost",
        database:"oatuh2",
        password:"admin",
        port:5432
    }
```

Para probar los endpoints, se podrá usar la herramienta Postman o Swagger

## Postman

Primero, necesitamos crear un nuevo usuario. Para esto, realice una solicitud POST
a `http://servidor:xxx/auth/register` con los siguientes parámetros de cuerpo (codificados como x-www-form-urlencoded)

Esto se podrá realizar también opcionalmente a través de una página web que al final del 
documento se explica (Registro por página web)


Parámetros en el body: 

* **username**: Nombre de usuario del api
* **password**: Contraseña de la api

<img :src="$withBase('/img/03.png')" class="center">

Con un usuario válido, ahora se puede iniciar sesión. Para esto, envíe otra solicitud POST a `http://servidor:xxx/auth/login/` con los siguientes parámetros de cuerpo:

* **username**: Nombre de usuario del api
* **password**: Contraseña de la api
* **grant_type**: password (modo de funcionamiento para la autenticación)
* **client_id**: test
* **client_secret**: test

<img :src="$withBase('/img/04.png')" class="center">

Como los tokens tienen un tiempo de vida, cuando este tiempo expire se podrá hacer otra 
solicitud POST a `http://servidor:xxx/auth/login` pero con los siguientes parámetros de cuerpo:

* **grant_type**: refresh_token
* **client_id**: test
* **client_secret**: test
* **refresh_token**: “refresh_token”(token correspondiente)

Esta solicitud genera un nuevo token a partir del refresh token que se obtuvo en la solicitud anterior sin tener que pasar los datos de autenticación de usuario y password nuevamente.

<img :src="$withBase('/img/05.png')" class="center">

Ahora ya podemos validar nuestro punto final seguro. En el caso de probarlo desde el Postman, este  nos proporciona características especiales para probar la autenticación: Authorization tab

<img :src="$withBase('/img/06.png')" class="center">

## Swagger
Para autenticar desde el Swagger hay que ir hasta la opción de Autenticar y agregar los datos de username y password correspondientes. Así como también cliente_id y cliente_secret con el valor seteado en “test”.

Presionar el botón de Authorize y ya se podrán ejecutar los servicios correspondientes.

<img :src="$withBase('/img/07.png')" class="center">

Los tokens tienen un tiempo de vida del valor seteado en la variable accessTokenLifetime del 
archivo config que se encuentra en la siguiente ruta `\BTExposer\config\config.js`. Luego de
trascurrido este tiempo, saldrá un mensaje de tiempo expirado como el siguiente.

<img :src="$withBase('/img/08.png')" class="center">

