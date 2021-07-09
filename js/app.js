//Define two arrays
var age = [15, 17, 22, 29, 31];
var is_subscribed = [true, false, false, true, true];

//Define length of arrays, as both are same length we only need to define length once
var arrayLength = age.length;

//starting at beginning of array, we count up by one until array length
for(var i = 0; i < arrayLength; i++) {

    //count of each iteration added to iterate up through the array indices
    if (is_subscribed[i]) {
        if (age[i] < 18) {
            console.log("The user is younger than 18 and is subscribed");
        }
        else if (age[i] >= 18) {
            console.log("The user is 18 or older and is subscribed");
        }
    } else if (!is_subscribed[i]) {
        if (age[i] < 18) {
            console.log("The user is younger than 18 and is not subscribed");
        }
        else if (age[i] >= 18) {
            console.log("The user is 18 or older and is not subscribed");
        }
    } else {
        console.log("Insufficient information provided");
    }
}
