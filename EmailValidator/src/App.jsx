import { useState } from 'react';
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.trim().length === 0) {
      return ("Please Enter the email.")
    }
    else if (!emailPattern.test(value)) {
      return "Invalid emaail Address."
    }
    else {
     return  "";
    }


  }
  const handleSubmit = () => {
    setIsSubmitted(true);
    const error = validateEmail(email);
    setMessage(error || "✅ email is valid!");
    setEmail("");


  }


  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (isSubmitted) {
      const error = validateEmail(value);
      setMessage(error || "");
      
  }
}


  return (
    <>
      <div className="box">
        <div className="vContainer">
          <h1>Email Validator</h1>
          <div className="email_box">
            {message &&  (<p
              className="message"
              style={{
                color: message.includes("valid") ? "green" : "red",
                fontWeight: "500",
              }}
            >
              {message}
            </p>)}
            <input type="text" placeholder='Enter here ...' value={email} onChange={handleChange} />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
