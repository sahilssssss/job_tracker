# Student Job Tracker
# LiveDemo - [Student Job Tracker](https://job-tracker-omega-seven.vercel.app/)

A full-stack web application designed to help students track and manage their job applications efficiently.

## 📋 Overview

Student Job Tracker allows users to easily manage their job application process from start to finish. Track applications, interviews, offers, and rejections all in one place with a clean, intuitive interface that updates in real-time.

## 🗂️ The Code Structure

```
student-job-tracker/
├── backend/                          # Backend related files
│   ├── controllers/                  # Controller functions for job operations
│   │   └── jobController.js          # Handle CRUD operations for jobs
│   ├── models/                       # Mongoose models
│   │   └── jobModel.js               # Job schema model
│   ├── routes/                       # Express routes for APIs
│   │   └── jobRoutes.js              # Routes for job-related API endpoints
│   ├── server.js                     # Main server file for Express setup
│   └── .env                          # Environment variables (e.g., MongoDB URI, port)
│
├── frontend/                         # Frontend related files (React app)
│   ├── public/                       # Public folder for static files (index.html, favicon etc.)
│   ├── src/                          # Source folder containing React components
│   │   ├── api.js                    # Axios instance for API calls
│   │   ├── components/               # React components
│   │   │   ├── JobForm.jsx           # Form to add new jobs
│   │   │   ├── JobCard.jsx           # Form to add new jobs
│   │   │   ├── JobList.jsx           # Displays the list of jobs
│   │   │   ├── JobFilter.jsx         # Filters for jobs based on status/date
│   │   │   └── StatusCounter.jsx     # Counter displaying job status counts
│   │   ├── App.js                    # Main component for the app (JobTracker logic)
│   │   ├── index.js                  # Entry point for the React app
│   │   └── styles/                   # CSS styles for the app
│   │       └── all css files         # Global styles for the app
│   └── package.json                  # Frontend dependencies and scripts
│
├── .gitignore                        # Git ignore file (node_modules, build, etc.)
├── package.json                      # Main package file for both backend and frontend
└── README.md                         # Project documentation
```

## ✨ Features

- **Track Job Applications**: Add, update, and delete job applications
- **Filter by Status**: View applications based on their status (Applied, Interview, Offer, Rejected)
- **Date Filtering**: Filter applications based on application date
- **Real-Time Updates**: Automatically updates the job list as you modify entries
- **Status Counter**: Visual representation of applications by status

## 🛠️ Tech Stack

### Frontend
- React.js (with React Hooks)
- CSS for styling

### Backend
- Node.js
- Express.js

### Database
- MongoDB with Mongoose ODM

### Hosting
- Frontend: Vercel
- Backend: Render

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (local or cloud)
- Git

### Installation

#### Clone the repository
```bash
git clone https://github.com/your-username/job_tracker.git
cd job_tracker
```

#### Backend Setup
```bash
cd backend
npm install

# Create .env file with:
# MONGO_URI=your-mongodb-connection-string
# PORT=5000

npm start
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

The application will be available at `http://localhost:3000`

## 📱 Usage

1. **Add a new job application** by filling out the job form
2. **View all applications** in the job list
3. **Filter applications** by status or date
4. **Update application status** as you progress through the hiring process
5. **Delete applications** that are no longer relevant

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
