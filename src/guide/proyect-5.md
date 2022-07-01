# Seguridad con JWT (Opcional)

Nuevamente para que los endpoint se generen con la autenticación habilitada, hay que setera el 
parámetro auth en true y auth_version con “jwt” en el archivo config.js que se encuentra en la 
ruta `\BTExposer\config\config.js`. Regenerar los endpoints y asegurarse de tener generados los 
endpoint (json que se encuentran en la carpeta swagger_routes) con el parámetro auth en true. 
Ahora hay que cree una nueva base de datos llamada por ejemplo jwt y ejecutar las siguientes
SQL para crear la tabla users donde se guardara las credenciales del usuario para luego poder 
validar los jwt.

``` sql
CREATE TABLE public.users
(
id serial,
username text,
user_password text,
PRIMARY KEY (id)
)

```
## Postman
Para usar JWT al igual q en el caso de oauth2 se necesita crear un nuevo usuario. Para esto, realice 
una solicitud POST a `http://servidor:xxx/auth/signup` con los siguientes parámetros.
Parámetros en el header: 
* **username**: Nombre de usuario del api
* **password**: Contraseña de la api

<img :src="$withBase('/img/09.png')" class="center">


Y para generar un nuevo token realice una solicitud POST a `http://servidor:xxx/auth/loginJWT` con los siguientes parámetros.


<img :src="$withBase('/img/10.png')" class="center">

Para autenticar desde el Swagger hay que ir hasta la opción de Autenticar y agregar el token generado.

<img :src="$withBase('/img/11.png')" class="center">