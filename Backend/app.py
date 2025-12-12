from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow requests from React dev server

# Very simple "AI" logic – you can replace this with a real LLM API later
def academic_advisor_bot(message: str, history=None) -> str:
    msg = message.lower()

    # Simple keyword-based responses
    if any(w in msg for w in ["course", "register", "enroll", "registration"]):
        return (
            "To plan your courses, I recommend:\n"
            "1. Checking your program requirements in the degree audit\n"
            "2. Prioritizing prerequisites and core courses first\n"
            "3. Leaving electives for later semesters.\n\n"
            "If you tell me your major, current semester, and interests, "
            "I can suggest a 3–4 course plan."
        )
    if any(w in msg for w in ["gpa", "grade", "grades"]):
        return (
            "Your GPA is typically calculated as:\n"
            "  GPA = (sum of (grade points × credits)) / (total credits).\n"
            "If you share your courses, credits, and letter grades, I can "
            "walk you through an example."
        )
    if any(w in msg for w in ["internship", "job", "career"]):
        return (
            "For internships, try to:\n"
            "• Build a strong resume highlighting your projects\n"
            "• Apply early (3–6 months before the term)\n"
            "• Use LinkedIn, campus career services, and referrals.\n\n"
            "Tell me your target roles (e.g., Data Science, Software, AI) and "
            "I can suggest specific skills and projects to focus on."
        )
    if any(w in msg for w in ["prerequisite", "prereq", "requirement"]):
        return (
            "Prerequisites depend on your university and program.\n"
            "You should:\n"
            "1. Check the course catalog or department website\n"
            "2. Verify if you need instructor permission for exceptions.\n\n"
            "Share the course code (like CS 583 or MATH 203) and I'll "
            "suggest typical prerequisite paths."
        )
    if any(w in msg for w in ["hello", "hi", "hey"]):
        return (
            "Hello! 👋 I'm your Academic Advisor bot.\n"
            "You can ask me about:\n"
            "• Course planning\n"
            "• GPA / grades\n"
            "• Internships & career prep\n"
            "• Prerequisites & requirements\n\n"
            "What would you like help with today?"
        )

    # Fallback
    return (
        "I'm not fully sure about that yet, but I can still help.\n"
        "Try asking about:\n"
        "• Course planning for next semester\n"
        "• GPA or grade calculations\n"
        "• Internship and career advice\n\n"
        "Or give me more details about your program and question."
    )


@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json(force=True)
    user_message = data.get("message", "")
    history = data.get("history", [])

    if not user_message.strip():
        return jsonify({"reply": "Please type a question so I can help you 😊"}), 200

    reply = academic_advisor_bot(user_message, history)
    return jsonify({"reply": reply}), 200


if __name__ == "__main__":
    # Run on port 5000 by default
    app.run(host="0.0.0.0", port=5000, debug=True)
