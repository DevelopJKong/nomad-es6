const getMoviesAsync = async() => {
    try {    
        const response = await fetch("https://yts.mx/api/v2/list_movies.json");
        const json = await response.json();
        console.log(json);
        throw Error("I'm hungry");
    } catch (e) {
        console.log(`😎${e}`);
    } finally {
        console.log(`we're done!`);
    }

}

getMoviesAsync();

