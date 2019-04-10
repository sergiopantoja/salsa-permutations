const moveOptions = {
  hands: [
    {name: 'Closed Hands', count: 1},
    {name: 'Two Hands', count: 1},
    {name: 'One Hand', count: 1},
    {name: 'No Hands', count: 1},
    {name: 'Handshake Over', count: 1},
    {name: 'Handshake Under', count: 1}
  ],
  spins: [
    {name: 'His Spin', count: 2},
    {name: 'Her Spin', count: 2},
    {name: 'Two Hand Spin', count: 2},
    {name: 'Hammerlock', count: 2}
  ],
  combs: [
    {name: 'His Comb', count: 1},
    {name: 'Double His Comb', count: 1},
    {name: 'Her Comb', count: 1}
  ],
  turns: [
    {name: 'Cross-Body Lead', count: 4},
    {name: 'Cross-Body Lead w/ CW Spin', count: 4},
    {name: 'Cross-Body Lead w/ CCW Spin', count: 4},
    {name: 'Cross-Body Fake', count: 4},
    {name: 'Right Turn', count: 2},
    {name: 'Right Turn w/ CW Spin', count: 2}
  ],
  other: [
    {name: 'Stop & Go', count: 4},
    {name: 'Cumbia', count: 4}
  ]
}

const sample = arr => arr[Math.floor(Math.random() * arr.length)]

const SECONDS_IN_MINUTE = 60;
const MS_IN_MINUTE = SECONDS_IN_MINUTE * 1000;

const app = new Vue({
  el: '#app',
  data: {
    beatsPerMinute: 100,
    moveCount: 3,
    hands: '',
    moves: []
  },
  methods: {
    start: function() {
      const possibilities = moveOptions.spins.concat(moveOptions.combs).concat(moveOptions.turns).concat(moveOptions.other);

      let lastMove = {};
      this.moves = Array.from(Array(parseInt(this.moveCount)), () => {
        do {
          thisMove = sample(possibilities)
        } while (thisMove.name === lastMove.name);

        lastMove = thisMove

        return thisMove
      });

      this.hands = sample(moveOptions.hands).name;

      const delayPerCount = SECONDS_IN_MINUTE / parseInt(this.beatsPerMinute) * 1000;
      const counts = this.moves.reduce((total, move) => total += move.count, 0)
      const delay = delayPerCount * counts * 2;

      setTimeout(this.start, delay);
    }
  }
})

