export const findPath = maze => {
  if (!maze || !maze.length) return false;
  const path = [];
  if (getPath(maze.length - 1, maze[0].length - 1, maze, path)) {
    return path;
  }
};

const getPath = (row, col, maze, path) => {
  if (col < 0 || row < 0 || maze[row][col] === false) {
    return false;
  }
  const isAtOrigin = (row === 0) & (col === 0);

  if (
    isAtOrigin ||
    getPath(row, col - 1, maze, path) ||
    getPath(row - 1, col, maze, path)
  ) {
    path.push(new Point(row, col));
    return true;
  }
  return false;
};

class Point {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  getX() {
    return this.row;
  }
  getY() {
    return this.col;
  }
}
