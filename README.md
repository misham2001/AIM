# 🙏 Ashwas Church of God - Ministry Website

A modern, responsive church website built with Next.js, React, and TypeScript. Features an interactive photo gallery, event listings, and a prayer request submission system with email notifications via Next.js API routes.

![Next.js](https://img.shields.io/badge/Next.js-14.2.0-000000?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4?style=flat&logo=tailwindcss)

---

## ✨ Features

- **🏠 Hero Section** - Auto-scrolling image carousel with welcome message
- **📅 Events** - Display upcoming church events
- **📸 Photo Gallery** - Interactive circular gallery with smooth animations
- **🙏 Prayer Request** - Submit prayer requests via contact form
- **📧 Email Notifications** - API routes send prayer requests to church email
- **📱 Responsive Design** - Optimized for all screen sizes
- **⚡ Server-Side Rendering** - Fast page loads with Next.js SSR
- **🖼️ Image Optimization** - Automatic image optimization with Next.js Image component

---

## 🏗️ Tech Stack

### Frontend & Backend
| Technology | Purpose |
|------------|---------|
| Next.js 14 | Full-stack React Framework (App Router) |
| React 18 | UI Framework |
| TypeScript | Type Safety |
| TailwindCSS | Styling & Design System |
| Framer Motion | Smooth Animations |
| Lucide React | Modern Icons |

### Email Service
| Technology | Purpose |
|------------|---------|
| Nodemailer | Email Delivery |
| Next.js API Routes | Serverless API Endpoints |

---

## 📁 Project Structure

```
AIM/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx                    # Navigation bar
│   │   ├── Hero.tsx                      # Hero section with carousel
│   │   ├── Events.tsx                    # Events display
│   │   ├── PhotoGallery.tsx              # Photo gallery component
│   │   ├── Gallery.tsx                   # Gallery wrapper
│   │   ├── PrayerRequest.tsx             # Prayer request form
│   │   ├── Footer.tsx                    # Site footer
│   │   ├── MinistryGallery.tsx           # Ministry gallery with CTA

│   │   └── Card/
│   │       └── Card.tsx                  # Reusable card component
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts                  # Email API endpoint
│   ├── layout.tsx                        # Root layout
│   ├── page.tsx                          # Home page
│   └── globals.css                       # Global styles
├── public/
│   ├── logo.png                          # Church logo
│   └── *.jpg                             # Hero carousel images
├── .env.local                            # Environment variables
├── package.json                          # Dependencies
├── tailwind.config.ts                    # Tailwind configuration
├── next.config.mjs                       # Next.js configuration
└── tsconfig.json                         # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AIM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
   
   > ⚠️ **Note**: For Gmail, you need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

---

## 💻 Running the Application

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔌 API Routes

### POST `/api/send-email`

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

- **Colors & Theme**: Modify `tailwind.config.ts`
- **Hero Images**: Add images to `/public` and update `app/components/Hero.tsx`
- **Church Email**: Update the recipient email in `app/api/send-email/route.ts`
- **Site Metadata**: Update `app/layout.tsx` for SEO settings

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
