# Fullstack Task - Manish

# Backend
1. To install the project dependencies, run: `npm install`
2. Create a `.env` file using the provided sample in `.env.example`
3. To run the project, use: `npm run dev`


# Frontend

# Backend
1. To install the project dependencies, run: `npm install`
2. To run the project, use: `npm run dev` or `npm start`



# To check backend API Working or not run API


# POST Task

curl --location 'http://localhost:3000/addTask' \
--header 'Content-Type: application/json' \
--data '{
  "task": "23:36"
}
'

# GET Task

curl --location 'http://localhost:3000/fetchAllTasks'
