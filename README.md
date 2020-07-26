# AngularToStatic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Context of this project
This project has been created to illustrate the pre-render feature of Angular Universal.
You can find the full blog post at this addresses :
French version : https://www.antoinebernard.com/fr/creer-un-site-statique-avec-angular
English version : https://www.antoinebernard.com/create-a-static-website-with-angular

## Branches
`master` branch contains the project without any Side Server Rendering, so it's a plain old Angular application BEFORE applying SSR or pre-rendering.
`feature/static-website` is the same project in which was included the SSR and pre-render Business, run `npm run prerender` to see the static index.html pages being created in your dist folder.