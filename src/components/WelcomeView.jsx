import { WelcomeWrapper } from "../styled";
function WelcomeView({ onStart }) {

  return (
    <div>
      <WelcomeWrapper>
        <h2>¿Listo para empezar?</h2>

        <button onClick={onStart}>Start Workout</button>
      </WelcomeWrapper>
    </div>
  );
}
export default WelcomeView;