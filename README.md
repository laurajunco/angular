# Angular - The Complete Guide [2021 Edition]

## Chapter 1 : Getting Started

1. What is Angular?

- Angular is a framework to create reactive Single-Page-Applications
- Only one HTML file and DOM changes are handled by JavaScript
- Things are rendered in the browser, data from servers is loaded in the background

2. Understanding Angular versioning

- AngularJS (Angular 1): First version, completely different from the following versions
- Angular 2: Complete rewrite of AngularJS
- Angular 2 - 13: new version every 6 months. Small improvements but core syntax is the same.

3. Setting up first project

- Uses Node.js and npm
- Use the official Angular Command Line Interface CLI
- Can use `ng new my-app --no-strict` mode.
  ```bash
  npm install -g @angular/cli@latest
  ng new my-app
  cd my-app
  ng serve --open
  ```

4. Editing the First Application

- package.json file: list of dependencies and libraries needed in the project.
- node_modules/ : where dependencies files are installed.
- src/ : where the app code is.
- app.component.html: component template
- app.component.css: component styles
- app.component.ts: component definition
- app.module.ts: we tell Angular which pieces to use
- index.html: base app HTML
- <app-root></app-root>: App component selector. Gets dinamically replaced with the component
