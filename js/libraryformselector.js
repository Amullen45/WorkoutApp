var subjectObject = {
    "Chest": {
        "Upper":[],
      "Middle":[],
      "Lower":[],
      "Misc":[] 
    },
    "Back": {
        "Upper":[],
        "Middle":[],
        "Lower":[]
    },
    "Arms": {
      "Bicep":[],
      "Tricep":[],
      "Forearm":[]
    },
    "Legs": {
        "Quads":[],
        "Glutes":[],
        "Hamstring":[]
    },
    "Shoulders": {
        "Anterior":[],
        "Lateral":[],
        "Posterior":[]
    },
    "Calves":[]
  };
  window.onload = function() {

    var mGroupSel = document.getElementById("mgroup");
    var sGroupSel = document.getElementById("sgroup");

    for (var x in subjectObject) {
      mGroupSel.options[mGroupSel.options.length] = new Option(x, x);
    }
    mGroupSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      sGroupSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        sGroupSel.options[sGroupSel.options.length] = new Option(y, y);
      }
    }
    }