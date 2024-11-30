function bfs(start, end) {
  const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;
  const directions = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1],
  ];

  const queue = [[start, [start]]]; // [current spot, path so far]
  const visited = new Set();
  visited.add(start.toString());

  const [n, m] = end;

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [i, j] = current;

    if (i === n && j === m) {
      return path;
    }

    for (const [dx, dy] of directions) {
      const next = [i + dx, j + dy];
      if (isValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([next, path.concat([next])]);
      }
    }
  }

  return [];
}

function knightMoves(start, end) {
  const path = bfs(start, end);
  console.log(`start: ${start}, target: ${end}`)
  if (path.length === 0) {
    console.log('not possible')
  } else {
    console.log(`You made in ${path.length-1} moves! Here's your path: `);
    console.log(path); // Return the path when the end is reached
  }
  console.log('');
}

export default knightMoves;
