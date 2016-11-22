function LikeImage(props){
	return(
	<div id="rg_fbl">
	<h3 >{props.likes}</h3>
	<img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" height="42" width="42"/>
	</div>
	);
}
function DisLikeImage(props){
	function writeUserData() {
  		var images = new Firebase('https://myreactproject1.firebaseio.com/images');
    	images.push({
        	url:"https://lh4.googleusercontent.com/hEElPN0X5Tsl9MTsKR5BOVyENj-KOLy75-502Zkf9hoSM14FQsJ-Ci1fSSaYfBnjPdxdlqSrmwlUTC4=w1366-h638-rw",
			description:"Chrysanthemum.jpg",
			likes:10,
			dislikes:props.dislikes+1
    	});
  		
  		console.log("inside writeUserData"+props.dislikes);
	}
	function handleClick(props) {
		writeUserData();

    	//props.setProp( { props.likes: this.likes+1 } );
  	}
	return(
	<div id="rg_fbdl">
	<h3>{props.dislikes}</h3>
	<img src="http://nationalreport.net/wp-content/uploads/2015/09/FBDislike.jpg" height="42" width="42" onClick={handleClick}/>
	</div>
	);
}

function ImageGrid(props) {
	// body...
	return(	
		<div>
	<div id="rg">
		<img  src={props.image.url} />
		<h2>{props.image.description}</h2>
		<LikeImage likes={props.image.likes} />
		<DisLikeImage dislikes={props.image.dislikes} />	
	</div>
	</div>
	);
}
const image1 ={
	url:"https://lh4.googleusercontent.com/hEElPN0X5Tsl9MTsKR5BOVyENj-KOLy75-502Zkf9hoSM14FQsJ-Ci1fSSaYfBnjPdxdlqSrmwlUTC4=w1366-h638-rw",
	description:"Chrysanthemum.jpg",
	likes:10,
	dislikes:20
}
function App(){
	return (
		<div>
		<ImageGrid image={image1} />
		<ImageGrid image={image1} />
		<ImageGrid image={image1} />
		<ImageGrid image={image1} />
		</div>
		);
}
ReactDOM.render(<App />,  document.getElementById('root'));