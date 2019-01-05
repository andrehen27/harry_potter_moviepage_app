var moviesJson = require('../movies.json')

exports.home = function (req,res){

    var movies = moviesJson.movies

    res.render("home",{
        movies : movies
    })
     
}

exports.movie_number = function (req,res){

    var movie_number = req.params.movie_number

    var movies = moviesJson.movies

    if (movie_number >= 1 && movie_number <=6) {
        
        var movie = movies[movie_number-1]
        var title = movie.title
        var main_characters = movie.main_characters

        res.render('movie_number',{
            movies : movies,
            title : title,
            movie : movie,
            main_characters : main_characters
        })        
    }else{
        res.render('error_page',{
            movies : movies
        })
    }

}

exports.error_page = function(req,res){
    var movies = moviesJson.movies

    res.render('error_page',{
        movies : movies
    })
}