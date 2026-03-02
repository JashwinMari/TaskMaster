# TaskMaster – Full Stack Task Management Application

TaskMaster is a full-stack task management web application built using React for the frontend and Django + Django REST Framework for the backend.

The application allows users to efficiently manage their daily tasks by organizing them based on specific dates.

🔹 Key Features

✅ Create tasks assigned to a specific date

✏️ Update existing tasks

🗑️ Delete tasks

✔️ Mark tasks as completed

🔄 Mark tasks as undone

📅 View and list all dates that have assigned tasks

🔎 Fetch and filter tasks dynamically via API

🌐 RESTful API integration between frontend and backend

🔹 Tech Stack

Frontend

React (Hooks, useEffect, Fetch API)

Modern UI styling (Tailwind CSS)

Backend

Django

Django REST Framework

SQLite (development database)

🔹 Architecture

React communicates with Django through REST APIs.

Backend handles CRUD operations and date-based task filtering.

Frontend dynamically renders tasks and date-based task summaries.

Proper HTTP status codes are implemented for API responses.

CORS configuration enables secure frontend-backend communication.
