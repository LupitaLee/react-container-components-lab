import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'F3v3FsMxu6IjS5AYoYEnR5X6DjJpLIcT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleSubmit= (e)=> {
        e.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    handleSearchChange =(e)=>{
        this.setState({
            searchTerm: e.target.value
            
        })
        console.log(e.target.value)

    }

    render(){
        return(
            <div className="searchable-movie-reviews">
              <form onSubmit={this.handleSubmit}>
                  <label>Search Moview Review</label>
                  <input
                  type="text"
                  onChange={this.handleSearchChange}
                  >
                  </input>
                  <button type="submit">Submit</button>
                  
              </form> 
              {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>} 

              <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer