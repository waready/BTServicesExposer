# Manejo de Errores 
* Si el servicio devuelve statusCode igual a 200, se retorna: 
    * **statusCode 200**: En caso de errores mayores a 31000 (errores de negocio) 
    * **statusCode 400**: Información recibida no válida o los errores menores a 31000 (errores de ingreso de parámetros)
    * **statusCode 401**: Unauthorized
* Si statusCode es distinto de 200, se retorna:
    * **statusCode 500**: Error de Servidor