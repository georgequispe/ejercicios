import { useEffect, useState } from 'react'
import { Row , Img, BtnLeft, BtnRight} from './styled';
import workoutsData from './data/routines';
import { StartButton, ImgContainer } from './styled';
import 'bootstrap/dist/css/bootstrap.min.css';
const timerTime = 30;

function App() {
const [counter, setCounter] = useState(timerTime);
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
const nextWorkout = () => {
  if (currentWorkout < workoutsData.length - 1) {
    setCurrentWorkout(currentWorkout + 1);
  } else {
    setCurrentWorkout(0);
  }
}
const prevWorkout = () => {
  if (currentWorkout > 0) {
    setCurrentWorkout(currentWorkout - 1);
  } else {
    setCurrentWorkout(workoutsData.length - 1);
  }
}
  

  return (
    <> 
     
     <h1>
      <BtnLeft onClick={prevWorkout}></BtnLeft>
      {workout.title}
      <BtnRight onClick={nextWorkout}></BtnRight>
      </h1>
      <Row>
        <ImgContainer>
          <img src={workout.routine[currentEx].img} 
            alt={workout.routine[currentEx].exercise} /> 
          <div>Countdown: {counter} s</div> 
          <div>Exercise: {workout.routine[currentEx].exercise}</div>
          <div>Reps: {workout.routine[currentEx].reps}</div>
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