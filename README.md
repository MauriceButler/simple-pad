#simple-pad

Yet another left and right padding module

## API

### pad.lpad(value, width[, character])

Left pads the value to the width specified with the character (defaults to '0')

    pad.lpad(12, 5); // 00012
    pad.lpad(12, 5, 'X'); // XXX12

### pad.rpad(value, width[, character])

Right pads the value to the width specified with the character (defaults to '0')

    pad.rpad(12, 5); // 12000
    pad.rpad(12, 5, 'X'); // 12XXX
