# 📊 User Agent Analytics

This project identifies and logs the user agents that make requests to the server. These user agents are stored in a JSON file, and a graphical analytics dashboard displays their distribution using a simple HTML frontend.

---

## 🚀 Project Features

- Logs incoming user agent strings to a structured JSON file.
- Provides a backend API for accessing user agent analytics.
- Displays user agent data using Chart.js in an interactive dashboard.
- Built with Node.js, Express.js, and Chart.js.

---

## 📦 How to Run This Project

1. **Clone the project in your local environment**

   ```bash
   git clone https://github.com/FarhadDev/user-agent-analytics.git
   cd user-agent-analytics

2. **Install dependencies**

   ```bash
   npm install

3. **Start the server**

   ```bash
   npm start

4. **Open your browser and visit the analytics dashboard**

   ```bash
   http://localhost:3000/analytics

## 📡 API Endpoints

| Endpoint                  | Method | Description                                                |
|--------------------------|--------|------------------------------------------------------------|
| `/analytics/user-agents` | GET    | Returns JSON data of all user agents that hit the server. |
| `/analytics`             | GET    | Displays the graphical analytics dashboard in the browser.|

## 📄 License

This project is open-source and available under the MIT License.
