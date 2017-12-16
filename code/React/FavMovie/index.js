var UCRef= new Firebase('https://myreactproject1.firebaseio.com/movies');
class UserCount extends React.Component{
  constructor(props){
    super(props)
    this.state = {usercount: '3'}
  }
 componentDidMount() {
    UCRef.on('value', snapshot => {
    	var data = snapshot.val();
    	var name;
    	for(var key in data){
    		name = data[key].name;
    	}
    	console.log(name);
     this.setState({usercount: snapshot.val()[0]});
    });
  }
  render(){
    return (
      <div>
        {this.state.usercount}
      </div>
    )
  }
}
ReactDOM.render(
        <UserCount/>,
        document.getElementById('mount')
      );
