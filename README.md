# Academic Advisor Web App

A responsive web application designed to help students navigate their academic journey efficiently. The system provides an AI-based chatbot to answer academic-related queries, course planning guidance, GPA assistance, and internship advice.

## 🎯 Features

- **AI Chatbot Advisor**: Interactive chatbot that provides academic guidance
- **Course Planning**: Get recommendations on course selection and scheduling
- **GPA Assistance**: Understand GPA calculations and grade management
- **Internship Guidance**: Receive advice on internships and career preparation
- **Prerequisites Help**: Get information about course prerequisites and requirements
- **Quick Academic Tips**: Access helpful tips for course planning, GPA strategy, internships, and time management
- **Responsive Design**: Modern, dark-themed UI that works on desktop, tablet, and mobile devices

## 🛠️ Technologies Used

### Frontend
- **React 18.3.1**: Modern UI framework
- **CSS3**: Custom styling with CSS variables and responsive design
- **React Scripts 5.0.1**: Build tooling

### Backend
- **Python 3**: Backend programming language
- **Flask**: Web framework for API endpoints
- **Flask-CORS**: Cross-origin resource sharing support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) and **npm**
- **Python 3** (v3.7 or higher)
- **pip** (Python package installer)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/RiyaStanly/Responsive-Academic-Advisor-Web-App.git
cd Responsive-Academic-Advisor-Web-App
```

### 2. Backend Setup

```bash
cd Backend
pip install -r requirements.txt
```

### 3. Frontend Setup

```bash
cd Frontend
npm install
```

## 🏃 Running the Application

### Start the Backend Server

Open a terminal and run:

```bash
cd Backend
python app.py
```

The backend server will start on `http://localhost:5000`

You should see:
```
 * Running on http://127.0.0.1:5000
```

### Start the Frontend Server

Open a **new terminal** and run:

```bash
cd Frontend
npm start
```

The frontend will automatically open in your browser at `http://localhost:3000`

**Note**: Both servers must be running simultaneously for the app to work properly.

## 📁 Project Structure

```
academic-advisor-app/
├── Backend/
│   ├── app.py                 # Flask backend with chatbot logic
│   └── requirements.txt        # Python dependencies
├── Frontend/
│   ├── public/
│   │   └── index.html         # HTML template
│   ├── src/
│   │   ├── App.js             # Main React component
│   │   ├── index.js           # React entry point
│   │   └── styles.css         # Application styles
│   ├── package.json            # Node.js dependencies
│   └── package-lock.json      # Dependency lock file
└── README.md                   # This file
```

## 💡 Usage

1. **Start both servers** (Backend on port 5000, Frontend on port 3000)
2. **Open your browser** to `http://localhost:3000`
3. **Type a question** in the chat input, such as:
   - "Help me plan my courses for next semester"
   - "How do I calculate my GPA?"
   - "What should I know about internships?"
   - "Tell me about course prerequisites"
4. **View Quick Tips** in the right sidebar for academic advice

## 🔧 Configuration

### Backend Configuration

The backend runs on port 5000 by default. To change this, edit `Backend/app.py`:

```python
app.run(host="0.0.0.0", port=5000, debug=True)
```

### Frontend Configuration

The frontend uses a proxy to communicate with the backend. This is configured in `Frontend/package.json`:

```json
"proxy": "http://localhost:5000"
```

## 🎨 Features in Detail

### Chatbot Capabilities

The AI chatbot can help with:
- **Course Planning**: Recommendations for course selection and semester planning
- **GPA Calculations**: Explanation of GPA formulas and grade point systems
- **Internships**: Advice on finding and applying for internships
- **Prerequisites**: Information about course requirements and prerequisites
- **General Academic Questions**: Fallback responses for other academic queries

### UI Features

- **Dark Theme**: Modern, eye-friendly dark interface
- **Responsive Layout**: Adapts to different screen sizes
- **Real-time Chat**: Instant responses from the chatbot
- **Message History**: View previous conversation messages
- **Quick Tips Section**: Accessible academic tips at a glance

## 🧪 Testing

To test the chatbot:
1. Ensure both servers are running
2. Navigate to `http://localhost:3000`
3. Type questions in the chat input
4. Verify responses appear correctly

## 🐛 Troubleshooting

### Backend not responding
- Check that the Flask server is running on port 5000
- Verify Python dependencies are installed: `pip install -r Backend/requirements.txt`
- Check for port conflicts: `lsof -ti:5000`

### Frontend not loading
- Ensure Node.js dependencies are installed: `npm install` in Frontend directory
- Check that the React server is running on port 3000
- Verify the proxy setting in `package.json` points to `http://localhost:5000`

### CORS Errors
- The backend includes CORS support via `flask-cors`
- Ensure the proxy in `Frontend/package.json` is correctly configured

## 📝 API Endpoints

### POST `/api/chat`

Send a message to the chatbot.

**Request Body:**
```json
{
  "message": "Help me plan my courses",
  "history": []
}
```

**Response:**
```json
{
  "reply": "To plan your courses, I recommend:\n1. Checking your program requirements..."
}
```

## 🔮 Future Enhancements

- Integration with real LLM API (OpenAI, Anthropic, etc.)
- User authentication and profile management
- Major selection and study plan generation
- Semester scheduling with course recommendations
- Financial aid assistance features
- Database integration for storing user data
- Advanced course prerequisite checking

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Riya Stanly**

- GitHub: [@RiyaStanly](https://github.com/RiyaStanly)

## 🙏 Acknowledgments

- React community for excellent documentation
- Flask team for the lightweight web framework
- All contributors and testers

## 📞 Support

For issues, questions, or contributions, please open an issue on the [GitHub repository](https://github.com/RiyaStanly/Responsive-Academic-Advisor-Web-App).

---

**Happy Academic Planning! 🎓**
