function Welcome({ onStart }) {
  return (
    <div>
      <h2>¿Listo para empezar?</h2>
      <button onClick={onStart}>Start Workout</button>
    </div>
  );
}
export default Welcome;