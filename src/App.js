import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import MyEnrollement from './components/MyEnrollement';
import MaybeShowNavbar from './components/MaybeShowNavbar';
import Footer from './components/Footer';
import CourseInfo from './components/CourseInfo';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoadingBar from 'react-top-loading-bar'
import {useSelector } from 'react-redux';



const App = () => {
  const [progress, setProgress] = useState(50)
  const mode = useSelector((state) => {
    return state.user;
})
  
  const clientID="437789240486-2on50fr1e9tvaop430k9fh3bgm97q4li.apps.googleusercontent.com"
  return (
    <div style={{background:mode.darkMode.setDark?mode.darkMode.bgDark:mode.darkMode.bgLight}}>
    <GoogleOAuthProvider clientId={clientID}>
      <BrowserRouter >
        <LoadingBar
          color='#1778F2'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <MaybeShowNavbar >
          <Navbar />
        </MaybeShowNavbar>
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/login" element={<Login setProgress={setProgress} />} />
          <Route path="/signup" element={<Signup setProgress={setProgress} />} />
          <Route path="/mycourses" element={<MyEnrollement setProgress={setProgress}/>} />
          <Route path="/:name" element={<CourseInfo setProgress={setProgress} />} />
          <Route path="/:name/episodes" element={<Dashboard setProgress={setProgress} />} />
        </Routes>
        <MaybeShowNavbar>
          <Footer />
        </MaybeShowNavbar>

      </BrowserRouter>

    </GoogleOAuthProvider>
    </div>
  )
}
export default App;
