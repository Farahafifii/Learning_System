import React from 'react'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { Course } from '../../../../backend/src/models/Course.js'
import Spinner from '../../components/Spinner'
// import { followUpProblem } from '../../features/instructor/individualTraineeSlice'
import {reset,openCourse,followUpProblem} from '../../features/instructor/instructorSlice'

// import {viewAllCourses,getRegisteredCourses,reset,setSolvingExam,getsolvedExams,viewPrevExam,openCourse} from '../../features/corporateTrainee/corporateTraineeSlice'

function FollowUpProblem(){
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const location = useLocation();
      const { user} = useSelector(
        (state) => state.auth
      )
    
      const {isLoading, isError, isSuccess, message,currCourse, courses,problem} = useSelector(
        (state) => state.instructor
      )
    //   const {courseID, title,subtitles,link,description } = formData
      useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (!user) {
            navigate('/login')
        }
        else{
           
        }
        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch,currCourse, courses])

    const onSubmit = (e) => {
        e.preventDefault()
      }
    
    const new_data=problem
    const renderAuth = () => {
        console.log('COOOONSOOLLLEE    :   ' + problem)
      if(new_data !== undefined){
        const DisplayData=new_data.map(
            (info)=>{
                return(
                  
                  <>
                  <h1>{info.title}</h1>
                  <p> TYPE: {info.type}</p>
                  <p>COURSE_ID: {info.courseID}</p>
                  <p>STATUS: {info.status}</p>
                  <p>TYPE: {info.type}</p>
                  </>
                )
            }
        )
        return(
           <div >
           {DisplayData}
            </div>
           
        )
     }
     
}
    if(isLoading)
    return <Spinner />
  return (
    <div class='box-form' style={{width:'1500px'}}>
    <h1 >Previous Reports</h1>
    {renderAuth()}
    
    </div>
  )
}

export default FollowUpProblem