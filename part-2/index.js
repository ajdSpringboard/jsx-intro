const App = () => (
  <div>
    <Tweet
      username="ajd992"
      name="Alec"
      date="01.24.2023"
      message="Blah blah blah"
    />
    <Tweet
      username="billyJoe"
      name="Bill"
      date="04.20.2023"
      message="Lorem ipsum blah blha"
    />
    <Tweet
      username="xxUserNamexx"
      name="Dwayne"
      date="03.21.2023"
      message="Can't see me"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
