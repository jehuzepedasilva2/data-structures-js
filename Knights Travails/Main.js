import knightMoves from "./KnightTravails.js";

knightMoves([0,0],[3,3]);
knightMoves([3,3],[0,0]);
knightMoves([0,0],[7,7]);
knightMoves([3,3],[4,3]);


// start: 0,0, target: 3,3
// You made in 2 moves! Here's your path:
// [ [ 0, 0 ], [ 2, 1 ], [ 3, 3 ] ]

// start: 3,3, target: 0,0
// You made in 2 moves! Here's your path:
// [ [ 3, 3 ], [ 1, 2 ], [ 0, 0 ] ]

// start: 0,0, target: 7,7
// You made in 6 moves! Here's your path:
// [
//   [ 0, 0 ], [ 2, 1 ],
//   [ 4, 2 ], [ 6, 3 ],
//   [ 7, 5 ], [ 5, 6 ],
//   [ 7, 7 ]
// ]

// start: 3,3, target: 4,3
// You made in 3 moves! Here's your path:
// [ [ 3, 3 ], [ 5, 4 ], [ 3, 5 ], [ 4, 3 ] ]