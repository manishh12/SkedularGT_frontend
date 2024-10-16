# SkedularGT Frontend

Manish Kumar Gupta: IIT2021074

## Description
This is the frontend application for the Skedulargt project, a scheduling system for sports facilities. It's built with React and Vite, featuring a dynamic scheduling interface, user management, and booking functionality.


## Deployed Applications
- Frontend: https://skedular-gt-frontend.vercel.app/
- Backend: https://skedulargt.onrender.com/
## Images
![image](https://github.com/user-attachments/assets/769b7aab-e27b-4f31-a50a-f7786e410ebe)

![image](https://github.com/user-attachments/assets/98518818-ae5b-40de-8564-b93916d110e1)

![image](https://github.com/user-attachments/assets/3b67bb6b-2e68-4deb-ad53-1ad0dd6269cd)
![image](https://github.com/user-attachments/assets/4a9a2691-e9f6-4740-85ac-e4c4c61bba3b)
![image](https://github.com/user-attachments/assets/c98f377b-5ebe-4442-a45d-07969ab4ccb1)
![image](https://github.com/user-attachments/assets/249f8e1b-5ad3-4b47-80fa-b7ceb9206458)


## Prerequisites
To run this project, you need to have the following installed:
- Node.js (version compatible with React 18.3.1)
- npm (comes with Node.js)

## Setup and Installation
1. Clone the repository:
   ```
   git clone https://github.com/manishh12/SkedularGT_frontend
   ```
2. Navigate to the project directory:
   ```
   cd skedulargt-frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
To run the application in development mode:

```
npm run dev
```

This will start the Vite development server.

## Building for Production
To build the application for production:

```
npm run build
```

This will generate a production-ready build in the `dist` directory.

## Linting
To run the linter:

```
npm run lint
```

## Preview Production Build
To preview the production build locally:

```
npm run preview
```

## Project Structure
The project consists of several key components:
- `BookingCard.jsx`: Displays individual booking information
- `BookingModal.jsx`: Handles the creation of new bookings
- `ScheduleTable.jsx`: Main component for displaying and managing the schedule
- `Sidebar.jsx`: Navigation component
- `SignupModal.jsx`: Handles new customer registration

## Technologies Used
- React 18.3.1
- Vite 5.4.8
- Tailwind CSS 3.4.14
- Axios for API requests
- React DatePicker for date selection
- React Toastify for notifications

## API Integration
The application interacts with a backend API running on `http://localhost:4040`. Ensure the backend server is running and accessible.

## Assumptions and Limitations
- This project uses Vite as the build tool, which may have different configurations compared to Create React App.
- The project uses ESLint for code linting, ensure you have compatible IDE plugins for the best development experience.
- The application assumes a specific data structure for centers, sports, and bookings from the backend API.

## Special Instructions
- Make sure to set up environment variables for any API endpoints or sensitive information.
- The project uses Tailwind CSS for styling. Customize the `tailwind.config.js` file for any project-specific design tokens.

