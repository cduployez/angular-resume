# Angular Resume

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Deployment

### Deployment to GitHub Pages

Run:
```sh
ng deploy
```

### Deployment to Google Cloud

On WSL configured with `ansible-playbook`, run:
```sh
gcloud.sh angular-resume-publish && gcloud.sh angular-resume-up
```

## Configure ESLint and Prettier

Link: https://dev.to/this-is-angular/configure-prettier-and-eslint-with-angular-526c

Run:
```sh
ng add @angular-eslint/schematics
npm install prettier --save-dev
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier — save-dev
npm install prettier-eslint --save-dev
npm install eslint-config-prettier --save-dev
npm install eslint-plugin-prettier --save-dev
```

