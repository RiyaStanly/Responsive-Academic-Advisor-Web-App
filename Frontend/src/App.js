import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I'm your Academic Advisor bot. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { sender: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: messages
        })
      });

      const data = await response.json();
      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage = {
        sender: "bot",
        text: "Oops, I had trouble reaching the advisor service. Please try again."
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <span className="logo-circle">AA</span>
          <div>
            <h1>Academic Advisor</h1>
            <p className="subtitle">Smart course & career guidance</p>
          </div>
        </div>
        <div className="header-links">
          <a href="#chat" className="nav-link">Chat</a>
          <a href="#tips" className="nav-link">Quick Tips</a>
        </div>
      </header>

      <main className="main">
        <section id="chat" className="chat-section">
          <div className="card chat-card">
            <h2>Ask the Advisor</h2>
            <p className="card-subtitle">
              Ask about course planning, GPA, internships, or prerequisites.
            </p>

            <div className="chat-window">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message-row ${
                    msg.sender === "user" ? "user-row" : "bot-row"
                  }`}
                >
                  <div
                    className={`message-bubble ${
                      msg.sender === "user"
                        ? "user-bubble"
                        : "bot-bubble"
                    }`}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <p key={i} className="message-text">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <form className="input-row" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Type your question (e.g., 'Help me plan Spring 2026 courses')..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isSending}
              />
              <button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </section>

        <section id="tips" className="tips-section">
          <div className="card tips-card">
            <h2>Quick Academic Tips</h2>
            <div className="tips-grid">
              <div className="tip">
                <h3>Course Planning</h3>
                <p>
                  Take prerequisites early, balance hard courses with lighter
                  ones, and keep at least one class you genuinely enjoy.
                </p>
              </div>
              <div className="tip">
                <h3>GPA Strategy</h3>
                <p>
                  Protect your GPA by retaking foundational courses if allowed
                  and mastering core math/CS/major basics.
                </p>
              </div>
              <div className="tip">
                <h3>Internships</h3>
                <p>
                  Start applying 3–6 months before the term. Leverage career
                  fairs, LinkedIn, and referrals from professors or alumni.
                </p>
              </div>
              <div className="tip">
                <h3>Time Management</h3>
                <p>
                  Block 2–3 focused study sessions per day and use a task
                  tracker to avoid last-minute cramming.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Academic Advisor Web App</p>
      </footer>
    </div>
  );
}

export default App;
