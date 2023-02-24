const Person = ({name, age, hobbies}) => (
    <div>
        <p>Learn some information about this person</p>
        <h3>Name: {name.length > 6 ? name.slice(0, 6) : name}</h3>
        <h3>Age: {age}</h3>
        <h3>{age >= 18 ? "Go vote!" : "You must be 18."}</h3>
        <ul>
            {hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
    </div>
)