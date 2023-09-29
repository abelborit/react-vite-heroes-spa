-Instalación y configuracion de Jest + React Testing Library (En proyectos de React + Vite)
https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177

-Instalaciones:
npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom

-Opcional: Si usamos Fetch API en el proyecto: (si tienes versión ≥ 18 de node no es necesario porque ya viene implementada pero igual instalarla por si acaso)
npm install --save-dev whatwg-fetch

-Actualizar los scripts del package.json
"scripts: {
...
"test": "jest --watchAll"
}

-Crear la configuración de babel babel.config.js o babel.config.cjs
module.exports = {
presets: [
[ '@babel/preset-env', { targets: { esmodules: true } } ],
[ '@babel/preset-react', { runtime: 'automatic' } ],
],
};

-Opcional, pero eventualmente necesario, crear Jest config y setup:
-Configuración de jest.config.js o jest.config.cjs
module.exports = {
testEnvironment: 'jest-environment-jsdom',
setupFiles: ['./jest.setup.js']
}

-Configuración de jest.setup.js
import 'whatwg-fetch'; // En caso de necesitar la implementación del FetchAPI
