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
- `ng generate component servers` or `ng g c servers --skipTests`
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

- Tool for outputing data in our HTML template
- In a component html file we can use TypeScript expressions inside `{{ }}`
- These expressions must resolve to a String
- Can't write multiline expressions. Not `if` or `for` but terniary operations are ok.

### 12. Property Binding

- There are a lot of cases when we can use Property Binding OR String interpolation
- A component constructor is a method executed qhen the component is first created
- Square brackets indicate that we want to dynamically bind some property to it `[]="typescript code"`

### 13. Property Binding Versus String Interpolation

- We can use any HTML element property ofr property Binding such as innerText
- When we just want to output something we should use String interpolation
- When we want to change a property of an element is better to use Property Binding

### 14. Event Binding

- For event Binding we use parenthesis with the name of the event we want to listen to: `(click)="OnCreateServer()"`
- As a general rule, we shouldn't put too much logic into our templates

### 15. Passing and Using Data with Event Binding

- `$event``is the data emmited with the event, we can pass this as an argument for a function

### 16. Two way data binding

- We combine Event Binding and Property Binding
- We also combine the syntaxis `[()]`
- ngModel will trigger on the event and update a value that we defined in a component class
- A nice and easy way of responding to events in two ways

### 17. Understanding directives

- Directives are instructions in the DOM
- Components are directives with a template. They tell the DOM to show some html elements
- We can build our own custom directives!
- There are also some build in directives we can use

### 18. Using the ngIf Directive to Display Data Conditionally

- ngIf works as an `if` statement
- Directives are usually added by using an attribute selector -`<p *ngIf="false"></p>` needs a star because it changes the structure of the DOM. If true renders element

### 19. Styling Elements Dynamically with the ngStyle Directive

- Attribute directives dont change the DOM structure just the attributes of an element.
- ngSyle changes styles dynamically

### 20. Applying CSS Classes Dynamically with the ngClass Directive

- ngClass allows us to add a class
- object with class name and wether it should be added or not

### 21. Displaying Lists Using the ngFor Directive

## Chapter 3 : Course project the basis

### 1. Creating a recipe model

- We need to define the structure of how a recipe will look like in all our App3
- A model is a typescript file. A blueprint for objects we create.

## Chapter 4 : Debugging tools

- Console and chrome developer tools are your best friend.
- Angular javascript files support source maps se we can debugg directly on ts files.
- sources/webpack/./src
- Install angular dev tools plugin

## Chapter 5 : Data binding

### 1. Custom property and event binding

- We can use event binding into our own components usig custom properties and events
- By default all properties inside a component are only accesible inside the component
- If we want a property to be accesible we need to add the decorator `@Input()`
- We can set an alias for accesing the property outside the component `@Input('alias')`

### 2. Binding to custom events

- For events we use the `@Output()`decorator
- We create events as eventemitter properties in our component

### 3. Understanding View Encapsulation

- As a default Angular encapsulates all files of a component to only affect that component. That means styles will only affect the component template they are in.
- We can overwrite this encapsulation

### 4. Using Local References in Templates

- A local reference can be placed on any HTML element so not only on a input element `#name`
- this will reference the complete html element.
- We can then use this references in our template. Bu not! Inside our typescript code.

### 5. Getting Access to the Template and Document Object Model (DOM) with the @ViewChild Component

- with the decorator `@ViewChild('selector')` we get access to DOM elements in our typeScript code.
- Don't use for changing info in the elements!

### 6. Projecting Content into Components with ng-content

- Everything placed inside the html tags of a component is lost by default
- `<ng-content> </ng-content>` serves as a hook so angular replaces it with the content placed inside the tags of a component

### 7. Understanding the Component Lifecycle

- Once a new component is instantiated, Angular goes through a couple of phases.
- We can hook into these phases by implementing some methods Angular will call and execute some code.
  1. ngOnChanges -> called after a bound input property changes
  2. ngOnInit -> called after the component has been initialized
     .... will fill this later with img

## Chapter 7 : Directives Deep Dive

### 1. Module introduction
- Attribute directives: sit on elements just like attributes (llok just like attrs)
- Structural directives: can also change the structure of our DOM tree (they have a *)

### 2. ngFor and ngIf Directives Recap
- We can't have more than 1 structural directive in an element (i.e. can't use ngIf and ngFor)

### 3. Creating a Basic Attribute Directive
- We define custom directives in their own class and file: new-directive.directive.ts
- Inside the directive we have access to the elemnt it is used in (injection)
- Directives also have the component lifecycle methods (onInit...)
- We also have to add Directives to the moduleImports in app.module
- We add directives as an attribute of our element

