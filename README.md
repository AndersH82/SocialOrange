
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

## React Component Usage

The main components used in the application include:

- `NavBar`: The navigation bar component.
- `SignInForm`: The sign-in form component.
- `SignUpForm`: The sign-up form component.
- `PostsPage`: The posts page component.
- `PostPage`: The post detail page component.
- `PostEditForm`: The post edit form component.
- `ProfilePage`: The profile page component.
- `ProfileEditForm`: The profile edit form component.
- `UsernameForm`: The username edit form component.
- `UserPasswordForm`: The user password edit form component.
- `ProfileList`: The profile list component.
- `NotFound`: The not found page component.

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

The project is deployed using Heroku. To deploy the application, follow these steps:

1. Install the Heroku CLI.
2. Log in to your Heroku account:
   ```bash
   heroku login
   ```
3. Create a new Heroku application:
   ```bash
   heroku create
   ```
4. Push the code to Heroku:
   ```bash
   git push heroku main
   ```

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
  <img src="readmeimages/errors.png" alt="errors">
</p>

I have been able to access my app all the time until now but now I can't see everything in the app. Don't know what happened. 

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