📖Bloggi - Personal Blog Platform

frontend-npm run dev

backend-npm start

login credentials for
👉admin
email-admin@gmail.com
password-admin@123

👉user
email-test@gmail.com
password-test@123

or

do the simple registration and can login with credentials

Overview

Bloggi is a modern web application where users can explore, read, and engage with articles on various topics, while admins can manage content easily. It’s built using React (Vite) for the frontend, Node.js & Express for the backend, and MongoDB for data storage.

Features
👉 User & Admin Authentication

Implemented JWT (JSON Web Tokens) for secure authentication.

Users and admins can log in and receive a token for session validation.

Tokens are verified for each protected route to ensure security.

👉Role-Based Access Control (RBAC)

Users have roles: admin or user.

Admins can add blogs, while regular users can only read blogs.

Created Protected route so the admin can add the blogs

checks the user role before allowing access to admin routes.

👉Tech Stack

Frontend: React, Vite, CSS, HTML, JavaScript

Backend: Node.js, Express

Database: MongoDB
