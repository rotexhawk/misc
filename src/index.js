function cellCompete(states, days) {
  const beginIndex = 0;
  const endIndex = 0;
  const returnStates = [];
  for (let d = 0; d <= days; d++) {
    const accState = [...states];
    for (let j = 0; j < states.length; j++) {
      returnStates[j] = adjacentState(accState, j);
    }
    states = [...accState];
  }
  return returnStates;
}

function adjacentState(states, index) {
  if (index < 0) {
    if (states[index + 1] === 0) {
      return 0;
    }
    return 1;
  }
  if (index === states.length - 1) {
    if (states[index - 1] === 0) {
      return 0;
    }
    return 1;
  }
  if (states[index - 1] === 0 && states[index + 1] === 0) {
    return 0;
  } else if (states[index - 1] === 1 && states[index + 1] === 1) {
    return 0;
  }
  return 1;
}
