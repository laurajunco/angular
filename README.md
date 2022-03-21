# Angular - The Complete Guide [2021 Edition]

## Chapter 1 : Getting Started

### 1. What is Angular?

- Angular is a framework to create reactive Single-Page-Applications
- Only one HTML file and DOM changes are handled by JavaScript
- Things are rendered in the browser, data from servers is loaded in the background

### 2. Understanding Angular versioning

- AngularJS (Angular 1): First version, completely different from the following versions
- Angular 2: Complete rewrite of AngularJS
- Angular 2 - 13: new version every 6 months. Small improvements but core syntax is the same.

### 3. Setting up first project

- Uses Node.js and npm
- Use the official Angular Command Line Interface CLI
- Can use `ng new my-app --no-strict` mode.
  ```bash
  npm install -g @angular/cli@latest
  ng new my-app
  cd my-app
  ng serve --open
  ```

### 4. Editing the First Application

- package.json file: list of dependencies and libraries needed in the project.
- node_modules/ : where dependencies files are installed.
- src/ : where the app code is.
- app.component.html: component template
- app.component.css: component styles
- app.component.ts: component definition
- app.module.ts: we tell Angular which pieces to use
- index.html: base app HTML
- `<app-root></app-root>`: App component selector. Gets dinamically replaced with the component

### 5. Using Bootstrap for Styling

- Install bootstrap locally: `npm install --save bootstrap`
- styles.css file: can be used to define global styles for the app
- Import bootstrap.css file in angular.json

## Chapter 2 : The Basics

### 1. Loading and Starting an Angular Application

- The file served to the browser is index.html
- `<app-root></app-root>`: root component of application
- Component selector: tells component which HTML element with component template
- How does Angular kick in? The CLI injects the Javascript bundles into the HTML before serving it.
- main.ts: is the first code that gets executed. Bootstraps the app with app.module.ts

### 2. Important Components

- Components are the building blocks of an application
- The app (or root) component nests all the other components of an app.
- Each component has its own template and its own logic
- Components are reusable and replicable

### 3. Creating a New Component

- Create a subfolder of the app folder. Folder name should be equal to component name.
- A component is jusr a class. Angular is able to instantiate it to create objects
- We need to add a decorator to the class so Angular knows its a component. Decorators are a TypeScript feature that allow to enhance code elements.

### 4. Understanding the Role of AppModule and Component Declaration
- Angular will not scan all files by default. Hence, we have to register a new component in the appModule declarations.

### 5. Using Custom Components
- Use a component by adding its HTML selector to any other component template.

### 6. Creating Components with the Command Line Input (CLI) and Nesting Components
- We can create components from the CLI
- `ng generate component servers` or  `ng g c servers`
- This will create all the base files needed for a new component

### 7. Working with Component Templates
- A component must always have a template. It can be templateUrl or just Template
- in template we just write the HTML code inside de TypeScript Component

### 8. Working with Component Styles
- As with templates we can also choose to write styles in a separate css file or to write them inline in the TypeScript component
- Using styleUrls we can link several .css files
- Using styles you declare styles as an array of css rules

### 9. Understanding the Component Selector
- The component selector works as any other HTML selector
- We can define a selector with any other HTML selector we want Ej: attributes, classes, etc.
- ID and pseudo selectors won't work
- For Components its typically use to create custom HTML elements

### 10. What is Data Binding
- Communication between the Component class (business logic) and the template (view).
- There can be different ways of communication.
- To output data to our template we can use string iterpolation `{{ title }}`or Property binding `[property]='data'`
- To react to user events we can use Event Binding `(event)="expression"`
- There is also Two-way-data-binding `[(NgModel)]="data"`

### 11. String interpolation
- In a component html file we can use TypeScript expressions inside `{{ }}`
- These expressions must resolve to a String
- Can't write multiline expressions. Not `if` or `for` but terniary operations are ok.