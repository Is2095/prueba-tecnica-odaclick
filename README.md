# prueba-tecnica-odaclick


clonar el repositorio.

instalar dependencias

crear un archivo .env al nivel del package.json con PORT 3001,  MONGODB_URL = "mongodb://127.0.0.1:27017/onclick", se requiere mongodb local

levantar proyecto como desarrollo: npm run dev

modelo tablas (mongodb):

Para la Tarea:

 titulo: {
        type: String,
        required: [true, 'El producto es requerido (DB)']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del producto es requerido (DB)']
    },
    estado: {
        type: Boolean,
        default: false
    },
    idUsuario: {
        type: String
    }

Para el Usuario:
   nombre: {
        type: String,
        required: [true, 'El nombre es requerido (DB)']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es requerido (DB)']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido (DB)'],
        unique: true
    }

    rutas:

    POST /api/tarea
    request--> body 
    {
        "titulo": "----",
	    "descripcion": "----",
	    "idUsuario": "----" -> id del usuario al que se le va a guardar la tarea
    }
    
    POST /api/editar
    request--> body
    {
	    "id":  "668c38d5bf9815fdb8efbcb7", --> id de la tarea
	    "datos": {"titulo": "", "descripcion": ""} los datos que se envíen vacios no se tocan en la base de datos, por lo que se puede editar todos o los necesarios
    }

    POST /api/estadoTarea
    request--> body
    {
	"id":  "" --> id de la tarea a cambiar el estado true -> false ó false -> true lo que corresponda
    }

    DELETE /api/borrarTarea
    request--> body
    {
	"id":   "668c38d5bf9815fdb8efbcb7" -> id tarea a borrar
    }

    GET /api/tareas 
    obtiene todas las tareas guardadas

    POST /usuario/crearUsuario
    request--> body -> todos los campos requeridos
    {
	    "nombre": "Pablo",
	    "apellido": "Tremendo",
	    "email": "prueba@prueba222222.com" -> campo debe ser único
    }

    POST /usuario
    request--> body 
    {} -> obtiene todos los usuario
    {
        "email": "" -> obtiene el usuario con el email específico
    }