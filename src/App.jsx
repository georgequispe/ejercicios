import { useEffect, useState } from 'react'
import { Row , Img} from './styled';
import workoutsData from './data/routines';
import { StartButton, ImgContainer } from './styled';

const timerTime = 30;

function App() {
const [counter, setCounter] = useState(10);
const [clockWorking, setClockWorking] = useState(false);
const [currentWorkout, setCurrentWorkout] = useState(0)
const workout = workoutsData[currentWorkout]
const [currentEx, setCurrentEx] = useState(0)
useEffect(() => {
  if (clockWorking) {
    if (counter > 0) {
      setTimeout(() => {setCounter(counter - 1)}, 1000);
    } else if (currentEx < workout.routine.length - 1) {
      setTimeout(() => {setCounter(timerTime)}, 1000)
      setCurrentEx(currentEx + 1);
    } else {
      setClockWorking(false);
      setCurrentEx(0);
    }
  } else {
    setCounter(timerTime);
    setCurrentEx(0);
  }
}, [clockWorking, counter]);

  

  return (
    <> 
     
     <h1>{workout.title}</h1>
      <Row>
        <ImgContainer>
          <img src={workout.routine[currentEx].img} 
            alt={workout.routine[currentEx].exercise} /> 
         <StartButton onClick={() => setClockWorking(!clockWorking)}>Start</StartButton>
        </ImgContainer>     
        <Row>
        
          {workout.routine.map((exercise, index) => (
            <div key={index} style={{ position: 'relative'}}>
               
              <Img src={exercise.img}
               alt={exercise.exercise}
               onClick={() => setCurrentEx(index)}
                active={currentEx === index}
              />
                           
              <div>Countdown: {counter} s</div>
              <div>
                <p>{exercise.exercise}: {exercise.reps} reps</p>
              </div>
            </div>
          ))}
       
        </Row>
      </Row>
      <div>
       
      </div>
    </>
  )

}

export default App