
function updateTable(){
    calcTeams();
    calcOverview();
    calculateAthletes();
    plotGraph();
    var teamTable = new Tabulator("#team-table", {
        reactiveData:true,
        layout:"fitDataFill",
        cellHozAlign:"center",
        cellVertAlign:"middle",
        data:teams,
        columns:[
            {title:"Team", field:"teamNum"},
            {title:"Members", field:"teamMembers"},
            {title:"Runs", field:"numOfAct"},
            {title:"Distance (KM)", field:"totalDistance"},
            {title:"Total Time", field:"totalTime"},
            {title:"Avg. Pace (Min/KM)", field:"avgPace"},
            {title:"Percentage Complete", field:"percentageCompleted"},
        ]
    }); 
    var indivTable = new Tabulator("#indiv-table", {
        reactiveData:true,
        layout:"fitColumns",
        cellHozAlign:"center",
        cellVertAlign:"middle",
        data:athletes,
        columns:[
        {title:"Name", field:"name"},
        {title:"Team", field:"team"},
        {title:"Runs", field:"numOfAct"},
        {title:"Distance (KM)", field:"totalDistance"},
        {title:"Total Time", field:"totalTime"},
        {title:"Avg. Pace (Min/KM)", field:"avgPace"}
        ]
    });
    
    openTab('overview')
}

function plotGraph(){
    var x = teams.map(a => a.teamNum)
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: teams.map(a => a.teamNum),
        datasets: [{
            data: teams.map(a => a.totalDistance),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                 'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 188,
                    fontSize: 15
                },
                scaleLabel: {
                    display: true,
                    labelString: 'KM Run',
                    fontSize: 20
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 15,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Team',
                    fontSize: 20
                }
            }]
        }
    }
});

}

function calcOverview(){
    var numOfAct = 0;
    var totalDistance = 0; 
    var totalTime = 0;
    for (var i = 0; i < athletes.length; i++) {
        numOfAct += athletes[i].numOfAct;
        totalDistance += athletes[i].totalDistance;
        totalTime += athletes[i].totalTime;
    }
    totalDistance = Math.round(totalDistance/100)/10;
    document.getElementById("kmRun").innerHTML = totalDistance;
    document.getElementById("runsLogged").innerHTML = numOfAct;
    var time = new Date(totalTime * 1000)
    var xTime = time.toISOString().substr(11, 8);
    var yTime = parseInt(xTime.substr(0,2));
    var zTime = yTime + ((time.getDate() - 1)*24);
    document.getElementById("timeSpent").innerHTML =  zTime + xTime.substr(2);
    document.getElementById("avgPace").innerHTML = new Date(Math.round((totalTime*1000)/totalDistance)).toISOString().substr(14, 5);

}


function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("active");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  var buttonName = tabName+"Btn";
  document.getElementById(buttonName).classList.add("active");
}
