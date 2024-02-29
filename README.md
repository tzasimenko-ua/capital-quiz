# Capitals of the World Quiz

The Capitals of the World Quiz is a game designed to test your knowledge about the capitals of different countries. This quiz is intended to help you confirm your geographical knowledge and, at the same time, provide a relaxing and enjoyable experience. Answer questions about various capital cities and see how well you know the world!

![Responsice Mockup](/assets/images/readme_assets.md/main.png)

## Сapitals Quiz" Game Overview:

- Start Game: Initiate the game by clicking "Start Game."
- Questions: Receive questions about world capitals.
- Answer: Choose the correct answer.
- Next Question: Move to the next question with the "Next" button.
- Scoring: Earn points for correct answers; retry for incorrect ones.
- Progress Tracking: Monitor correct answers and overall progress.
- Game Completion: Conclude the game after all questions; retry if desired.
- Read Rules: Access game rules by clicking "Rules."
- These features provide an engaging and educational experience for users to test their knowledge of world capitals.

## Technologies

1. GitHub - source code hosting and deployment.
2. HTML - to create a basic site.
3. CSS - to create front-end and to give a great user experience.
4. JavaScript - to create a dynamic and interactive web page to interact with visitors.


## UX

### Strategy

This quiz is designed to help you test your knowledge of world capitals while providing an enjoyable and engaging experience. The website allows you to choose the correct capital from the provided options.

### Scope

The World Capitals Quiz is created for geography enthusiasts and anyone looking to expand their knowledge of the capitals of various countries. It offers interesting questions and tracks your progress, allowing you to see your score at the end of the quiz.

### Structure

1. index.html: Main HTML file for the game.
2. style.css: CSS file for styling the game interface.
3. script.js: JavaScript file for game logic and interactivity.


## Features

### Existing Features

- **Header**

- To set a consistent title for all pages. Added header with game name
- Displaying the game name prominently reinforces the branding of your quiz. It contributes to building a recognizable and memorable brand, especially if users navigate between different sections or pages.
  ![Header](/assets/images/readme_assets.md/2.png)

  - **Capitals Quiz: Description of the Main Page**

  - The main page of the web application "Capitals Quiz" serves as the starting screen where users can choose between reading the game rules or starting the quiz.

  ### Heading:

The page heading "Capitals of the World Quiz" is located at the top of the page. It is displayed in a large font and serves as a key element to attract the user's attention.

### "Read Rules" Button:

The button labeled "Read Rules" allows users to familiarize themselves with the game rules before starting the quiz. Clicking this button redirects users to the rules page.

### "Start Game" Button:

The "Start Game" button is designed to initiate the quiz. Upon clicking this button, users proceed to the gaming process where they will answer questions about the capitals of various countries.

![Main Page](/assets/images/readme_assets.md/3.png)

 - **Instructions for Use**
  - Describing the game rules is a crucial step in establishing a clear understanding of the conditions and limitations, ensuring consistency and fairness throughout the gameplay.
  - It not only outlines the rules but also makes players participants in a uniform gaming experience, contributing to high-quality entertainment and satisfaction from participation.

  ![Instructions](/assets/images/readme_assets.md/4.png)


  - **Additional navigation button**
   - An additional navigation button enhances user experience by providing a convenient and direct pathway to specific content or functionality, promoting ease of exploration and interaction within the website. 
   - This feature contributes to improved accessibility, allowing users to navigate seamlessly and efficiently, thereby enhancing overall satisfaction and engagement with the platform.

   ![Instructions](/assets/images/readme_assets.md/5.png)


