import React from 'react'

let Book = function(props) {
  return (
    <div className="book">
    	<div className="col-md-3 col-sm-4 col-xs-6">
      		<div className="hovereffect">
        		<img className="img-responsive" src={props.name} alt=""/>
            	<div className="overlay">
            		<h2>{props.name}</h2>
                	<p> 
	                	<a href="#">AUTHOR</a>
                	</p> 
            	</div>
        	</div>
       	</div>
    </div>
  )
}

export default Book;




