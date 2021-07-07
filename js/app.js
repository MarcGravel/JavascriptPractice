var age = 29;
var is_subscribed = true;

if (is_subscribed) {
    if (age < 18) {
        console.log("The user is younger than 18 and is subscribed");
    }
    else if (age >= 18) {
        console.log("The user is 18 or older and is subscribed");
    }
} else if (!is_subscribed) {
    if (age < 18) {
        console.log("The user is younger than 18 and is not subscribed");
    }
    else if (age >= 18) {
        console.log("The user is 18 or older and is not subscribed");
    }
} else {
    console.log("Insufficient information provided");
}
