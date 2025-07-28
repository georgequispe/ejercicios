import { WelcomeWrapper, StartButton2 } from "../styled";
function WelcomeView({ onStart }) {

  return (
    <div>
      <WelcomeWrapper>
        <h2>¿Listo para empezar?</h2>

        <StartButton2 onClick={onStart}>Start Workout</StartButton2>
      </WelcomeWrapper>
    </div>
  );
}
export default WelcomeView;