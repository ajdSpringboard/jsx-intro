const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Alec" />
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));