# Roommates Management System

Este proyecto es una aplicación de gestión de roommates que permite registrar y gestionar gastos compartidos entre roommates. La aplicación incluye una interfaz web y una API REST para manejar los datos.

## Características

- **Agregar Roommates**: Utiliza la API de Random User para agregar nuevos roommates.
- **Gestión de Gastos**: Permite agregar, actualizar y eliminar gastos.
- **Cálculo de Balances**: Actualiza automáticamente los saldos de debe y recibe para cada roommate.
- **Notificaciones por Correo Electrónico**: Envía correos electrónicos cuando se registran nuevos gastos.
- **Interfaz de Usuario**: Proporciona una interfaz web para interactuar con el sistema.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Una cuenta de correo de Gmail para enviar notificaciones por correo electrónico.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/roommates-management-system.git
   cd roommates-management-system

2. Instala las dependencias:


 npm install

3. Configura las variables de entorno:
Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:



    * EMAIL_USER=your-email@gmail.com
    * EMAIL_PASS=your-email-password

## Uso
Inicia el servidor:

 npm start

2. Abre tu navegador y navega a http://localhost:3000 para acceder a la interfaz de usuario.

3. Usa las siguientes rutas para interactuar con la API:

    * GET /roommates: Devuelve todos los roommates almacenados.
    * POST /roommates: Agrega un nuevo roommate utilizando la API de Random User.
    * GET /gastos: Devuelve el historial de gastos registrados.
    * POST /gastos: Registra un nuevo gasto.
    * PUT /gastos: Actualiza un gasto existente.
    * DELETE /gastos: Elimina un gasto del historial.

## Estructura del Proyecto
plaintext

    /project-root
    ├── /controllers
    │   └── roommatesController.js
    │   └── gastosController.js
    ├── /models
    │   └── roommatesModel.js
    │   └── gastosModel.js
    ├── /routes
    │   └── roommatesRoutes.js
    │   └── gastosRoutes.js
    ├── /services
    │   └── emailService.js
    ├── /views
    │   └── index.html
    ├── /data
    │   ├── roommates.json
    │   └── gastos.json
    ├── index.js
    ├── package.json
    └── .env

## Créditos
Este proyecto fue desarrollado como parte de un desafío de programación. Utiliza diversas tecnologías, incluyendo Node.js, Express, y Nodemailer.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más información.
