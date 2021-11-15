# Lab 8 - Starter
1. I would select option 1 so that the tests run whenever I push to Github. This makes the most sense as it allows me to not worry about testing like option 2 does, but also means that I get tests during development unlike 3. 
2. No you would use unit tests since those are meant to capture the output of function while end-to-end testing is meant for user actions.
3. No I would not use a unit test for this. For sending a message I would need to have access to the text area and the button that the user
would type in and then send the message with, respectively. This would involve emulating a user action and this is where end-to-end testing
using puppeteer would come into play. 
4. It is possible that a unit test could help. This function could potentially track the length of the text area box and output false to some sort of keepTyping boolean variable when the character limit is reached. A unit test could assert that this is the case. <br>
However, a UI test would probably be more beneficial since the program could write in the text area and then see if writing is possible once that 80 character limit is reached. 