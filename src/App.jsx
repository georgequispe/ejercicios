import { useState } from 'react'
import { Row } from './styled';
import workoutsData from './data/routines';

function App() {
  const [currentWorkout, setCurrentWorkout] = useState(0)
  const workout = workoutsData[currentWorkout]
  const [currentEx, setCurrentEx] = useState(0)

  return (
    <> 
     
     <h1>{workout.title}</h1>
      <Row>
        <img src={workout.routine[currentEx].img} alt={workout.routine[currentEx].exercise} />
      
        <Row>
        {workout.routine.map((exercise, index) => (
          <li key={index}>
            <img src={exercise.img} alt={exercise.exercise} onClick={() => setCurrentEx(index)} />
            <p>{exercise.exercise}: {exercise.reps} reps</p>
         </li>
       ))}
        </Row>
      </Row>
    </>
  )
}

export default App
