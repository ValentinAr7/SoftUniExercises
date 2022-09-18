function movie(input){

    let movieName = input[0];
    let movieSeasons = Number(input[1]);
    let movieEpisodes = Number(input[2]);
    let LenghtNoBreaks = Number(input[3]);

    let movieBreak = LenghtNoBreaks * 20 / 100
    let totalTime = movieBreak + LenghtNoBreaks

    let extraTime = movieSeasons * 10

    let time = totalTime * movieSeasons * movieEpisodes + extraTime
    console.log(`Total time needed to watch the ${movieName} series is ${time} minutes.`);

}

movie(["Lucifer",
        "3",
        "18",
        "55"])