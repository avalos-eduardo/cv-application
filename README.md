# CV Application
https://cv-application-dww.pages.dev/

## What I Learned & Used For This Project
- Mapping Data to Render UI
  - For this project, I created a dataset with arrays containing objects that defined HTML attributes for each element in my form.
  - I then mapped over these arrays to dynamically generate JSX that would display each element (labels, inputs, etc.) within their respective form groups.

- Using Components & Props
  - Working on this project helped me familiarize myself with the process of passing props between parent and child components.
  - In child components such as EditEducation, I used these props to link the form elements to the useState and button functionalities defined in the parent App component.
 
- useState Hook
  - In this project, I utilized the useState Hook to dynamically render the values entered in the child component inputs and display them on the created resume.
  - The inputs were initialized with empty string values using useState and were updated using the set function and e.target to track the correct input.
  - The contents of these useState hooks are then passed on as props to the child components responsible for rendering the resume information such as Education and Experience.

## Ideas for Future Improvement
- Splitting the CSS into more files to be clear about which components the CSS is being used for
- Adding functionality to edit or delete entries
- Improving on Git workflow
  - Commit more often for project milestones and create meaningful commit messages
