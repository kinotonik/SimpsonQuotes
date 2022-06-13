import React from 'react'
import './DisplayQuote.css'


function DisplayQuote( {simpson}) {

  
  return (
    simpson && (
     <div className = 'DisplayQoute'>
     <figure className="QuoteCard">
        {/* {<img src={simpson.image} alt={simpson.character} />} */}
        <figcaption>
        <blockquote>{simpson.quote}</blockquote>
        <cite>{simpson.character}</cite>
        </figcaption>
    </figure>
     </div>   

    )
  )
}

export default DisplayQuote