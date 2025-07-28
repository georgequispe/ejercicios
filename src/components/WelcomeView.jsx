import { WelcomeWrapper, StartButton2 } from "../styled";
import { useNavigate } from "react-router-dom";
function WelcomeView() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/workout");
  };


  return (
    <div>
      <WelcomeWrapper>
        <h2>¿Listo para empezar?</h2>

        <StartButton2 onClick={handleStart}>Start Workout</StartButton2>
      </WelcomeWrapper>
    </div>
  );
}
export default WelcomeView;