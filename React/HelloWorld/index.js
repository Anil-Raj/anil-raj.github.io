function LikeImage(props){
	return(
	<div id="rg_fbl">
	<h3>{props.likes}</h3>
	<img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" height="42" width="42"/>
	</div>
	);
}
function DisLikeImage(props){
	return(
	<div id="rg_fbdl">
	<h3>{props.dislikes}</h3>
	<img src="http://nationalreport.net/wp-content/uploads/2015/09/FBDislike.jpg" height="42" width="42"/>
	</div>
	);
}

function ImageGrid(props) {
	// body...
	return(	
		<div>
	<div id="rg">
		<img  src={props.image.url} height="200" width="200"/>
		<h2>{props.image.description}</h2>
		<LikeImage likes={props.image.likes} />
		<DisLikeImage dislikes={props.image.dislikes} />	
	</div>
	</div>
	);
}
const image1 ={
	url:"https://lh5.googleusercontent.com/Z8IaUqc1i2OPFXzyBynk6-KyKipgSSAodoe6ckrbnuD0JzSNp3s9kogEG5w18A-ha4pdO8rAlfuOOB4=w1366-h638-rw",
	description:"Chrysanthemum.jpg",
	likes:10,
	dislikes:20
}
function App(){
	return (
		<ImageGrid image={image1} />
		);
}
ReactDOM.render(<App />,  document.getElementById('root'));