### 4. Using the Renderer to Build a Better Attribute Directive
- Is not a good practice to directly access our elements and change their attributes
- Generate directive with ng: `ng generate directive better-highlight` or `ng g d better-highlight`
- Renderer gives us access in a better way to the element
- We need to pass the element native reference to the renderer.
- Renderer works even if ANgular doesnt have access on the DOM (i.e service workers)

### 5. Using the @HostListener() Decorator to Listen to Host Events
- How can we use the directive to react to events that occur to the element?
- Hostlistener is a convenient way of listening to events on the element

### 6. Using the @HostBinding() Decorator to Bind to Host Properties
- there is an easier way of changing the style in a component without using the renderer
- We bind Hostbinding to a property (i.e background color) and then we can change that property

### 7. Binding to Directive Properties
- We can also use custom property binding with directives (@input..)

### 8. What Happens Behind the Scenes on Structural Directives

- Structural directives are transformed by Angular into regular directives. Ths star is because its simpler to use for us

## Chapter 9 : Using Services and Dependency Injection

### 1. Intro
- A service is a piece, another class, which acts as a central repository for code we might reuse.
- We can use them for general tasks which might be centralized

### 2. Creating a Logging Service
- Create a new file with a Ts class. Naming convention: `logging.service.ts`
- A service doesn't need decorators because it is just a normal typescript class
- You **dont** use a service in Angular by instanciating the service class

### 4. Injecting the Logging Service into Components
- Angulars dependency injector automatically injects an isntance of our service in the components that need it
- We create a property of the type of our class in the components constructor
- We also need to provide a service (in the component decorator)

### 5. Creating a Data Service
- We can also create services to store and keep track of the data in our application

### 6. Understanding the Hierarchical Injector
- When we use a service, angular instanciates it for that component and all its children
- To use the instance of the father component, remove the service from the providers array

### 7. Injecting Services into Other Services
- You can use a service within another service.
- For this you declare it as a property in the service constructor
- You add both services as providers in app.module
- If a service will use another service it will need the `@injectable` decorator

### 8. Using Services for Cross-component Communication
- We can use services for sending information across components


## Chapter 11 : Changing Pages with Routing

### 1. Introduction
- Angular ships with its own router which allows you to change the URL in the URL bar and still only use one page.

### 2. Setting up and loading routes
- We need to learn Angular know which routes we will have in our app.
- We can do this in the app module
- Each route needs a route and a component.
- We need to add`RouterModule.forRoot(appRoutes)` to app Module

### 3. Navigating with Router Links
- We use the `RouterLink` directive to change between routes without reloading the page

### 4. Understanding Navigation Paths
- `servers` is a relative path. `/servers` is an absolute path
- You can navigate as if you were on a file directory. `../servers`

### 5. Styling Active Router Links
- `routerLinkActive="active"` adds the class to each active link if it contains the path you are on
- `[routerLinkActiveOptions]="{ exact: true }` only adds the class if the route is an exact match.

### 6. Navigating Programmatically
- We can also change routes inside our component class.
- We inject the router in the components constructor
- we call `this.router.navigate(["pathSegment", "pathSegment"]);`

### 7. Using Relative Paths in Programmatic Navigation
- the navigat e,ethod doesnt know the current route.
- We can add this to the navigate() config.

### 8. Passing Parameters to Routes
- We can add dynamic segments to our paths. `"users/:id"`
- We can route params `this.currentRoute.snapshot.params["name"]`

### 9. Route Observables
- An observable is an easy way to subscribe to an event which might happen.
- Angular cleans up the subscription whenever the component is destroyed. (by default)

### 10. Passing Query Parameters and Fragments
- We might wan to add query parameters to our query `?mode=editing&#loading`

...

## Chapter 13: Understanding Observables

### 1. Introduction
- An observable can be thought of as a data source
- An object we import form rxjs
- Observable pattern: obervable ----> stream -----> observer
- The observable emits events (data packages)
- Observer: subscribe function to handle data packages: handle data, errors or completion
- We determine what happens when we receive each kind of data package

### 2. Analyzing Angular Observables
- Observables are constructs to which you subscribe to be informed about changes in data

### 3. Getting Closer to the Core of Observables
- Observables don't necessarily stop emitting values just because you're not interested in them anymore.
- We have to unsubscribe from the observable when leaving the component that calls it
- The observables provided by Angular are managed by Angular and therefore, we don't need to unsubscribe manually as Angular will take care of that.
