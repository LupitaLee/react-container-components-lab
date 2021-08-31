import React from "react"


// const MovieReviews = (props) => {
//     console.log(props)
// return(
   
//     <div className="review-list">
//     {props.reviews.map(review=>(<h3>{review.display_title}</h3>))}
    
//     </div>
// )
// } 



// export default MovieReviews;



// const Review = ({
//     headline,
//     byline,
//     link,
//     summary_short
//   }) => {
//     return (
  
//       <div
//         key={headline}
//         className="review"
//       >
//         <header>
//           <a
//             className="review-link"
//             href={link.url}
//           >
//             {headline}
//           </a>
//           <br/>
//           <span className="author">{byline}</span>
//         </header>
//         <blockquote>{summary_short}</blockquote>
//       </div>
//     );
//   };
  
  const MovieReviews = ({ reviews }) => 
  
  
  <div className="review-list">{reviews.map( review => <div
    key={review.headline}
    className="review"
  >
    <header>
      <a
        className="review-link"
        href={review.link.url}
      >
        {review.headline}
      </a>
      <br/>
      <span className="author">{review.byline}</span>
    </header>
    <blockquote>{review.summary_short}</blockquote>
  </div>)}</div>;
  
  MovieReviews.defaultProps = {
    reviews: []
  };
  
  export default MovieReviews;