# AWS SAM with React - Studies

## 🎨 The goal
This project aims to know what is AWS SAM with a frontend application and how to use it in a real project. The goal is to develop an UI for the [API Burguerhouse](https://github.com/diogo-dpa/burguerhouse-api-sam), created before, and to understand how to use it for local development and how to deploy it into production.

## 🕹️ The project
This project is about building an UI for a burguer restaurant, which it would be possible to do the following features:
- Navigate between the pages (Ingredients, Snacks and Orders, mainly)
- List and manipulate (add, update and remove) ingredients, with their amount to represent the stock
- List and manipulate (add, update and remove) snacks
- List and register the user orders

Besides that, to complement what was made in the API, it will be implemented the following features too:
- List and manipulate (add, update and remove) user
- List and manipulate (add, update and remove) menu and their ingredients and/or snacks attached to them

## 🥁 Technologies used

* [React documentation](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) : Superset of Javascript code language programming.
* [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) : Build the project through serveless components.
* [Styled Components](https://styled-components.com/docs/basics#installation) : Library for style guide the project.
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) : Library for testing the UI.
* [Storybook](https://storybook.js.org/docs/get-started/install/) : Library for component documentation. 


## 💻 How to run locally

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda. It can also emulate your application's build environment and API.

To use the SAM CLI, you need the following tools.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 18](https://nodejs.org/en/), including the NPM package management tool.

To build your application for the first time, run the following in your shell:

```bash
# To install the dependencies
npm install

# To run the aplication
npm start

# To run the tests
npm test

```

## 🔜 Improvements to be made
- Automation tests
- Component documentation
- Deploy in AWS with success
