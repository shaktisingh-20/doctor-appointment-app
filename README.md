# Doctor Appointment App - Curely

A full stack MERN application for booking doctor appointments online.

## Features

- Patient registration and login
- Doctor listing and profiles
- Book and manage appointments
- Admin panel for managing doctors and appointments
- JWT based authentication

## Tech Stack

**Frontend:** React, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT  

## Project Structure
```
curely/
   📁 admin        - Admin panel
   📁 backend      - Node/Express server
   📁 clientside   - Patient facing React app
```

## Getting Started

### Backend
```bash
cd backend
npm install
npm run dev
```

### Client
```bash
cd clientside
npm install
npm run dev
```

### Admin
```bash
cd admin
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in backend folder:
```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
```

## Author

Shakti Singh  
[GitHub](https://github.com/shaktisingh-20)