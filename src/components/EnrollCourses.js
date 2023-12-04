import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import noItem from "../images/noItem.svg"
// import { useEffect,useState } from 'react';

const EnrollCourses = () => {
    // const [uData,setUData]=useState([]);
    const enrolledCourse = useSelector((state) => {
        return state.user;
    })
    
    let jsonObject = enrolledCourse.enrollCourse.map(JSON.stringify);
    let uniqueSet = new Set(jsonObject);
    let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
 
    
   

    return (
        <>

            <section className='courseSection'>
                <h4 >All<span>0{uniqueArray.length}</span></h4>

               {uniqueArray.length===0&& <div className='noItem' style={{display:"flex",justifyContent:"center"}}>
                    <img src={noItem} alt='noitem' width={"250px"} height={"100%"}/>
                </div>}

                {uniqueArray.map((data, index) => {
                    return (
                        data.map((cdata, index) => {
                        return (
                            <Link key={cdata.id} to={"/" + cdata.url+"/episodes"}><div className='courseContainer' >
                                <div className='courseDetails' >
                                    <div className='courseLeftDetail'>
                                        <div className='courseImage'>
                                            <img src={cdata.thumbnail} alt='course' />
                                        </div>
                                        <div className='courseInfo'>
                                            <h5><span>Course</span></h5>
                                            <h5>{cdata.coursename}</h5>
                                            <p>{cdata.lesson}</p>
                                        </div>
                                    </div>
                                    <div className='courseRightDetail'>
                                        <h5>{cdata.price}</h5>
                                    </div>
                                </div>
                            </div></Link>
                        )
                    })
                    )
                    


                })}
               


            </section>
        </>

    )
}

export default EnrollCourses