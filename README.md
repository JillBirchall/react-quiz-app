# Description

A trivia quiz created using ReactJS and Styled components.

There is a choice of categories, difficulties and number of questions. The category list is dynamically generated from the API. The maximum number of questions is 50, or the maximum number of questions available for that category if lower.

Each question has a 15 second timer, and the score awarded for the correct answer varies depending on the time left on the timer:

0 to 5 seconds: 10 points
6 to 10 seconds: 20 points
11 to 15 seconds: 30 points

After an answer is clicked, it is highlighted in green if it is the correct answer, otherwise it is highlighted in red. If an incorrect answer is selected, the correct answer flashes in green. The score increment will also be shown for any question answered correctly.

The final score is displayed at the end of the quiz, with an option to play again.

This app also features a loader and an error message is displayed in cases where data cannot be retrieved from the API for any reason.

The questions used in this quiz are taken from the Open Trivia DB API. These questions are licenced under a Creative Commons Attribution-ShareAlike 4.0 International license http://creativecommons.org/licenses/by-sa/4.0/
