import Header from "../Header/Header"
import "./Movies.css"
import axios from 'axios'


const Movies = () => {


    return (
        
        <>
            <div className="movie-container">
                <Header />
                <GetMovies />
            </div>
        </>
    )
}



const GetMovies = () => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d362a775')
        .then(response => {console.log(response.data)})
        .catch(error => {console.log(error)})
}

export default Movies