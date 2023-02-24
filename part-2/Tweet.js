const Tweet = ({username, name, date, message}) => (
    <div>
        <h2>{username}</h2>
        <h4>{name}</h4>
        <h4>{date}</h4>
        <p>{message}</p>
    </div>
);