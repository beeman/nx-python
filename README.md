# NxPython plugin

This project was generated using [Nx](https://nx.dev).

<p align="center">
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="250">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/240px-Python-logo-notext.svg.png" width="200"/>
</p>

The `nx-python` plugin allows user to create a basic python application using `nx` commands. To add the plugin to your project, just follow the next steps 

## Getting started

### Create a Nx Workspace

Before installing the `nx-python` plugin, it is required to have a Nx Workspace pre-configured. If you don't, then proceed to create a new one executing the next command:

```
npx create-nx-workspace python-workspace --preset=empty --cli=nx --nx-cloud true
cd python-workspace
```

### Install the `nx-python` plugin

```
yarn add -D @nx-python/nx-python
```

### Adding an application to our workspace

To create a new python application based on plugin, please execute the next command:

```
nx g @nx-python/nx-python:app <app-name>
```

**Note:** Replace `<app-name>` with the name of your new application

## Usage

After creating the `<app-name>` application using the `nx-python` plugin. We can execute the build, lint, test and serve `nx commands` on this new application. Output will be stored on `dist/<app-name>/` directory.

### Building the app

The `build` command is going to compile all the python files inside `<app-name>` directory, using the `py_compile` native module. 

```
nx build <app-name>
```

More information here: [py_compule](https://docs.python.org/3/library/py_compile.html)

### Linting the application

For the purpose of linting, sadly python doesn't have a native module. `nx-python` will use the `Flake8` module to lint your application, but it is required to install this one first. More info here: [Flake8](https://flake8.pycqa.org/en/latest/)

```
pip install Flake8
```

After that you can perform the lint process with:

```
nx lint <app-name>
```

### Serving the application

This is going to execute the main file in your python application.

```
nx serve <app-name>
```

### Testing your application

The `test` command is going to execute all the test units inside your python app. You can add new test unit files if you want, but there are two requirements that you must meet:

- The filename must include the prefix `test`
- Because we are using the native `unittest` python module to make our tests, you are going to create the tests based on this approach. More info here: [unittest](https://docs.python.org/3/library/unittest.html)

To test your python app, execute the command:

```
nx test <app-name>
```