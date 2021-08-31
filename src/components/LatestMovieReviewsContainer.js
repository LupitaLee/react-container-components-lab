import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const NYT_API_KEY = 'F3v3FsMxu6IjS5AYoYEnR5X6DjJpLIcT'
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component{

    state = {
        reviews: []
    }

componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => this.setState({
        reviews: data.results
    })
)
}


    


            render(){
                return(
                    <div className="latest-movie-reviews">
                        <h2>The Latest Reviews:</h2>
                        <MovieReviews reviews={this.state.reviews}/>
                    </div>
                )
            }
}
// Code LatestMovieReviewsContainer Here
export default LatestMovieReviewsContainer