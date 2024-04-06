## Running the Application:

Make sure Node.js is installed on your computer.

Open your terminal and navigate to the repository directory.

install all dependencies run:

```
    npm install
```

Start the project:

```
    npm start
```

Access the application by opening your web browser and going to localhost:3000.

I have added my API key, no need to do extra configuration.


        I added a test case just to show that I can do unit testing. For demonstration, 
        I included one unit test for a component with API mock and another one for functional testing.

Functionality added :

    1. react-query provides an inbuilt cache mechanism for 5 min, I have added a cache time of 5 days.
    
    2. added debouncing to control API calls on search 
    
    3. written every logic without using the inbuilt library (carousel and pagination)
    
    4. added a toggle button to switch the background color
    
    5. if the search is active, the carousel click is inactive.
    
    6. separated components are a way to reduce the number of the re-render and API calls.
    
    7. if text is bigger/longer, add substring with "...", and on over on text, will able to see whole text data.

Known issue: input text taking the empty string 


