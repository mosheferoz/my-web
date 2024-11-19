import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // השתמש ב Routes במקום Switch
import Navbar from './components/Navbar';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Form from './components/Form'; // וודא שייבאת את הקומפוננטה של הטופס
import ImagesGallery from './components/ImagesGallery'; // הגלריה של התמונות
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* הגדרת Routes ו-Route עבור כל מסך */}
        <Routes>
          {/* מסך הבית */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <ContentSection />
                <ImagesGallery /> {/* הגלריה של התמונות */}
                <Form/> {/* הוספת טופס בהנחה שזו המטרה */}
              </>
            } 
          />
          
          {/* מסך הלוגין */}
          <Route path="/login" element={<Form />} /> {/* תיקון הנתיב ל-login */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
