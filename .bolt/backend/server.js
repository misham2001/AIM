const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Send email route
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Create a transporter using Gmail's SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender's email
            to: "misham.d24@gmail.com", // Receiver's email
            subject: `Prayer Request from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };


        await transporter.sendMail(mailOptions);

        // Success response
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send email", error });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
