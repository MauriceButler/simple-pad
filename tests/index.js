var test = require('grape'),
    pad = require('../');

test('lpad all params', function(t){
    t.plan(1);

    t.equal(pad.lpad(12, 5, 'X'), 'XXX12', 'correct pad');
});

test('rpad all params', function(t){
    t.plan(1);

    t.equal(pad.rpad(12, 5, 'X'), '12XXX', 'correct pad');
});

test('lpad default character', function(t){
    t.plan(1);

    t.equal(pad.lpad(12, 5), '00012', 'correct pad');
});

test('rpad default character', function(t){
    t.plan(1);

    t.equal(pad.rpad(12, 5), '12000', 'correct pad');
});

test('lpad no width', function(t){
    t.plan(1);

    t.equal(pad.lpad(12), '12', 'correct pad');
});

test('rpad no width', function(t){
    t.plan(1);

    t.equal(pad.rpad(12), '12', 'correct pad');
});