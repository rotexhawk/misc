import { longestPalindrome } from "./strings/longestPalindrom";
import { findPath } from "./dynamic/robotMaze";

const maze = Array(4).fill(Array(4).fill(true));

const pal = longestPalindrome("abcbab");
const path = JSON.stringify(findPath(maze));

console.log("this is the path", maze);

document.getElementById("app").innerHTML = path;
