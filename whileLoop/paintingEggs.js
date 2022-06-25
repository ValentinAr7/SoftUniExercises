function eggs(input) {

    let eggsSize = input[0];
    let eggsColor = input[1];
    let count = Number[input[2]];

    let price = 0;

    switch (eggsSize) {

        case "Large":
            switch (eggsColor) {
                case "Red": 
                price = count * 16;
                break;
                case "Green": 
                price = count * 12;
                break;
                case "Yellow": 
                price = count * 9;
                break;
            }
            break;

        case "Medium":
            switch (eggsColor) {
                case "Red": 
                price = count * 13;
                break;

                case "Green": 
                price = count * 9;
                break;

                case "Yellow": 
                price = count * 7;
                break;
            }
            break;

        case "Small":
            switch (eggsColor) {
                case "Red": 
                price = count * 9;
                break;

                case "Green": 
                price = count * 8
                break;

                case "Yellow": 
                price = count * 5;
                break;
            }
            break;
    }


}