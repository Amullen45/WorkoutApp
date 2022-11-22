const upperChest = ["incline barbell", "incline dumbbell", "incline dumbbell fly", "incline cable fly"]
const midChest = ["barbell bench press", "dumbbell bench press", "dumbbell fly", "cable fly", "machine fly"]
const lowerChest = ["decline barbell press", "decline dumbbell press", "decline dumbbell fly", "decline cable fly", "dips"]
const miscChest = ["pull over", "push-ups", "plate press"]

const fullChest = [upperChest, midChest, lowerChest, miscChest]

function chestWorkout(arr) {
    var workout = [];
    let n=1;
    //selects random index from array and pushed to workout
    getRandWorkout = (array) => {
        let x = Math.floor(Math.random() * array.length);
        workout.push(`<li class="wod">workout number ${n} is: ${array[x]}.</li>`);
        return n++;
    };
    //loops through each array to pull getRandWorkout to workout
    arr.forEach(getRandWorkout);
    document.getElementById("wod").innerHTML = workout.join(" ")
}

