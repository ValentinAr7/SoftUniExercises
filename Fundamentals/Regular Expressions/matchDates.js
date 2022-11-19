function matchDates (input){

    let text = input.shift()

    let pattern = /\b(?<day>\d{2})([/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g

    let matches = text.matchAll(pattern)

    for(const match of matches){
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groupd.year}`);
    }

}
matchDates(["01/Jan-1951, 23/sept/1973, 1/Feb/2016"])