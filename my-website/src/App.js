import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // השתמש ב Routes במקום Switch
import Navbar from './components/Navbar';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Login from './components/Login'; // וודא שייבאת את הקומפוננטה של הלוגין
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
                <Login/>
              </>
            } 
          />
          
          {/* מסך הלוגין */}
          <Route path="/login" element={<Login />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
