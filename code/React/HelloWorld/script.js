function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
function Clock(props){
return(
  <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function ThreeClock(){
  return(
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
    );
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
    </div>
  );
  ReactDOM.render(
    <ThreeClock />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);



/*
var Greeting = React.createClass({
        render: function() {
          return (
            <p>Hello, Universe</p>
          )
        }
      });

      ReactDOM.render(
        <Greeting/>,
        document.getElementById('greeting-div')
      );
*/