- **Game area**
   - s This function ensures the display of the game area, presenting users with an organized and visually appealing layout to engage with quiz questions. The defined styles create a comfortable and focused environment, enhancing the overall gaming experience.
    ![Game area](/assets/images/readme_assets.md/6.png)

 - By dynamically changing the background color of selected options, an improved user experience is created. Visual feedback provides instant confirmation of the user's choice, making the quiz-solving process more intuitive and enjoyable.

  ![Background color ](/assets/images/readme_assets.md/8.png)

 - The function to prevent missed selection has been implemented. This feature is a valuable feature that displays a popup when a required field is left blank. The pop-up window serves as a handy prompt, notifying players to complete all required fields before proceeding. This enhancement provides a smoother and error-free experience, helping users provide the information they need to complete the quiz smoothly.
  ![Missed selection](/assets/images/readme_assets.md/7.png)

  - A visual display of correct and incorrect answers at the bottom of the playing area provides the player with feedback on their success in the game. This feature helps the player track their progress, increases engagement and makes the gameplay more interesting and educational.

   ![Сorrect and incorrect](/assets/images/readme_assets.md/9.png)


**Finish game**
- The display of correct and incorrect answers at the bottom of the playing area provides the player with feedback on their progress in the game. This feature helps the player track their progress, increases engagement and makes the gameplay more interesting and educational.

![Сorrect and incorrect](/assets/images/readme_assets.md/10.png)

# Manual Testing Table for "Capitals Quiz" Game

| #  | Action                                       | Expected Result                       | Actual Result                         | Notes                                          |
|----|----------------------------------------------|----------------------------------------|---------------------------------------|------------------------------------------------|
| 1  | Click "Start Game"                           | Navigate to the first question        |     Points received, moved to the next                                   |                                                |
| 2  | Choose the correct answer to a question       | Receive points and move to the next    |    Received points, successfully moved to the next                                  |                                                |
| 3  | Click "Next" after answering                 | Move to the next question             |      Moved to the next question                                 |                                                |
| 4  | Select an incorrect answer                   | Mark the answer as incorrect           |      Answer marked as incorrect                                  |                                                |
| 5  | Use the "One more try" button                | Restart the game                       |     Game restarted                                   | Game completion and attempting again          |
| 6  | Navigate to the "Rules" page                 | Display the game rules                |         Game rules displayed                               |                                   
### Validator Testing

- HTML
  - No errors were returned when passing through the official W3C validator: [Home page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftzasimenko-ua.github.io%2Fcapital-quiz%2Findex.html), [Rules page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftzasimenko-ua.github.io%2Fcapital-quiz%2Frules.html).
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](http://jigsaw.w3.org/css-validator/validator?lang=uk&profile=css3svg&uri=https%3A%2F%2Ftzasimenko-ua.github.io%2Fcapital-quiz%2Findex.html&usermedium=all&vextwarning=&warning=1).

- JavaScript
  - When passing the official [(Jshin) validator](https://jshint.com/) only warnings were found

## Lighthouse Test

The utilization of the Lighthouse test, integrated into the Google Chrome browser, has significantly enhanced crucial metrics such as performance, accessibility, and SEO, achieving nearly optimal values.
![Mobile](/assets/images/readme_assets.md/11.png)
![Сomputer](/assets/images/readme_assets.md/12.png)


## Deployment
The website was deployed on GitHub Pages through the following steps:

Navigate to the "Settings" tab in the GitHub repository.
In the "Code and Automation" section on the left side of the screen, select 'Pages'.
In the "Build and Deployment" section, choose 'Deploy from a branch' for Source.
Select 'main' as the Branch and Save.
The link to the complete website is provided at the top of the page.
The deployed site will automatically update with new commits to the master branch.
You can access the live link [here](https://tzasimenko-ua.github.io/capital-quiz/index.html).

- When creating the site, I used GPT chat to check errors.
- Basic code combinations were created using information from [w3schools.com](https://www.w3schools.com/)

- I took some ideas from the [Codehal](https://www.youtube.com/watch?v=Vp8x8-reqZA&t=3556s&ab_channel=Codehal), YouTude video, 
[The WebShala](https://www.youtube.com/watch?v=J8QbjXdVl9c&ab_channel=TheWebShala), YouTude video, 
[Web Tutorial Guru](https://www.youtube.com/watch?v=Z-HLdIYHjRM&ab_channel=WebTutorialGuru), YouTude video.

### Media

The imge used as a background image is taken from Google images.
The imge for products creating by GPT
