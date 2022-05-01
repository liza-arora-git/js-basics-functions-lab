// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    var distance;
    distance = pickupLocation - 42;
    distance = Math.abs(distance);

    console.log(`This is the distance ${distance}`);
    return distance;
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264;
}


function distanceTravelledInFeet(start, finish) {
    var distance = (finish - start)*264;
    distance = Math.abs(distance);
    return distance;
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50,60));
console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start, finish) {
    if (distanceTravelledInFeet(start, finish) <= 399) {
        return 0;
    } else if (distanceTravelledInFeet(start, finish) <= 2000) {
        return (distanceTravelledInFeet(start, finish) - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, finish) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, finish) > 2500) {
        return `cannot travel that far`;
    }
}
console.log(calculatesFarePrice(34,33));
console.log(calculatesFarePrice(34,31));
console.log(calculatesFarePrice(34,24));
