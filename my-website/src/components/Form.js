import React, { useState } from 'react';
import './styles/form.css'; // ודא שאתה מייבא את ה-CSS המתאים

const Form = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false); // סטייט למעקב אחרי שליחה

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);  // הוספת אימייל
    formData.append('phone', phone);  // הוספת מספר טלפון

    // שליחה ל-Formspree (החלף את ה-URL בכתובת שלך)
    const response = await fetch('https://formspree.io/f/mwpkqokz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',  // הוסף את הכותרת הזו
      },
    });
    

    if (response.ok) {
      setSubmitted(true);  // עדכון הסטייט כך שיצטיין שהמידע נשלח בהצלחה
    } else {
      alert('יש שגיאה בשליחת ההודעה.');
    }
  };

  return (
    <div className="form-container">
      {submitted ? ( // אם המידע נשלח, הצג הודעה במקום הטופס
        <div className="form-success-message">
          <h2>תודה שהשארת פרטים להצטרפות נפנה אלייך בהקדם!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">הצטרף לקהילה ותקבל חודש שימוש בחינם!</h2>
          <input
            type="email"
            className="form-input"
            placeholder="הכנס את הדואל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            className="form-input"
            placeholder="הכנס את הטלפון שלך"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className="form-button">שלח</button>
        </form>
      )}

      <div className="form-footer">
        {/* ניתן להוסיף כאן קישור או מידע נוסף */}
      </div>
    </div>
  );
};

export default Form;
