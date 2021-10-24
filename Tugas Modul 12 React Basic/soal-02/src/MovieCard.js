import { Component } from "react"


export default class MovieCard extends Component{
    movie = {};
    constructor(props){
        super(props);
        this.movie = props.movie
    }
    render(){
        return(
            <>
                <div class="card h-100">
                    <img
                        src={this.props.movie.image_url}
                        class="card-img-top"
                        alt="skilvul" />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.movie.title}</h5>
                        <h6 class="card-subtitle mb-2">
                        <span className={this.props.movie.type=== "Movie" ? `badge bg-danger` :  `badge bg-success`}>{this.props.movie.type}</span>
                        </h6>
                        <p class="card-text">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                        </p>
                    </div>
                    <div class="card-body">
                    <a
                    href={this.props.movie.url}
                    className="btn btn-primary w-100 text-uppercase"
                >
                            readmore
                        </a>
                    </div>
                </div>
            </>
        )
    }

}