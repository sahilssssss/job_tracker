# Student Job Tracker
# LiveDemo - [Student Job Tracker](https://job-tracker-omega-seven.vercel.app/)


A full-stack web application designed to help students track and manage their job applications efficiently.

## 📋 Overview

Student Job Tracker allows users to easily manage their job application process from start to finish. Track applications, interviews, offers, and rejections all in one place with a clean, intuitive interface that updates in real-time.

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

## 🏗️ Project Structure

### Frontend Components
- **JobForm**: Form for submitting new job applications
- **JobList**: Displays list of job applications with update/delete options
- **JobFilter**: Filters job applications by status or date
- **StatusCounter**: Shows count of applications by status

### Backend API Endpoints
- **GET /api/jobs**: Fetch all job applications
- **POST /api/jobs**: Create a new job application
- **PUT /api/jobs/:id**: Update an existing job application
- **DELETE /api/jobs/:id**: Delete a job application

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

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
