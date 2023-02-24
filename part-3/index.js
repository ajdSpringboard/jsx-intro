const App = () => (
  <div>
    <Person name="Alec" age="31" hobbies={["dogs", "sailing", "AI"]} />
    <Person name="Maria" age="17" hobbies={["cats", "gardening", "soccer"]} />
    <Person
      name="Dr Strange"
      age="100"
      hobbies={["magic", "time travel", "coffee"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
