function gramophone(bandName, album, song){

    let time = (album.length * bandName.length) * song.length / 2

    let rotation = Math.ceil(time/2.5)
    console.log(`The song was rotated ${rotation} times.`);

}

gramophone('Black Sabbath', 'Paranoid',
'War Pigs')