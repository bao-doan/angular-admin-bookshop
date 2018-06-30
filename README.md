# AdminAngular

## Creator's Version Note:
admin 1.0.0 - project setup, routing (dashboard & category & product)
admin 1.0.1 - category binding (addGenre)
admin 1.0.2 - category binding (addGenre) use objectGenre
admin 1.0.5 - Sidebar re-arranged, product table, product detail (modal)
admin 1.0.6 - Push for demo: fix add Book
admin 1.0.7 - WYSIWYG
admin 1.0.8 - Sidebar re-arranged, Product update
admin 1.0.9 - Sample Form validation (in add product), count items in table, product edit modal (larger width)
admin 1.0.10 - Fix, loading book for edit without fields.
admin 1.0.11 - Form Validate using Template-driven form (v.1)
admin 1.0.12 - Add users, staffs, orders, breadcrumb with changeble address
admin 1.0.13 - Add sample of snackbar for notification (add, delete, get, ...)
admin 1.0.14 - Solve validation for ProductAddComponent using Reactive form
admin 1.0.15 - 
    + Add Login screeen & Hide Navbar when logging inm using Children routing
    + Translate Javascript for Snackbar into TypeScript, show added Category as Notification in Snackbar.
admin 1.0.16 - Login using JWT Authentication OK
admin 1.0.17 - 
    + Add RegisterComponent with checking Password Confirm & checkbox.
    + Register to API function is available.
    + Re-construct aside-menu to dropdown, Remove button for minified sidebar (because this is not necessary)
admin 1.0.18 - Add get User info when logged in.
admin 1.0.19
    + ProductComponent: Add functions for Pagination showing Products per page (demo only, need improvement).
    + ProductComponent: Fix product Quick-View Modal from clicking table row. 
    + ProductComponent: Fix product Edit/Update Modal. 
    + ProductAddComponent: Reset button, re-style validation messages.
    + ProductAddComponent: Datepicker for chosing Release day.
    + ProductAddComponent: Fix typing negative value from keyboard for input type number.
admin 1.0.20 - Improve functions & UX for Pagination
    + Add Select Element to show items per page. Value of items per page depends on Option Element (All/2/5/10/20 items).
    + When select an Option, total pages is re-calculated & show 1st page by default.
    + Add Next/Prev Chevrons for rolling next/prev page.
    + Chevrons will be invisible when 1st or last page is selected.
    + Pagination buttons will display tripple-dot (...) instead of number when total pages reach 6.
admin 1.0.21 - 
    + RegisterComponent: Add show/hide password checkbox with Binding syntax & Typescript.
admin 1.0.22 - 
    + Remove RegisterComponent from Admin (migrated to Shop Project)
    + Add functions preventing re-login without logout.
    + Add function 'checkPluralHandler()' checking plural grammar for ProductComponent.
admin 1.0.23 - ProductAddComponent using FormBuilder, the datepicker can't bind data to Input Element
<!-- ------------------------------------------------------------------------------------------------------ -->
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
