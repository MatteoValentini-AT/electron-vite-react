# JS template for Electron with Vite and React

License: [MIT](/LICENSE)

## Contents and features
- [x] [Electron](https://www.electronjs.org/)
- [x] [Vite](https://vitejs.dev/)
- [x] [React](https://reactjs.org/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)
- [x] [Tailwind CSS](https://tailwindcss.com/)
- [x] [WebStorm run configurations](/.idea/runConfigurations/ElectronViteReact.xml)
- [x] [Auto reload](./nodemon.json)

## Development
1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server with the ```dev``` run configuration\
If any changes are made to either the main or renderer process, the application will automatically reload

## Build
1. Configure your build in the [electron-builder.json](/electron-builder.json) file
2. Build the application with the ```build``` run configuration
3. The application will be built to the ```dist``` folder