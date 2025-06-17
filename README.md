# Task-Management-React
The React-based Task Manager app helps users manage daily tasks with features like adding, editing, deleting, and marking tasks as complete or incomplete. It supports due dates, filtering, and search, with data saved in localStorage for persistence. The interface is fully responsive across all devices.

**Task Manager Application**
The Task Manager app built in React is a simple yet functional application designed to help users manage their daily tasks efficiently. It allows users to add, edit, delete, and mark tasks as complete or incomplete. Each task includes a title, description, and due date, and the tasks are stored in the browser’s localStorage to ensure data persists across sessions. The app also provides filtering options to view all tasks, completed tasks, or only the incomplete ones, along with a search feature to quickly find specific tasks. The user interface is responsive, adapting smoothly to mobile, tablet, and desktop devices. It uses modern React features like functional components and hooks (useState, useEffect) to manage state and side effects. Overall, the app offers a clean, interactive, and user-friendly experience for basic task management.


##  Snapshot
## Desktop View
   Desktop View (https://raw.githubusercontent.com/KalyaniKumari09/Task-Management-React/main/public/desktop-view.png)
   
## Mobile View
  Mobile view (https://raw.githubusercontent.com/KalyaniKumari09/Task-Management-React/main/public/Phone-view.png)
  
## Added Task with Title, Description & Due Date 
   link (https://raw.githubusercontent.com/KalyaniKumari09/Task-Management-React/main/public/add-task.png)

**Deployed on Netlify**
** Live Demo: https://taskmanagerti.netlify.app/**

**Features:**
Add new tasks with title, description, and due date
Edit existing tasks
Delete tasks with confirmation
Mark tasks as complete/incomplete
Tasks persist using localStorage
Filter tasks by status (All/Completed/Incomplete)
Search tasks by title or description
Responsive design for all screen sizes
Clean and user-friendly UI with animation & simple background-image.

**Installation & Setup:**

Step-by-Step Setup
Create a folder named Task Management React on your desktop or any preferred location

Open terminal/command prompt and run:
npx create-react-app@latest .
(Make sure you're inside the Task Management folder before running this command.)

Start the development server:
npm start
 (This runs the app in development mode. Open http://localhost:3000 to view it in your browser.)
Build the app for production:
npm run build
 (This creates a build/ folder with the production-ready version of your app.)


**Deploying to Netlify**

Visit Netlify and sign in
Click “Add new site” : “Import an existing project”
Manually I choose file of built and upload
Click "Deploy Site"
After deploy change name of your site name 


Folder Structure

- task-manager/
  - public/
    - favicon.ico
  - src/
    - components/
      - ButtonFilter.js (Task filtering controls)
      - TaskAdd.js (Task creation form)
      - TaskItem.js (Individual task component)
      - TaskList.js (List of all tasks)
    - App.css (Global  styles)
    - App.js (Main app logic)
    - index.js (App entry point)
  - package.json (Dependencies)
  - README.md (Documentation)
  - build/ (Production build output)

** Development Approach ** 
-For the development of the Task Manager application, I adopted a modular and component-driven approach using React.js. I structured the application into logical components such as TaskAdd, TaskList, TaskItem, and ButtonFilter, with App.js managing the overall state and logic. This separation helped in maintaining clean, reusable code and    made debugging and feature updates easier. I also used React’s useState and useEffect hooks to manage tasks and persist them in the browser's localStorage, ensuring that user data remains intact even after a page reload.   


** Challenges faced and solutions implemented **
# Data Persistence
Challenge: Maintaining task state between sessions
Solution: Implemented localStorage with useEffect hook for automatic saving
# Task Filtering System
Challenge: Implementing multiple filter criteria
Solution: Created a composite filtering system combining status and search filters

** Lessons learned **      
- This project taught me a lot about structuring React applications effectively and handling real-world issues like data persistence and responsive UI. I gained hands-on experience in debugging layout problems, managing application state cleanly, and designing with accessibility and flexibility in mind. It reinforced the importance of testing across different devices and using browser developer tools effectively. Ultimately, this application gave me a stronger foundation in both front-end logic and UI/UX considerations.



