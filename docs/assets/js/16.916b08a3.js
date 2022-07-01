(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{457:function(a,e,s){"use strict";s.r(e);var t=s(65),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"seguridad-con-jwt-opcional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seguridad-con-jwt-opcional"}},[a._v("#")]),a._v(" Seguridad con JWT (Opcional)")]),a._v(" "),s("p",[a._v("Nuevamente para que los endpoint se generen con la autenticación habilitada, hay que setera el\nparámetro auth en true y auth_version con “jwt” en el archivo config.js que se encuentra en la\nruta "),s("code",[a._v("\\BTExposer\\config\\config.js")]),a._v(". Regenerar los endpoints y asegurarse de tener generados los\nendpoint (json que se encuentran en la carpeta swagger_routes) con el parámetro auth en true.\nAhora hay que cree una nueva base de datos llamada por ejemplo jwt y ejecutar las siguientes\nSQL para crear la tabla users donde se guardara las credenciales del usuario para luego poder\nvalidar los jwt.")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("users\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\nid "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("serial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\nusername "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\nuser_password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"postman"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postman"}},[a._v("#")]),a._v(" Postman")]),a._v(" "),s("p",[a._v("Para usar JWT al igual q en el caso de oauth2 se necesita crear un nuevo usuario. Para esto, realice\nuna solicitud POST a "),s("code",[a._v("http://servidor:xxx/auth/signup")]),a._v(" con los siguientes parámetros.\nParámetros en el header:")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("username")]),a._v(": Nombre de usuario del api")]),a._v(" "),s("li",[s("strong",[a._v("password")]),a._v(": Contraseña de la api")])]),a._v(" "),s("img",{staticClass:"center",attrs:{src:a.$withBase("/img/09.png")}}),a._v(" "),s("p",[a._v("Y para generar un nuevo token realice una solicitud POST a "),s("code",[a._v("http://servidor:xxx/auth/loginJWT")]),a._v(" con los siguientes parámetros.")]),a._v(" "),s("img",{staticClass:"center",attrs:{src:a.$withBase("/img/10.png")}}),a._v(" "),s("p",[a._v("Para autenticar desde el Swagger hay que ir hasta la opción de Autenticar y agregar el token generado.")]),a._v(" "),s("img",{staticClass:"center",attrs:{src:a.$withBase("/img/11.png")}})])}),[],!1,null,null,null);e.default=n.exports}}]);