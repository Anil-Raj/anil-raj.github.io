import React from 'react'
import { Link } from 'react-router'

let Book = function(props) {
  return (
    <div className="book">
    	<div className="col-md-3 col-sm-4 col-xs-6">
      		<div className="hovereffect">
        		<img className="img-responsive" src={props.cover} alt=""/>
            	<div className="overlay">
            		<h2>{props.name}</h2>
                	<p> <Link to={'/detail/' + props.id}>{props.author}</Link>
	                	<a href="/detail">{props.author}</a>
                	</p> 
            	</div>
        	</div>
       	</div>
    </div>
  )
}

export default Book;




