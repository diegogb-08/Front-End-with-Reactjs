# Appointment app for a Dental Clinic
## Clinica JessDieg

### Table of Contents
1. [Installation](#Installation)
2. [Technologies](#Technologies)
3. [Register](#Register)
4. [Bugs](#Bugs)
5. [Authors](#Authors)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This repository is about building the front end where the users are able to register, login/logout, update their profile, ask for future appointments, visualize them and cancel them if needed. On the other side the admin is able to visualize all the appointments and users. Moreover, they can register more employees if needed.

<br/>

## Installation

Install the dependencies and devDependencies.

```sh
npm i
```
In the project directory, you can run:

```sh
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

On the other side, you will need to run the back end from our project called [back-app-citas-sequelize](https://github.com/Jesicamm/back-app-citas-sequelize) and follow its instructions to run it

<br/>

## Technologies

<div style="display: flex; height: 50px">
    <img src="public/icons/reactjs.jpg"
     height= "50px" />
     <img src="public/icons/redux.png"
      height= "50px" />
     <img src="public/icons/node.jpg"
      height= "50px" />
     <img src="public/icons/js.png"
      height= "50px"/>
     <img src="public/icons/bootstrap.jpg"
      height= "50px" />
     <img src="public/icons/momentjs.png"
      height= "50px"/>
     <img src="public/icons/react-router.png"
      height= "50px" />
      <img src="public/icons/html.png"
      height= "50px" />
     <img src="public/icons/css.png"
      height= "50px" />
     <img src="public/icons/axios.png"
      height= "50px"/>
      <img src="public/icons/fontAwesome.png"
      sheight= "50px" />
     <img src="public/icons/slich.png"
      height= "50px" />
</div>

<br/>

## Register

To register a user you will need to follow the following instructions:

* <b>Full Name:</b> The name entered can only contain letters
* <b>User Name:</b> The user name can contain:
      1. Between 6 to 20 characters
      2. Special characters like '_' or '.', but only inside the user name
* <b>Email:</b> The email needs to have '@' and '.' characters
* <b>Password:</b> The password MUST contain:
      1. Minimum 8 characters
      2. At least one uppercase and one lowercase
      3. At least one special character

<br/>

## Bugs

The feature to create a new employee is still in development process

## Authors

* [Jesica Morocho](https://github.com/Jesicamm)
* [Diego Garcia](https://github.com/diegogb-08)