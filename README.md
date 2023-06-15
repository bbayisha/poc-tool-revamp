# React Boilerplate

> Typescript | Redux Toolkit | Redux Saga | Material UI

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/project-name/blob/main/LICENSE)

## Table of Contents

- [React Boilerplate](#react-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Folder Structure](#folder-structure)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Linting](#linting)
  - [Contributing](#contributing)
  - [License](#license)

## About

This repository contains the source code for the **React Boilerplate**. It is built using React with TypeScript, Redux Toolkit, Redux Saga, and React Material UI. The project follows an atomic folder structure to maintain a scalable and modular architecture.

## Folder Structure

The project's folder structure is as follows:

```
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
|   └── templates/
├── containers/
│   ├── AuthContainer/
│   │   ├── AuthContainer.tsx
│   └── ...
├── store/
│   ├── actions/
│   ├── reducers/
│   ├── sagas/
│   ├── selectors/
│   └── types/
├── services/
│   ├── api/
│   └── ...
├── assets/
│   ├── styles
│   │   ├── theming
│   │   │   └── theme.ts
│   │   └── global.scss
│   │   └── index.scss
├── utils/
│   ├── helpers/
│   └── ...
└── App.tsx
```

The provided folder structure follows an atomic design pattern for organizing components, containers, store, services, assets, and utility files in a React application. Here's an explanation of each folder and its purpose:

### components
This folder contains the reusable UI components of the application. It follows the atomic design principles and is further divided into:

##### **atoms** 
Contains the smallest, indivisible UI components, such as buttons, inputs, etc.
##### **molecules**
Composed of a combination of atoms, molecules represent more complex UI components.
##### **organisms**
Composed of atoms and molecules, organisms represent larger sections of the UI.
##### **templates**
Provides layout structures for assembling pages by combining organisms, molecules, and atoms.
### **containers**
This folder contains container components that connect the Redux store to specific sections or features of the application. Each container typically has its own subfolder and includes a .tsx file for the component logic.

### **store** 
Contains files related to the Redux store, including actions, reducers, sagas, selectors, and types. These files handle the state management and business logic of the application.

### **services** 
This folder holds service files responsible for making API calls, interacting with external services, or handling other utility functions related to data fetching and manipulation.

### **assets** 
Contains assets used in the application, such as images, fonts, and styles. It includes a styles/ folder to organize styling-related files, including theming and global styles. The theming/ folder may include a theme.ts file for defining a custom theme using a library like Material-UI. The global.scss and index.scss files handle global styles and can be imported at the root level of the application.

### **utils** 
Contains utility files and helper functions that can be used throughout the application for common tasks or functionality.

### **App.tsx** 
The entry point of the application that serves as the root component.

In this structure, there is a specific AuthContainer folder under containers/. This folder represents a container component specifically for handling authentication-related functionality, such as login and signup. It contains an AuthContainer.tsx file that encapsulates the logic for authentication and connects to the Redux store or services as needed.

## Features

- Redux store and saga initial implementation
- Material UI integration
- SCSS support
- Eslint support

## Getting Started

To get a local copy up and running, follow these steps.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/your-username/project-name.git
```

2. Change to the project's directory:

```shell
cd project-name
```

3. Install the dependencies:

```shell
npm install
```

## Usage

1. Start the development server:

```shell
npm start
```

2. Open your browser and visit `http://localhost:3000` to see the application.

## Linting

This project uses ESLint for linting. To run the linter, use the following command:

```shell
npm run lint
```
Fix linting issues

```shell
npm run lint:fix
```

## Contributing

Contributions are welcome! Fork the repository and create a new branch for your feature or bug fix. Submit a pull request