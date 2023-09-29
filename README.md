# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- SPA ( Single Page Application ) a profundidad
- Diferentes temas en la misma aplicación aplicados a diferentes rutas
- Multiples Routers
- Push y Replace en el History
- Leer argumentos por URL
- QueryParams
- Aplicar filtros utilizando QueryStrings

En esta sección aún no haremos protección de rutas, pero dejaremos el estilo de esos componentes listos para la siguiente sección.

Aquí nos enfocaremos en la funcionalidad de la aplicación suponiendo que estamos autenticados.

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Rutas públicas
- Rutas privadas
- Login y logout - Sin backend aún
- Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario.
- Context
- Reducer

Cuando se trabaja con los context o contextos no siempre es necesario trabajar con los reducers ya que depende de la aplicación y complejidad, pero sí hay que tenerlo en consideración ya que usualmente vamos a querer trabajar con los reducers porque nos permite disparar acciones y manejar el estado de forma más controlada.

Esta es una sección pequeña pero importante para trabajar las bases de la autenticación y protección de nuestra aplicación.

---

# Nota de actualización - Error imágenes producción

Si quieren hacer el build de la app para hacer el deploy, si se fijan verán que los assets con las imágenes no se copian automáticamente a la carpeta dist con el build de producción.

Esto es debido a Vite y como estamos creando las URL's de las imágenes en HeroCard.jsx.

Si importamos directamente una imagen con import imgUrl from '/assets/heroes/marvel-spider.jpg', Vite se encargará de gestionarlo y añadirá el archivo al build de producción, pero nosotros estamos creando la URL con const heroImageUrl = `/assets/heroes/${id}.jpg`;, de ahí que Vite no las copie automáticamente.

La solución sería crear una carpeta llamada public en la raíz del proyecto (al mismo nivel que package.json o index.html) y dentro de esta carpeta mover la carpeta heroes que contiene todas las imágenes.

De esta forma ya añadimos la carpeta heroes al build de producción.

Para acceder a "public" tenemos que usar la ruta raíz /, por lo que ahora modificaremos la URL de heroImageUrl en el archivo HeroCard.jsx quedando: const heroImageUrl = `/heroes/${id}.jpg`;.

De esta forma ya se copian automáticamente las imágenes, y funciona nuestra app tanto en desarrollo como producción.

Si quieren leer más sobre los assets y cómo manejarlos en Vite: https://vitejs.dev/guide/assets.html.
