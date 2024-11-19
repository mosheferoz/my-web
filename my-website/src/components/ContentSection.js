import React from 'react';
import './styles/content.css';

const ContentSection = () => {
  return (
    <section className="content-section">
      <h2>פיצ'רים:</h2>
      <p>
        האפליקציה שתהפוך את הלמידה שלך לחכמה וממוקדת<br />
        שאלות מותאמות אישית מתוך חומרי הלימוד שלך
        בנוסף תוכל לשמוע פודקאסטים על החומר ויהיה לך מאגר סיכומים של כל הארץ!
      </p>
      <p>
        האפליקציה שלנו נועדה לעזור לך ללמוד בצורה היעילה ביותר. בעזרת טכנולוגיה חכמה וחדשנית, אנחנו הופכים את חומרי הלימוד שלך לשאלות תרגול מותאמות אישית, שיעזרו לך להגיע לשליטה מלאה בחומר.
      </p>
      <div className="features">
        <div className="feature">
          <h3>העלאת חומרי לימוד📂 </h3>
          <p>העלה בקלות קבצים כמו PDF, מצגות והערות אישיות. האפליקציה תיצור שאלות מותאמות אישית עבורך.</p>
        </div>
        <div className="feature">
          <h3>שאלות חכמות בהתאמה אישית🤖 </h3>
          <p>שאלות רב-ברירה, פתוחות ושאלות מקרה, מותאמות בדיוק לחומרי הלימוד שלך וקבלת פידבק בהתאם.</p>
        </div>
        <div className="feature">
          <h3>לימוד מהנה🎮</h3>
          <p>התחרה מול החברים שלך בלימוד וציוני המבחנים</p>
        </div>
        <div className="feature">
          <h3>מעקב מתקדם📊</h3>
          <p>דשבורד חזותי מציג ביצועים, התקדמות ונקודות לחיזוק.</p>
        </div>
        <div className="feature">
          <h3>מאגר סיכומים ענק!📄</h3>
          <p>סיכומי חומר מכל הארץ! פלטפורמה המאפשרת תצוגה של סיכומם של תלמידים ומורים מכל רחבי הארץ</p>
        </div>
      </div>
      <div className="cta">
 
      </div>
    </section>
  );
};

export default ContentSection;
