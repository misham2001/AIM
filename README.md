# 🙏 Ashwas Church of God - Ministry Website

A modern, responsive church website built with React, TypeScript, and Vite. Features an interactive photo gallery, event listings, and a prayer request submission system with email notifications.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4?style=flat&logo=tailwindcss)

---

## ✨ Features

- **🏠 Hero Section** - Auto-scrolling image carousel with welcome message
- **📅 Events** - Display upcoming church events
- **📸 Photo Gallery** - Interactive circular gallery with smooth animations
- **🙏 Prayer Request** - Submit prayer requests via contact form
- **📧 Email Notifications** - Backend service sends prayer requests to church email
- **📱 Responsive Design** - Optimized for all screen sizes

---

## 🏗️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool & Dev Server |
| TailwindCSS | Styling |
| Framer Motion | Animations |
| React Router | Navigation |

### Backend
| Technology | Purpose |
|------------|---------|
| Express.js | Server Framework |
| Nodemailer | Email Service |
| dotenv | Environment Variables |
| CORS | Cross-Origin Requests |

---

## 📁 Project Structure

```
AIM/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx            # Hero section with image carousel
│   │   ├── Events.tsx          # Events display
│   │   ├── PhotoGallery.tsx    # Photo gallery component
│   │   ├── CircularGallery.tsx # Animated circular gallery
│   │   ├── Gallery.tsx         # Gallery wrapper
│   │   ├── PrayerRequest.tsx   # Prayer request form
│   │   ├── Footer.tsx          # Site footer
│   │   └── TextParallaxContentExample.tsx
│   ├── Assert/
│   │   └── Image/              # Local images
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── backend/
│   ├── server.js               # Express server
│   ├── .env                    # Environment variables
│   └── package.json            # Backend dependencies
├── index.html                  # HTML entry
├── package.json                # Frontend dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AIM
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Configure environment variables**
   
   Create/update `backend/.env` file:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
   
   > ⚠️ **Note**: For Gmail, you need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

---

## 💻 Running the Application

### Start the Frontend (Development Server)

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Start the Backend (Email Server)

```bash
cd backend
node server.js
```

The backend API will be available at `http://localhost:5000`

---

## 📜 Available Scripts

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🔌 API Endpoints

### POST `/send-email`

Sends a prayer request email to the church.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Please pray for..."
}
```

**Response:**
```json
{
  "message": "Email sent successfully!"
}
```

---

## 🎨 Customization

- **Colors & Theme**: Modify `tailwind.config.js`
- **Hero Images**: Update images in `src/Assert/Image/` and `src/components/Hero.tsx`
- **Church Email**: Update the recipient email in `backend/server.js`

---

## 📝 License

This project is private and maintained for Ashwas Church of God Ministry.

---

## 🤝 Contributing

For any changes or improvements, please contact the development team.

---

<p align="center">
  Made with ❤️ for Ashwas Church of God Ministry
</p>
