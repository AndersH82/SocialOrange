
<div align="center" style="font-size:60px;">
SocialOrange
</div>

![Alt text](readmeimages/amiresponsive.png)

SocialOrange is a vibrant social media platform designed to bring people together, share moments, and foster meaningful connections. It features profile creation, content sharing, comments, and friend connections. The platform also plans to introduce future functions like blocking users and direct chat with friends.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Front-End Libraries](#front-end-libraries)
- [React Component Usage](#react-component-usage)
- [API](#api)
- [Tests](#tests)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Credits](#credits)
- [Wireframe](#wireframe)
- [Features Pictures](#features-pictures)
- [Color Scheme](#color-scheme)
- [Language](#language)
- [Features](#features)
- [Future Functions](#future-functions)
- [Validations](#validations)
- [Bugs/Errors](#bugs-errors)
- [Program Used](#program-used)
- [Acknowledgements](#acknowledgements)

## Getting Started

To get started with SocialOrange, follow these steps:

1. Create an account by signing up with a desired username.
2. Customize your profile by adding a profile picture, bio, and interests.
3. Explore and connect with others by browsing through posts, commenting on interesting content, and participating in discussions.
4. Engage with the community by following friends and participating in discussions to become an active member.

## Installation

- Install Git: First, you need to have Git installed on your system. If you're using Debian or Ubuntu, you can install Git by running the following commands in your terminal:

```
sudo apt-get update
sudo apt-get install git -y
```

- For Windows, you can download and install Git from its official website 2.

- Configure Git: After installing Git, configure your username and email which will be used for your commits. Replace First Last and example@example.com with your actual name and email:
```
git config --global user.name "First Last"
git config --global user.email "example@example.com"
```
Clone the Repository: ``https://github.com/AndersH82/socialorange.git``

- Navigate to the Repository Directory: After cloning, navigate to the newly created directory which contains the cloned repository:

```
cd repository
```
- Pull the Latest Changes: To ensure you have the latest version of the repository, run:

```
git pull
```

- This command fetches the latest changes from the remote repository and merges them into your local copy 1.

- Make Changes (Optional): If you want to contribute to the repository, you can make changes to the files, add them to the staging area with git add ., commit the changes with git commit -m "Your commit message", and then push the changes back to the remote repository with git push.

- Create a Pull Request (Optional): If you've made changes and want them to be reviewed and potentially merged into the original repository, you can create a pull request on GitHub. This involves pushing your changes to your forked repository on GitHub and then initiating a pull request from your forked repository to the original repository.

- Remember, if you're working with a repository that requires two-factor authentication (2FA), you might need to use SSH instead of HTTPS for cloning and pushing changes

## Usage

To run the application in development mode, use the following command:
```bash
npm start
```
This will start the application and open it in your default web browser.

To build the application for production, use the following command:
```bash
npm run build
```
This will create a `build` folder with the production-ready files.

## Project Structure

```
The project's overall structure is well-organized with a clear separation of concerns. Here is an overview of the key directories and files:
socialorange/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── readmeimages/
│   └── (visual assets related to the project)
├── src/
│   ├── api/
│   │   └── axiosDefaults.js
│   ├── assets/
│   │   └── (image assets)
│   ├── components/
│   │   ├── Asset.js
│   │   ├── Avatar.js
│   │   └── NavBar.js
│   ├── contexts/
│   │   └── (context files for state management)
│   ├── hooks/
│   │   └── (custom React hooks)
│   ├── pages/
│   │   ├── auth/
│   │   ├── comments/
│   │   ├── friends/
│   │   ├── posts/
│   │   └── profiles/
│   ├── styles/
│   │   └── (CSS files for styling)
│   └── utils/
│       └── (utility functions or classes)
├── .eslintrc.js
├── .gitignore
├── package.json
├── README.md
└── (other configuration files)
```

## Front-End Libraries

SocialOrange leverages several front-end libraries to create a responsive, interactive, and user-friendly experience. Below is a list of the key libraries used in the project along with a brief description of their purpose:

### React

- **Library**: [React](https://reactjs.org/)
- **Purpose**: React is a JavaScript library for building user interfaces. It allows for the creation of reusable UI components, making the development process more efficient and the codebase easier to maintain.
- **Usage**: The entire front-end of SocialOrange is built using React. Components such as `NavBar`, `SignInForm`, `SignUpForm`, `PostsPage`, `PostPage`, and `ProfilePage` are all React components.

### React-DOM

- **Library**: [React-DOM](https://reactjs.org/docs/react-dom.html)
- **Purpose**: React-DOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing the DOM elements of the web page.
- **Usage**: React-DOM is used to render React components into the DOM. The entry point of the application, typically `index.js`, uses React-DOM to render the root component.

### React-Bootstrap

- **Library**: [React-Bootstrap](https://react-bootstrap.github.io/)
- **Purpose**: React-Bootstrap is a popular UI toolkit for React that provides Bootstrap components as React components. It helps in building responsive, mobile-first web pages.
- **Usage**: Various UI components in SocialOrange, such as forms, buttons, and navigation bars, are built using React-Bootstrap to ensure a consistent and responsive design.

### Axios

- **Library**: [Axios](https://axios-http.com/)
- **Purpose**: Axios is a promise-based HTTP client for JavaScript. It is used to make HTTP requests from the browser.
- **Usage**: Axios is used in SocialOrange to interact with the backend API. It handles tasks such as user authentication, fetching posts, and submitting comments.

### React-Router-Dom

- **Library**: [React-Router-Dom](https://reactrouter.com/web/guides/quick-start)
- **Purpose**: React-Router-Dom is a collection of navigational components that compose declaratively with your application. It enables dynamic routing in a React application.
- **Usage**: React-Router-Dom is used to manage the routing of the application. It allows users to navigate between different pages such as the home page, profile page, and post details page.

### Web Vitals

- **Library**: [Web Vitals](https://web.dev/vitals/)
- **Purpose**: Web Vitals is a library that measures the performance of web pages. It provides metrics that are essential for understanding and improving the user experience.
- **Usage**: Web Vitals is used in SocialOrange to monitor and report on the performance of the web application, ensuring that it meets the necessary performance standards.

### Font Awesome

- **Library**: [Font Awesome](https://fontawesome.com/)
- **Purpose**: Font Awesome is a popular icon toolkit that provides a wide range of icons.
- **Usage**: Font Awesome is used in SocialOrange to add icons to various UI components, enhancing the visual appeal and user experience.

### Google Fonts

- **Library**: [Google Fonts](https://fonts.google.com/)
- **Purpose**: Google Fonts is a library of free and open-source web fonts.
- **Usage**: Google Fonts is used in SocialOrange to apply custom fonts to the application, ensuring a consistent and attractive typography.

### Bootstrap

- **Library**: [Bootstrap](https://getbootstrap.com/)
- **Purpose**: Bootstrap is a popular CSS framework for developing responsive and mobile-first websites.
- **Usage**: Bootstrap is used in conjunction with React-Bootstrap to style various components and ensure a responsive design.

By leveraging these libraries, SocialOrange ensures a robust, efficient, and visually appealing front-end that enhances the overall user experience.

## React Component Usage

### Introduction

Reusable components are a fundamental concept in React that allows developers to build modular, maintainable, and scalable applications. By creating components that can be reused across different parts of the application, we can reduce code duplication, improve consistency, and make the codebase easier to manage.

### Project Structure

The SocialOrange project is organized into several key directories and files. The main source code is located in the `src` directory, which contains the following subdirectories:

- `components`: Contains reusable UI components.
- `pages`: Contains page-level components that represent different views of the application.
- `contexts`: Contains context providers for managing application state.
- `hooks`: Contains custom React hooks.
- `api`: Contains files related to API interactions.

### Key Reusable Components

### 1. Avatar

The `Avatar` component is used to display user profile images. It is a simple, reusable component that can be used across different parts of the application.

**File:** `src/components/Avatar.js`

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src, height = 50, width = 50 }) => {
  return <img src={src} alt="avatar" height={height} width={width} />;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Avatar;
```

### 2. Button

The `Button` component is a customizable button that can be used throughout the application. It supports different styles and sizes.

**File:** `src/components/Button.js`

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.module.css';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button className={`${styles.Button} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
```

### 3. MoreDropdown

The `MoreDropdown` component provides a dropdown menu with options for editing and deleting items. It is used in various parts of the application where such functionality is needed.

**File:** `src/components/MoreDropdown.js`

```javascript
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';

const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MoreDropdown;
```

### Best Practices

1. **Component Reusability:** Create components that can be reused across different parts of the application. Avoid hardcoding styles and content within components.

2. **Prop Validation:** Use PropTypes to validate the props passed to components. This helps catch errors early and improves the readability of the code.

3. **Separation of Concerns:** Keep components focused on a single responsibility. Avoid mixing presentation and logic within the same component.

4. **Styling:** Use CSS modules or styled-components to scope styles to individual components. This helps prevent style conflicts and makes it easier to manage styles.

5. **Documentation:** Document the purpose and usage of each component. This helps other developers understand how to use the components and promotes consistency.

### Examples

### Using the Avatar Component

```javascript
import React from 'react';
import Avatar from '../components/Avatar';

const UserProfile = ({ user }) => {
  return (
    <div>
      <Avatar src={user.profileImage} height={100} width={100} />
      <h2>{user.name}</h2>
    </div>
  );
};

export default UserProfile;
```

### Using the Button Component

```javascript
import React from 'react';
import Button from '../components/Button';

const SubmitButton = () => {
  const handleSubmit = () => {
    // Handle submit logic
  };

  return (
    <Button onClick={handleSubmit} className="btn-primary">
      Submit
    </Button>
  );
};

export default SubmitButton;
```

### Conclusion

By following the best practices and using reusable components, we can build a more maintainable and scalable React application. The SocialOrange project leverages reusable components to ensure consistency and reduce code duplication. Understanding and utilizing these components will help you contribute effectively to the project.

For more information on React and reusable components, refer to the [React documentation](https://reactjs.org/docs/components-and-props.html).

---

This guide should help you understand the use of reusable React components in the SocialOrange project. If you have any questions or need further assistance, feel free to reach out for support.

## API

- When you have cloned the SocialOrange repository, you should clone another repository and that is SocialOrange-api and it can be found here: ``https://github.com/AndersH82/socialorange-api.git``

**How the API Django Rest Framwork works**

Django REST Framework (DRF) is a powerful toolkit designed to simplify the process of building RESTful APIs with Django. It integrates seamlessly with Django's core features, such as models, views, and URLs, making it straightforward to create a RESTful API. Here's a breakdown of how DRF works:

- Serializers: DRF uses serializers to convert Django QuerySets and model instances to JSON (and other formats like XML and YAML) for serialization, and from JSON for deserialization. Before deserializing incoming data, serializers validate the data's structure, ensuring it matches the expected format. This process is crucial for ensuring that the data communicated over the API is uniform and universal, making it easier for other systems to consume.

- Views and ViewSets: DRF views handle RESTful HTTP requests and responses, similar to traditional Django views but designed to return JSON responses instead of HTML templates. ViewSets, which are a type of view, allow you to combine related views into a single class, reducing the amount of code needed and keeping URLs consistent. ViewSets use actions like .list() and .create() instead of method handlers like .get() and .post(), simplifying the process of handling different HTTP methods.

- Routers: Routers in DRF map views to URLs, making it easier to expose your API endpoints. This mapping is crucial for defining the routes that clients will use to interact with your API.

- Authentication and Permissions: DRF provides comprehensive mechanisms for securing your API endpoints. It includes various authentication classes, such as TokenAuthentication, SessionAuthentication, and JSONWebTokenAuthentication. Permissions can be set to ensure that only authenticated users can access certain endpoints, and these permissions can be customized to fit specific requirements.

- Development and Deployment: DRF simplifies the development cycle of an application, from creating models and serializers to setting up views and URLs. It also supports test-driven development, allowing developers to build robust and secure APIs efficiently. Once developed, DRF APIs can be deployed using various methods, including Docker, to ensure they are accessible to clients.

## Tests

The project includes tests for validation, such as HTML and CSS validation. To run the tests, use the following command:
```bash
npm test
```

### Validation
- HTML https://validator.w3.org/nu/?doc=https%3A%2F%2Fsocialorange-8e2adf553f1c.herokuapp.com%2F

- CSS https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsocialorange-8e2adf553f1c.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv

## Deployment


### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Git](https://git-scm.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Python](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/)

### Deployment Steps

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/socialorange.git
cd socialorange
```

### 2. Set Up the Backend

#### Install Python Dependencies

Navigate to the backend directory and install the required Python packages:

```bash
cd backend
pip install -r requirements.txt
```

#### Apply Migrations

Apply the database migrations:

```bash
python manage.py migrate
```

#### Create a Superuser

Create a superuser to access the Django admin panel:

```bash
python manage.py createsuperuser
```

### 3. Set Up the Frontend

Navigate to the frontend directory and install the required npm packages:

```bash
cd ../frontend
npm install
```

### 4. Prepare for Heroku Deployment

#### Create a Heroku App

Log in to Heroku and create a new app:

```bash
heroku login
heroku create socialorange
```

#### Set Up Heroku Buildpacks

Set the buildpacks for Python and Node.js:

```bash
heroku buildpacks:set heroku/python
heroku buildpacks:add --index 1 heroku/nodejs
```

#### Configure Environment Variables

Set the necessary environment variables for your Heroku app:

```bash
heroku config:set DJANGO_SECRET_KEY='your-secret-key'
heroku config:set DJANGO_DEBUG=False
heroku config:set ALLOWED_HOSTS='.herokuapp.com'
heroku config:set DATABASE_URL='your-database-url'
```

#### Add Heroku Postgres

Add the Heroku Postgres add-on to your app:

```bash
heroku addons:create heroku-postgresql:hobby-dev
```

### 5. Deploy to Heroku

#### Commit Your Changes

Ensure all your changes are committed:

```bash
git add .
git commit -m "Prepare for Heroku deployment"
```

#### Push to Heroku

Push your code to Heroku:

```bash
git push heroku main
```

#### Run Migrations on Heroku

Run the database migrations on Heroku:

```bash
heroku run python manage.py migrate
```

#### Create a Superuser on Heroku

Create a superuser on Heroku:

```bash
heroku run python manage.py createsuperuser
```

### 6. Access Your Deployed App

Your app should now be deployed and accessible at `https://socialorange.herokuapp.com/`.

## Additional Resources

- [Heroku Documentation](https://devcenter.heroku.com/)
- [Django Documentation](https://docs.djangoproject.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Troubleshooting

If you encounter any issues during deployment, check the Heroku logs for more information:

```bash
heroku logs --tail
```

For further assistance, refer to the documentation links provided above or seek help from the community.

---

This guide should help you deploy your SocialOrange project to Heroku. If you have any questions or run into issues, feel free to reach out for support.

## Configuration

The project includes several configuration settings:

- `Browserslist`: Specifies the target browsers for the application.
- `ESLintConfig`: Extends the base ESLint configuration for a React app and includes a custom configuration for Jest.
- `Engines`: Specifies the required versions of Node.js and npm for the application.

## Wireframe

Sign up        |  Sign in
:-------------------------:|:-------------------------:
![Sign up](readmeimages/page1.png)  |  ![Sign in](readmeimages/page2.png)

Profile        |  Home
:-------------------------:|:-------------------------:
![Profile](readmeimages/page4.png)  |  ![Home](readmeimages/page3.png)
<div align="center" style="font-size:20px;">
Post
</div>
<p align="center">
  <img src="readmeimages/page6.png" alt="mobile view">
</p> 
<div align="center" style="font-size:20px;">
Mobile view
</div>
<p align="center">
  <img src="readmeimages/page5.png" alt="mobile view">
</p>

## Features Pictures

Sign up        |  Sign in
:-------------------------:|:-------------------------:
![Sign up](readmeimages/signuppage.png)  |  ![Sign in](readmeimages/signinpage.png)

Profile        |  Home
:-------------------------:|:-------------------------:
![Profile](readmeimages/profilepage.png)  |  ![Home](readmeimages/homepage.png)

<div align="center" style="font-size:20px;">
Post
</div>      

![Profile](readmeimages/uploadpage.png)
<div align="center" style="font-size:20px;">
Mobile view
</div>
<p align="center">
  <img src="readmeimages/mobilepage.png" alt="mobile view">
</p>

## Color Scheme

<div align="center" style="font-size:20px;">
Colorsheme
</div>
<p align="center">
  <img src="readmeimages/colorsheme.png" alt="colorsheme">
</p>

## Language

<div align="center" style="font-size:20px;">
Language
</div>
<p align="center">
  <img src="readmeimages/language.png" alt="language">
</p>

## Features

- Post Pictures: Share your life's moments with the world. Whether it's a    beautiful sunset, a delicious meal, or a funny meme, our platform is the perfect place to showcase your creativity and personality.
- Comments: Engage with your friends and the community. Leave comments on posts, share your thoughts, and start conversations.
- Make Friends: Connect with like-minded individuals from around the globe. Explore profiles, send friend requests, and build a network of friends.
- Like Pictures: Express your appreciation for others' content. Like posts that inspire you, make you smile, or simply make you feel good.

## Future functions

Block users

We are planning to introduce a feature that allows users to block other users. This feature will enable users to prevent unwanted interactions and maintain a safe and respectful environment within the community.

Benefits:

- Enhances user safety and privacy.
- Reduces distractions and spam.
- Improves the overall user experience by focusing on meaningful interactions.

Implementation:

- Users will have the option to block other users directly from their profiles.
- Blocked users will not be able to send messages, comments, or access personal information of the blocked user.
- Admins will have the ability to review and manage block requests to ensure fairness and compliance with community guidelines.

Direct Chat with friends

We aim to introduce a direct chat feature that allows users to communicate privately with their friends or colleagues. This feature will facilitate quick and confidential discussions, enhancing collaboration and support within the community.

Benefits:

- Facilitates quick and confidential communication.
- Enhances collaboration and support among friends and colleagues.
- Reduces the need for public discussions, ensuring privacy and confidentiality.

Implementation:

- Users will be able to initiate a direct chat with friends or colleagues from their profile or within the community.
- Direct chats will be accessible only to the participants, ensuring privacy and confidentiality.
- Users will have the option to share chat history with friends or colleagues for future reference or collaboration.


## Bugs/Errors

I have tried to fix these errors, but I cannot remove them.

<p align="center">
  <img src="readmeimages\errroooossss.png" alt="errors">
</p>

I have been able to access my app all the time until now but now I can't see everything in the app. Don't know what happened. Trying everything and cant get full access to my frontend.

I get 401 and 404 errors and have tried to solve the problem but can't find a solution.

## Program Used

The project uses the following programs and tools:

- Gitpod for coding
- Heroku for deployment
- GitHub for a web-based interface
- Balsamiq Wireframe for making wireframes
- Copilot AI for creating images

## Credits

- Youtube - research for ideas and help
- Phind - for help with codes
- Slack community - for the help of students
- Emil Jadersten_5P on Slack - Was of great help
- Akshat_Garg_mentor on Slack - Mentor

## Acknowledgements

The project invites users to join the community and be a part of the fun, connecting with friends, sharing experiences, and exploring new content.