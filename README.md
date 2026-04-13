# email-tracker
# 📧 Email Open Tracker (Node.js + ngrok)

A simple yet powerful project that demonstrates how email open tracking works using a **tracking pixel**.
When a recipient opens the email, a hidden image request is sent to a server, allowing detection of email opens.

---

## 🚀 Features

* 📩 Detect when an email is opened
* 🕵️ Uses invisible 1×1 tracking pixel
* 🌐 Public access via ngrok tunnel
* ⚡ Lightweight and beginner-friendly
* 🧪 Real-time logging in terminal

---

## 🛠 Tech Stack

* 🟢 Node.js
* ⚡ Express.js
* 🌐 ngrok

---

## 📁 Project Structure

```bash
email-tracker/
│── server.js        # Main server (tracking logic)
│── package.json     # Project dependencies
│── README.md        # Documentation
```

---

## ⚙️ How It Works

1. 📧 A hidden `<img>` tag is added to the email
2. 👀 When the email is opened → image loads
3. 🌐 Request hits your server (`/track`)
4. 🖥 Server logs: **Email Opened ✅**

---

## 🔧 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/equlo/email-tracker.git
cd email-tracker
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run the server

```bash
node server.js
```

You should see:

```bash
Server running at http://localhost:3000
```

---

### 4️⃣ Start ngrok

```bash
ngrok http 3000
```

Copy the HTTPS URL:

```bash
https://your-ngrok-url
```

---

### 5️⃣ Add tracking pixel to email

```html
<img src="https://your-ngrok-url/track" width="1" height="1" />
```

---

## 📧 Example Email

```
Subject: Leave Request

Dear Sir,

I hope you are doing well. I would like to request leave for tomorrow due to personal reasons.

Kindly grant me leave.

Thank you.

Regards,  
Ankit
```

---

## 🧪 Demo Output

When email is opened:

```bash
📩 EMAIL OPENED!
Time: Mon Apr 13 2026 ...
```

---

## ⚠️ Limitations

* ❌ Depends on image loading
* ❌ Gmail may cache images
* ❌ Not 100% accurate
* ❌ Blocked by privacy-focused email clients

---

## 👨‍💻 Author

**Ankit**

* GitHub: https://github.com/equlo

---

## ⭐ Support

If you found this useful, give it a ⭐ on GitHub!
