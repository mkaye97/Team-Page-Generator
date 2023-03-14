# Team Page Generator

## Description
```md
This application will accept input from a user to create an HTML page to centralize data about a development team. When it is run from the command line it will first prompt the team manager for their name, email, employee ID, and office number. From there the manager will have the options to add an engineer, and intern, or complete data entry and create the HTML file.

Engineers will be prompted to provide their name, email, github profile, and employee ID number. An intern will be prompted for their name, email, employee ID, and the name of their school or university.
```

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Links

Github: https://github.com/mkaye97/Team-Page-Generator

Video Link: https://drive.google.com/file/d/1a1wHZryljqHKerMylKuUx-esnQLJc5tb/view