function App() {
  const date = new Date();
  const time = `${date.toTimeString()}`;
  return (
    <div>
      this is react {time}!<p>okokok</p>
    </div>
  );
}

export default App;
