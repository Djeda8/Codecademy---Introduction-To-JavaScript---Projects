let team = {
  _players: [
    {
      firstName: 'Gaizka',
      lastName: 'Mendieta',
      age: 27
    },{
      firstName: 'Fernando',
      lastName: 'Giner',
      age: 29
    },{
      firstName: 'Paco',
      lastName: 'Camarasa',
      age: 30
    }
  ],
  _games: [
    {
      opponent: 'Real Madrid',
      teamPoints: 1,
      opponentPoints: 1
    },
	{
      opponent: 'Barcelona FC',
      teamPoints: 3,
      opponentPoints: 2
    },
	{
      opponent: 'Sevilla',
      teamPoints: 1,
      opponentPoints: 0,
    }
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    let player ={
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    return this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    let game ={
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    return this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Real Betis', 3, 1);
team.addGame('Atletico de Madrid', 2, 0);
team.addGame('Racing', 3, 2);

console.log(team.players);
console.log(team.games);