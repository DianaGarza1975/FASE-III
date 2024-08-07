# FASE-III
### Instalación y Configuración - README.md
# Dulcetti Pastelería

## Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Problema Identificado](#problema-identificado)
3. [Solución Propuesta](#solución-propuesta)
4. [Arquitectura de la Solución](#arquitectura-de-la-solución)
5. [Guía de Instalación](#guía-de-instalación)
6. [Contribuciones](#contribuciones)
7. [Licencia](#licencia)

## Descripción del Proyecto

### Introducción

**Dulcetti Pastelería** es una aplicación web diseñada para gestionar y vender productos de pastelería en línea. La aplicación permite a los usuarios explorar un catálogo de deliciosos pasteles y postres, realizar pedidos y pagar en línea de manera segura. Está diseñada para facilitar una experiencia de compra fluida y atractiva para los amantes de los dulces.

### Características Principales

- **Catálogo de Productos**: Navega por una amplia variedad de productos de pastelería, con descripciones detalladas y fotos atractivas.
- **Carrito de Compras**: Agrega productos al carrito, visualiza el total de la compra y realiza el pago de forma segura.
- **Registro e Inicio de Sesión**: Los usuarios pueden crear una cuenta para guardar sus pedidos y acceder a promociones exclusivas.
- **Gestión de Pedidos**: Los administradores pueden gestionar pedidos y actualizar el estado de cada uno desde un panel de administración.

### Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Base de Datos**: MongoDB
- **Otras Herramientas**: Stripe para procesamiento de pagos en línea, Heroku para despliegue en la nube

### Estado del Proyecto

Actualmente, el proyecto está en fase de producción con un catálogo funcional y sistema de pagos en línea integrado. Las futuras versiones incluirán mejoras en la interfaz de usuario y nuevas funcionalidades como un sistema de notificaciones para los usuarios.

### Capturas de Pantalla

![Página de Inicio](file:///C:/Users/BRM15852/Downloads/HTLM5/index.html)
![Página del Catálogo](file:///C:/Users/BRM15852/Downloads/HTLM5/quienessomos.html)


#### a. Instalación del Ambiente de Desarrollo

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/dulcetti-pasteleria.git
   cd dulcetti-pasteleria
   ```

2. **Instalar Dependencias:**
   Debemos asegurarnos de tener Node.js y npm (o yarn) instalados en nuestro sistema. Luego, instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno:**
   Creraremos un archivo `.env` en el directorio raíz del proyecto y definiremos las variables de entorno necesarias (como las credenciales de la base de datos y cualquier otra configuración sensible). Un ejemplo básico de `.env` puede ser:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/dulcetti_pasteleria
   JWT_SECRET=secreto_super_secreto
   ```

#### b. Ejecutar Pruebas Manualmente

- **Pruebas Unitarias:**
  Se pueden ejecutar pruebas unitarias (siempre y cuando se hayan implementado) utilizando el siguiente comando:
  ```bash
  npm test
  ```

- **Pruebas de Integración (opcional):**
  Si tenemos configurado pruebas de integración, podríamos necesitar un entorno específico o configuraciones adicionales antes de ejecutarlas.

#### c. Implementar en Producción (Local o en la Nube)

1. **Implementación en Ambiente Local:**
   - Para ejecutar la aplicación en un ambiente local, debemos tener MongoDB instalado y corriendo.
   - Iniciar la aplicación con el siguiente comando:
     ```bash
     npm start
     ```
   - La aplicación estará disponible en `http://localhost:3000` (o el puerto que hayas especificado en tu archivo `.env`).

2. **Implementación en Heroku (Ejemplo de Implementación en la Nube):**
   - Crear una cuenta en [Heroku](https://www.heroku.com/) si aún no se cuenta con ella.
   - Instalar el Heroku CLI y siguir las instrucciones para iniciar sesión y crear una nueva aplicación de Heroku.
   - Configurar la base de datos en Heroku (por ejemplo, utilizando MongoDB Atlas).
   - Desplegar la aplicación en Heroku con Git:
     ```bash
     git push heroku main
     ```
   - Heroku automáticamente desplegará la aplicación y se podrá acceder a ella a través de la URL proporcionada por Heroku.

### Configuración del Producto - README.md

#### a. Configuración del Producto (Archivos de Configuración)

1. **Archivo `.env`:**
   - Crearemos un archivo `.env` en el directorio raíz del proyecto para manejar las variables de entorno. Este archivo debe contener configuraciones sensibles como las credenciales de la base de datos y cualquier otra configuración específica del  entorno de desarrollo. Aquí muestro un ejemplo básico:
     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/dulcetti_pasteleria
     JWT_SECRET=secreto_super_secreto
     ```

2. **Configuración de Base de Datos (MongoDB):**
   - Configurar correctamente la URL de conexión a la base de datos MongoDB en el archivo `.env` para el entorno de desarrollo y producción.

3. **Otros Archivos de Configuración:**
   - Si la aplicación tiene otras configuraciones específicas, como configuraciones de seguridad, CORS (Cross-Origin Resource Sharing), o configuraciones de middleware en Express.js, debemos documentar estos detalles y cómo configurarlos en el archivo `README.md`.

#### b. Configuración de los Requerimientos

1. **Requisitos del Sistema:**
   - Especificaremos los requisitos mínimos del sistema para ejecutar la aplicación, como la versión de Node.js y cualquier otra dependencia específica.

2. **Dependencias del Proyecto:**
   - Listaremos las dependencias principales del proyecto y cómo instalarlas utilizando npm (Node Package Manager) o yarn.

   ```json
   {
     "dependencies": {
       "express": "^4.17.1",
       "mongoose": "^5.13.2",
       "dotenv": "^10.0.0",
       "jsonwebtoken": "^8.5.1"
     },
     "devDependencies": {
       "jest": "^27.0.4",
       "supertest": "^6.1.6"
     }
   }
   ```

3. **Versiones y Requerimientos Específicos:**
   - Especificar cualquier requisito específico como la versión de Java (si aplica para herramientas de construcción como Gradle o Maven), o versiones de otras tecnologías y herramientas utilizadas en el proyecto.
  
   ### Uso - README.md

#### a. Sección de Referencia para Usuario Final

1. **Descripción General del Uso:**
   - Proporcionar una breve introducción sobre cómo los usuarios finales pueden interactuar con la página web de la pastelería.
   
2. **Funcionalidades Disponibles:**
   - Enumerar las principales funcionalidades disponibles para los usuarios finales, como navegar por el catálogo de productos, realizar pedidos, registrarse, iniciar sesión, etc.
   
3. **Guía de Uso:**
   - Detallar el paso a paso cómo los usuarios pueden realizar acciones específicas. Por ejemplo:
     - **Navegación por Productos:**
       Describe cómo los usuarios pueden explorar los productos disponibles, categorías, filtros, etc.
     - **Realización de Pedidos:**
       Explica el proceso para agregar productos al carrito, finalizar pedidos, y opciones de pago.
     - **Registro e Inicio de Sesión:**
       Instrucciones sobre cómo registrarse como nuevo usuario o iniciar sesión si ya tienen una cuenta.
   
4. **Capturas de Pantalla (opcional):**
   - Si es posible, incluir capturas de pantalla que ilustren las interfaces principales y las diferentes acciones que pueden realizar los usuarios finales.

#### b. Sección de Referencia para Usuario Administrador

1. **Descripción General para Administradores:**
   - Brinda una visión general sobre las funciones y responsabilidades del usuario administrador en la plataforma.
   
2. **Acciones Disponibles para Administradores:**
   - Enumera las acciones y herramientas disponibles para los administradores, como la gestión de productos, gestión de pedidos, administración de usuarios, configuración del sistema, etc.
   
3. **Guía de Administración:**
   - Proporciona instrucciones detalladas sobre cómo realizar acciones administrativas específicas. Por ejemplo:
     - **Gestión de Productos:**
       Cómo agregar nuevos productos, actualizar información de productos existentes, y eliminar productos del catálogo.
     - **Gestión de Pedidos:**
       Proceso para revisar pedidos entrantes, actualizar el estado del pedido (pendiente, en proceso, enviado, entregado), generar informes, etc.
     - **Administración de Usuarios:**
       Instrucciones sobre cómo gestionar cuentas de usuario, restablecer contraseñas, y asignar roles de usuario.
   
4. **Capturas de Pantalla (opcional):**
   - Incluye capturas de pantalla que muestren las interfaces y las opciones disponibles en el panel de administración para ayudar a los administradores a navegar y utilizar las herramientas de manera eficiente.

### Contribución - README.md

#### a. Guía de Contribución para Usuarios

1. **Descripción General:**
   - Explica la importancia de la contribución al proyecto y cómo los usuarios pueden colaborar para mejorar la página web de la pastelería.

2. **Requisitos Previos:**
   - Detalla cualquier requisito previo que los colaboradores necesiten tener instalado en sus sistemas locales para contribuir al proyecto, como Git y Node.js.

3. **Proceso de Contribución:**
   - Proporciona una guía paso a paso sobre cómo los usuarios pueden contribuir al proyecto. Incluye los siguientes pasos:

#### b. Pasos Específicos para Contribuir

1. **Clonar el Repositorio:**
   - Instruye a los usuarios sobre cómo clonar el repositorio de GitHub en sus máquinas locales:
     ```bash
     git clone https://github.com/tu-usuario/dulcetti-pasteleria.git
     cd dulcetti-pasteleria
     ```

2. **Crear un Nuevo Branch:**
   - Describe cómo crear un nuevo branch (rama) para trabajar en la nueva funcionalidad o corrección de errores:
     ```bash
     git checkout -b nombre-de-tu-rama
     ```

3. **Realizar Cambios y Commit:**
   - Guía sobre cómo realizar los cambios necesarios en el código:
     ```bash
     # Realiza tus cambios y luego guarda
     git add .
     git commit -m "Descripción breve de tus cambios"
     ```

4. **Enviar un Pull Request (PR):**
   - Explica cómo enviar el Pull Request para que tus cambios sean revisados por los colaboradores del proyecto:
     - Sube tu rama local al repositorio remoto:
       ```bash
       git push origin nombre-de-tu-rama
       ```
     - Luego, visita el repositorio en GitHub y crea el Pull Request desde tu rama hacia `develop` o la rama principal correspondiente.

5. **Esperar la Revisión y Merge:**
   - Indica que los colaboradores revisarán tu Pull Request y proporcionarán comentarios si es necesario.
   - Espera a que tu Pull Request sea aprobado y mergeado con la rama principal del proyecto.

### Roadmap - README.md

#### a. Requerimientos Futuros

1. **Funcionalidades Pendientes:**
   - Enumera las funcionalidades que se planea implementar en futuras versiones de la página web de Dulcetti Pastelería.
   
2. **Mejoras Esperadas:**
   - Detalla las mejoras y optimizaciones que están en consideración para mejorar la experiencia del usuario y la eficiencia del sistema.
   
3. **Actualizaciones de Seguridad:**
   - Incluye cualquier actualización de seguridad planificada para proteger los datos de los usuarios y mejorar la protección contra posibles vulnerabilidades.

#### Ejemplo de Roadmap

- **Implementación de Sistema de Pago Online:**
  - Desarrollar la capacidad de aceptar pagos en línea a través de métodos de pago populares como tarjetas de crédito y plataformas de pago digital.

- **Optimización de la Interfaz de Usuario (UI/UX):**
  - Revisión y refinamiento de la interfaz de usuario para mejorar la navegación, la accesibilidad y la estética general del sitio web.

- **Integración de Funcionalidades de Redes Sociales:**
  - Permitir a los usuarios compartir productos y promociones en redes sociales directamente desde la página web.

- **Implementación de Sistema de Notificaciones:**
  - Desarrollar un sistema de notificaciones para informar a los usuarios sobre el estado de sus pedidos y promociones especiales.

### Ejemplo de Implementación

Este es un ejemplo básico y estructurado que podemos adaptar según los requerimientos específicos y las metas de desarrollo de este proyecto. Debemos asegurarnos de mantener esta sección actualizada a medida que evoluciona el roadmap del proyecto Dulcetti Pastelería.

