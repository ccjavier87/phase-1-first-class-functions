
function receivesAFunction(callback){
    console.log (callback());
}

function returnsANamedFunction(name) {
    return name = function (){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}