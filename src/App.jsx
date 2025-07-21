import { useState } from 'react'

import workoutsData from './data/routines';

function App() {
  const [currentWorkout, setCurrentWorkout] = useState(0)
  const workout = workoutsData[currentWorkout]

  return (
    <> 
     
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
