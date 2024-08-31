# YourHR Job Search Service

YourHR is a job search service designed to help job seekers find ideal job roles based on their qualifications and preferences. This project includes a web application with a signup feature that allows users to submit their resumes and personal information.

## Features

- **User Signup:** Allows job seekers to sign up by providing personal information and uploading their resume.
- **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.
- **Thank You Page:** Displays a confirmation message after successful signup.
- **Form Validation:** Ensures that all required fields are filled and provides feedback to users.
- **File Upload:** Supports uploading PDF resumes with a preview feature.

## Tech Stack

- **Frontend:** React, Vite, Material UI
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **File Storage:** Multer (for handling file uploads)
- **Styling:** Material UI for responsive design and component styling

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB server running or a MongoDB Atlas account.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/yourhr.git
   cd yourhr
Install frontend dependencies:

Navigate to the frontend directory and install the dependencies:

bash
Copy code
cd frontend
npm install
Install backend dependencies:

Navigate to the backend directory and install the dependencies:

bash
Copy code
cd ../backend
npm install
Set up environment variables:

Create a .env file in the backend directory with the following variables:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
For security reasons, ensure the .env file is added to .gitignore.

Run the application:

Start the backend server:

cd backend
npm run dev

In a new terminal, start the frontend development server:
cd frontend
npm run dev


Usage
Sign Up: Navigate to /signup to create a new account. Fill out the form and upload your resume.
Thank You Page: After successful registration, you will be redirected to /thank-you.



### Explanation:
- **Project Overview:** Provides a brief description of the project and its features.
- **Tech Stack:** Lists the technologies used.
- **Getting Started:** Instructions for setting up and running the project.
- **Usage:** Describes how to use the application.
- **Contributing:** Information on how others can contribute to the project.
- **License:** Specifies the license type (adjust if using a different license).
- **Contact:** Provides a way for users to reach out with questions or feedback.
