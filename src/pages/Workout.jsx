import { useEffect, useState } from 'react';
import { BtnLeft, BtnRight, StartButton, ImgContainer } from '../styled';
import workoutsData from '../data/routines';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SmallCard, Thumbnail } from '../styled';
import { Helmet } from "react-helmet";
import Layout from '../components/Layout';

const timerTime = 30;
function Workout() {
  // State variables    
  const [counter, setCounter] = useState(timerTime);
  const [clockWorking, setClockWorking] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const workout = workoutsData[currentWorkout];
  const [currentEx, setCurrentEx] = useState(0);
 

  useEffect(() => {
    if (clockWorking) {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 1000);
      } else if (currentEx < workout.routine.length - 1) {
        setTimeout(() => setCounter(timerTime), 1000);
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
    setCurrentWorkout((prev) =>
      prev < workoutsData.length - 1 ? prev + 1 : 0
    );
  };

  const prevWorkout = () => {
    setCurrentWorkout((prev) =>
      prev > 0 ? prev - 1 : workoutsData.length - 1
    );
  };

  return (
    <Layout>
     <Helmet>
        <title>Ejercicios Georgeo</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
    
    <Container className="mt-4">
      <h1 className="text-center mb-4">
        <BtnLeft onClick={prevWorkout} />
        {workout.title}
        <BtnRight onClick={nextWorkout} />
      </h1>

      <Row className="align-items-center mb-5">
        <Col xs={12} md={6}>
          <ImgContainer>
            <img
              src={workout.routine[currentEx].img}
              alt={workout.routine[currentEx].exercise}
              className="img-fluid"
            />
            <div>Countdown: {counter} s</div>
            <div>Exercise: {workout.routine[currentEx].exercise}</div>
            <div>Reps: {workout.routine[currentEx].reps}</div>
            <StartButton onClick={() => setClockWorking(!clockWorking)}>
              Start
            </StartButton>
          </ImgContainer>
        </Col>

        <Col xs={12} md={6}>
          <Row>
            {workout.routine.map((exercise, index) => (
              <Col key={index} xs={6} md={4} lg={3}>
                <SmallCard
                  onClick={() => setCurrentEx(index)}
                  active={currentEx === index}
                >
                  <Thumbnail src={exercise.img} alt={exercise.exercise} />
                </SmallCard>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
    </Layout>
  );
}

export default Workout;