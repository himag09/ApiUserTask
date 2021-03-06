# ApiUserTask
## :bookmark_tabs: Instrucciones de uso

Para que el servidor de node se ejecute localmente:

    - Clonar el repositorio 'git clone https://github.com/himag09/ApiUserTask.git'

    - Ingresar a la carpeta 'cd ApiUserTask'

    - Ejecutar 'npm install' para instalar todas las dependencias necesarias
    
    - Ejecutar 'npm run start' para iniciar el servidor

## :file_folder: Sobre el proyecto

API para crear y loguear usuarios ademas de que cada usuario logueado puede crear, editar, ver y eliminar tareas.

## :books: Estructura de la aplicación

- `server.js` - El punto de entrada de la aplicación. Este archivo define el servidor de express y la creación de la base de datos de sqlite. También requiere las rutas y modelos que son usadas.
- `config/` - Esta carpeta contiene la configuración para sequelize y las variables de entorno.
- `controllers/` - Esta carpeta contiene todos los controladores que son usadas en la aplicación.
- `middleware/` - Esta carpeta contiene el middleware para la autorización de la creación de usuario y la autorización de los token.
- `migrations/` - Esta carpeta contiene las migraciones de la base de datos.
- `models/` - Esta carpeta contiene los modelos usados en la aplicación.
- `routes/` - Esta carpeta contiene las definiciones de las rutas usadas en la API.
- `seeders/` - Esta carpeta contiene los seeders para la base de datos.
