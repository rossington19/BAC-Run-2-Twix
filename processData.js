function getUniqueAthletes(res){
    var uniqueAthletes = [];
    for (var i = 0; i < res.length; i++) {
        athleteName = res[i].athlete.firstname + " " + res[i].athlete.lastname;
        uniqueAthletes.push(athleteName);
        for (var j = 0; j < uniqueAthletes.length - 1; j++) {
            if(uniqueAthletes[j] === athleteName){
                uniqueAthletes.pop();
                break;
            }
        }
    }
}


function populateResults(res){
    for (var i = 0; i < res.length; i++) {
        athleteName = res[i].athlete.firstname + " " + res[i].athlete.lastname;
        activityName = res[i].name;
        for (var j = 0; j < athletes.length; j++) {
            if(athleteName === athletes[j].name){
                athletes[j].numOfAct++;
                athletes[j].totalDistance += res[i].distance;
                athletes[j].totalTime += res[i].moving_time;
            }
        }
        if(athleteName === "Matt R." && activityName === "BAC Challenge day 1 "){
            break;
        } 
    }
    updateTable();
}


function createAthletes(){
    for (var i = 0; i < athleteTeams.length; i++) {
        athletes.push( new Athlete(athleteTeams[i].name, athleteTeams[i].team) );
    }   
}

function calcTeams(){
    for(var i = 1; i <= 9; i++){
        teams.push( new Team(i) )
    }
    for (var i = 0; i < athletes.length; i++) {
        teams[athletes[i].team - 1].numOfAct += athletes[i].numOfAct;
        teams[athletes[i].team - 1].totalDistance += athletes[i].totalDistance;
        teams[athletes[i].team - 1].totalTime += athletes[i].totalTime;
        teams[athletes[i].team - 1].teamMembers.push(" " + athletes[i].name);

    }
    for (var i = 0; i < teams.length; i++) {
        if(teams[i].totalDistance){
            teams[i].totalDistance = Math.round(teams[i].totalDistance/100)/10;
            teams[i].avgPace = new Date(Math.round((teams[i].totalTime*1000)/teams[i].totalDistance)).toISOString().substr(14, 5);
            var time = new Date(teams[i].totalTime * 1000)
            var xTime = time.toISOString().substr(11, 8);
            var yTime = parseInt(xTime.substr(0,2));
            var zTime = yTime + ((time.getDate() - 1)*24);
            teams[i].totalTime = zTime + xTime.substr(2);
            teams[i].percentageCompleted = Math.round(teams[i].totalDistance/1.88)
        }
    }
}


function calculateAthletes(){
    for (var i = 0; i < athletes.length; i++) {
        if(athletes[i].totalDistance){
            athletes[i].totalDistance = Math.round(athletes[i].totalDistance/100)/10;
            athletes[i].avgPace = new Date(Math.round((athletes[i].totalTime*1000)/athletes[i].totalDistance)).toISOString().substr(14, 5);
            var time = new Date(athletes[i].totalTime * 1000)
            var xTime = time.toISOString().substr(11, 8);
            var yTime = parseInt(xTime.substr(0,2));
            var zTime = yTime + ((time.getDate() - 1)*24);
            athletes[i].totalTime = zTime + xTime.substr(2);
        }
    }
}
