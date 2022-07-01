# Registro por página web (caso con oauth2) 

Así mismo como se realizó el registro por Postman de los usuarios del api, también se puede hacer a 
través de una pagina web. Para esto se abre un servidor web y se ejecuta 
`http://servidor:xxx/auth/registro` . Se podrá ver la siguiente imagen:

<img :src="$withBase('/img/18.png')" class="center">

Para registrarse se deben ingresar los parámetros de nombre de usuario y contraseña del api.

Con el usuario válido, ahora se puede iniciar sesión. Para esto, hay que acceder a `http://servidor:xxx/auth/login`

<img :src="$withBase('/img/19.png')" class="center">

Y si los datos son correctos, retornara el token de acceso correspondiente:

<img :src="$withBase('/img/20.png')" class="center">