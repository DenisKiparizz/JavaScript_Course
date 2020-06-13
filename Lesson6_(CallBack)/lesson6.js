//CallBack

function someFunction(name, callback) {
    console.log("My name is " + name);
    callback();
}

function full() {
    console.log("Full");
}

someFunction("Denis", function () {
    console.log("I like Java sincerely")
});

someFunction("Denis", full);