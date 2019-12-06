export function findRectangularOverlap(rect1, rect2) {
  const { widthRange, heightRange } = rectPoints(rect1);
  const { widthRange: widthRangeTwo, heightRange: heightRangeTwo } = rectPoints(
    rect2
  );

  let intersectionX = getIntersection(widthRange, widthRangeTwo);
  let intersectionY = getIntersection(heightRange, heightRangeTwo);

  let leftX = intersectionX[0];
  let width = intersectionX[intersectionX.length - 1] - leftX;
  let bottomY = intersectionY[0];
  let height = intersectionY[intersectionY.length - 1] - bottomY;

  if (!width || !height) {
    return { leftX: 0, bottomY: 0, width: 0, height: 0 };
  }
  return { leftX, bottomY, width, height };
}

function getIntersection(leftX, right) {
  const intersection = [];
  for (let i = 0; i < leftX.length; i++) {
    if (right.includes(leftX[i])) {
      intersection.push(leftX[i]);
    }
  }
  return intersection;
}

function rectPoints(rect) {
  let widthRange = [];
  let heightRange = [];
  for (let i = rect.leftX; i <= rect.leftX + rect.width; i++) {
    widthRange.push(i);
  }
  for (let j = rect.bottomY; j <= rect.bottomY + rect.height; j++) {
    heightRange.push(j);
  }

  return { widthRange, heightRange };
}

let desc = "overlap along both axes";
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = "one rectangle inside another";
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = "both rectangles the same";
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = "touch on horizontal edge";
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 0, bottomY: 0, width: 0, height: 0 };
assertObjectEquals(actual, expected, desc);

desc = "touch on vertical edge";
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 0, bottomY: 0, width: 0, height: 0 };
assertObjectEquals(actual, expected, desc);

desc = "touch at a corner";
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 0, bottomY: 0, width: 0, height: 0 };
assertObjectEquals(actual, expected, desc);

desc = "no overlap";
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 0, bottomY: 0, width: 0, height: 0 };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a);
  const objectB = JSON.stringify(b);
  if (objectA !== objectB) {
    console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
