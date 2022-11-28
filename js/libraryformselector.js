var muscleGroupObject = {
    "Chest": [
      "Upper",
      "Middle",
      "Lower",
      "Misc"  
    ],
    "Back": [
        "Upper",
        "Middle",
        "Lower"
    ],
    "Arms": [
      "Bicep",
      "Tricep",
      "Forearm"
    ],
    "Legs": [
        "Quads",
        "Glutes",
        "Hamstring"
    ],
    "Shoulders": [
        "Anterior",
        "Lateral",
        "Posterior"
    ],
    "Calves":[]
  };

window.onload = function() {

  var muscleGroupSel = document.getElementById("mgroup");
  var subMuscleGroupSel = document.getElementById("sgroup");

  for (var x in muscleGroupObject) {
    muscleGroupSel.options[muscleGroupSel.options.length] = new Option(x, x);
  }
  muscleGroupSel.onchange = function() {
    //empty Sub-Muscle Group dropdowns
    subMuscleGroupSel.length = 1;
    //display correct values
    var muscleGroup = muscleGroupObject[this.value]
    for (var y in muscleGroupObject[this.value]) {
      subMuscleGroupSel.options[subMuscleGroupSel.options.length] = new Option(muscleGroup[y], y);
    }
  }
}