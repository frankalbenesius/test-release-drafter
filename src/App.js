function App() {
  const date = new Date();
  const time = `${date.toTimeString()}`;
  return <div>this is react {time}!</div>;
}

export default App;
