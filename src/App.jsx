import { useState } from 'react'

import React from 'react';
import workoutsData from '../routines';
import GlobalStyle from './GlobalStyle';


function App() {
  const [currentWorkout, setCurrentWorkout] = useState(0)
  const workout = workoutsData[currentWorkout]

  return (
    <> 
     <GlobalStyle />
     <h1>{workout.title}</h1>
     <ul>
       {workout.routine.map((exercise, index) => (
         <li key={index}>
           <img src={exercise.img} alt={exercise.exercise} />
           <p>{exercise.exercise}: {exercise.reps} reps</p>
         </li>
       ))}
     </ul>
    </>
  )
}

export default App
