# Seguridad con Bantotal Services 

En esta versión se podrá usar BTServicesExposer con configuración de oauth2, JSON Web Token o prescindir de ellas y solamente utilizar la autenticación de Bantotal Services con el servicio de 
Authenticate.

Para utilizar la autenticación de Bantotal Services se debe tener el parámetro `auth` en `false` y `auth_version vacío` en el archivo config.js que se encuentra en la ruta `\BTExposer\config\config.js`. 

Luego asegurarse de tener generados los endpoint (json que se encuentran en la carpeta `swagger_routes`) con el parámetro para `auth` en `false`. De lo contario se podrá modificar este parámetro a mano o regenerar los endpoints nuevamente para que queden todos con el mismo  valor del parámetro `auth` que se encuentra en el **config.js**
Es importante que se genere el endpoint del servicio de Authenticate y luego sea ejecutado previamente a ejecutar los endpoint del resto de los servicios (**node BTExposer.js wsdl_para_generar\odwsbt_Authenticate_v1.xml** )

