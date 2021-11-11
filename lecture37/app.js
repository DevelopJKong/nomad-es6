const getMoviesAsync = async() => {
    try {    
        const [moviveResponse, upcomingResponse] = await Promise.all([
            fetch("https://yts.mx/api/v2/list_movies.json"),
            fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100")
        ])

        const [movies,upcoming] = await Promise.all([
            moviveResponse.json(),
            upcomingResponse.json()
        ]);

        console.log(movies,upcoming);
      
    } catch (e) {
        console.log(`😎${e}`);
    } finally {
        console.log(`we're done!`);
    }

}

getMoviesAsync();

