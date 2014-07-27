function pad(direction, value, width, character) {
    value = value + '';

    if(!character){
        character = '0';
    }

    if(!width){
        width = 0;
    }

    while(value.length < width){
        if(direction){
            value = value + character;
        } else {
            value = character + value;
        }
    }

    return value;
}

module.exports = {
    lpad: pad.bind(null, 0),
    rpad: pad.bind(null, 1)
};