window.onload = pageload;

function pageload() {

    // initial settings
    document.getElementById("homescreen").style.display = "block";
    document.getElementById("activities").style.display = "none";
    document.getElementById("insights").style.display = "none";
    document.getElementById("statistics").style.display = "none";

    if(document.getElementById("homescreen").style.display == "block") {
        document.getElementById("navIcon3").innerHTML = "<img src='images/icon_star_.png' alt='Main navigation icon 3'>";
    }

    // click functions

    document.getElementById("navIcon2").onclick = openActivities;

    // function when activities image button is clicked
    function openActivities() {
        document.getElementById("homescreen").style.display = "none";
        document.getElementById("insights").style.display = "none";
        document.getElementById("activities").style.display = "block";
        document.getElementById("statistics").style.display = "none";

        document.getElementById("navIcon2").innerHTML = "<img src='images/icon_football-player-spain_2.png' alt='Main navigation icon 2'>";
        document.getElementById("navIcon3").innerHTML = "<img src='images/icon_star_2.png' alt='Main navigation icon 3'>";
        document.getElementById("navIcon5").innerHTML = "<img src='images/icon_holding-star_.png' alt='Main navigation icon 3'>";
        document.getElementById("navIcon4").innerHTML = "<img src='images/icon_open-quran_.png' alt='Main navigation icon 4'>";
    }

    document.getElementById("navIcon3").onclick = openHomeScreen;

    // function when homescreen image button is clicked
    function openHomeScreen() {
        document.getElementById("homescreen").style.display = "block";
        document.getElementById("insights").style.display = "none";
        document.getElementById("activities").style.display = "none";
        document.getElementById("statistics").style.display = "none";
        
        document.getElementById("navIcon2").innerHTML = "<img src='images/icon_football-player-spain_.png' alt='Main navigation icon 2'>";
        document.getElementById("navIcon3").innerHTML = "<img src='images/icon_star_.png' alt='Main navigation icon 3'>";
        document.getElementById("navIcon5").innerHTML = "<img src='images/icon_holding-star_.png' alt='Main navigation icon 3'>";
        document.getElementById("navIcon4").innerHTML = "<img src='images/icon_open-quran_.png' alt='Main navigation icon 4'>";
    }

    document.getElementById("navIcon4").onclick = openStatistics;

    // function when statistics image button is clicked
    function openStatistics() {
        document.getElementById("homescreen").style.display = "none";
        document.getElementById("insights").style.display = "none";
        document.getElementById("activities").style.display = "none";
        document.getElementById("statistics").style.display = "block";
        
        document.getElementById("navIcon2").innerHTML = "<img src='images/icon_football-player-spain_.png' alt='Main navigation icon 2'>";
        document.getElementById("navIcon3").innerHTML = "<img src='images/icon_star_2.png' alt='Main navigation icon 3'>";
        document.getElementById("navIcon5").innerHTML = "<img src='images/icon_holding-star_.png' alt='Main navigation icon 3'>";
        document.getElementById("navIcon4").innerHTML = "<img src='images/Group23.png' alt='Main navigation icon 4'>";
    }

    document.getElementById("navIcon5").onclick = openInsights;

    // function when holding star image button is clicked
    function openInsights() {
        document.getElementById("homescreen").style.display = "none";
        document.getElementById("insights").style.display = "block";
        document.getElementById("activities").style.display = "none";
        document.getElementById("statistics").style.display = "none";
        
        document.getElementById("navIcon2").innerHTML = "<img src='images/icon_football-player-spain_.png' alt='Main navigation icon 2'>";
        document.getElementById("navIcon3").innerHTML = "<img src='images/icon_star_2.png' alt='Main navigation icon 3'>";
        document.getElementById("navIcon5").innerHTML = "<img src='images/Group22.png' alt='Main navigation icon 5'>";
        document.getElementById("navIcon4").innerHTML = "<img src='images/icon_open-quran_.png' alt='Main navigation icon 4'>";
    }
}