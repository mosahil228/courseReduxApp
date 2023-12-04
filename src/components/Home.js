import React,{useEffect} from 'react'
import Courses from './Courses';
import {useSelector } from 'react-redux';

const Home = ({setProgress}) => {
  const mode = useSelector((state) => {
    return state.user;
})
  useEffect((() =>{
    setProgress(40);
    setTimeout(()=>{
      setProgress(100)
    },200)
    
  }),[setProgress])
  return (
    <>
      <section className='heading'>
        <h1 style={{color:mode.darkMode.setDark?mode.darkMode.textLight:mode.darkMode.textDark}}>Find Best Course You Love</h1>
        <h2 style={{color:mode.darkMode.setDark?mode.darkMode.textLight:mode.darkMode.textDark}}>Start your feed by selecting a few categories below</h2>
      </section>
      <Courses />
    </>
  )
}

export default Home