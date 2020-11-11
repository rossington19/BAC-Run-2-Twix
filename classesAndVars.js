class Athlete{
    constructor(name, team){
        this.name = name;
        this.team = team;
        this.numOfAct = 0;
        this.totalDistance = 0;
        this.totalTime = 0;
        this.avgPace = 0;
    }

}

class Team{
    constructor(num){
        this.teamNum = num;
        this.teamMembers = []
        this.numOfAct = 0;
        this.totalDistance = 0;
        this.totalTime = 0;
        this.avgPace = 0;
        this.percentageCompleted = 0;
    }
}

athletes = [];
teams = [];

const athleteTeams = [
    {"name": "Rob J.", "team":9},
    {"name": "Matt R.", "team":1},
    {"name": "David E.", "team":6},
    {"name": "Justin C.", "team":6},
    {"name": "Andrew M.", "team":1},
    {"name": "Reece K.", "team":1},
    {"name": "Duncan W.", "team":4},
    {"name": "Jacob R.", "team":5},
    {"name": "Ross G.", "team":8},
    {"name": "Julian M.", "team":8},
    {"name": "Alex W.", "team":2},
    {"name": "adam A.", "team":8},
    {"name": "Simon H.", "team":2},
    {"name": "David F.", "team":7},
    {"name": "Jason H.", "team":4},
    {"name": "Robert M.", "team":9},
    {"name": "hugo A.", "team":9},
    {"name": "Edward S.", "team":3},
    {"name": "Chris C.", "team":6},
    {"name": "Gary C.", "team":7},
]
