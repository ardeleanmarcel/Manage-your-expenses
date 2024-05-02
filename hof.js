function add(a, b) {
    return a+b;
}

function withLogging(cb) {
    function originalWithLogging(...args) {
        console.log('arguments: ', args);
        const result = cb(...args);
        console.log('result: ', result);
        return result;
    }

    return originalWithLogging;
}

const addWithLogging = withLogging(add);

const nix = add(7, 3);
console.log('nix', nix);

const x = addWithLogging(7, 3);
console.log('x', x);