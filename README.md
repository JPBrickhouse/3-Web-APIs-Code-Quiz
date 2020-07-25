# 4-Web-APIs-Code-Quiz

## Homework 4 Introduction
We were tasked with creating an interactive quiz, consisting of multiple choice questions. When the start button was pushed, a countdown timer would begin. Answering questions correctly would not impact the countdown timer, but answering questions incorrectly would subtract additional time from the countdown timer. The game would be end if all the questions were completed or the countdown timer reached zero. Following completion of the game, the user could enter their name, which would be saved in conjunction with their score (which was the time remaining as they completed the quiz). This high score list could be viewed or cleared.

## Overall Notes

### index.html
Several divs have been introduced to organize and group content; all of these utilize Bootstrap to enable responsive design functionality.

#### "Navigation" Bar
- While not a formal navigation bar, this top bar was permanently affixed to the top of the page.
- It always displayed the time remaining and a link to view the high scores

#### id="introContent"
- When the page first loads, this div is displaying
- It introduces the quiz and explains the rules
- Upon pushing the start button, the style of this div switches to "display:none" and the quizContent loads
- The countdown timer also begins

#### id="quizContent"
- The javascript code loads the question and answer choices onto the page and into the buttons, respectively



- Upon completion of the quiz...



#### id="endContent"



#### id="restartContent"



### highscores.html

Several divs
Clearing the unordered list entirely


### style.css



### script2.js
The bulk of the content for this application can be found in the script2 javascript file.

Numerous functions



## Final Thoughts

