export function mergeRanges(meetings) {
  meetings.sort((left, right) => left.startTime - right.startTime);
  let res = [];
  let datesCovered = {};
  for (let i = 0; i < meetings.length; i++) {
    let meeting = meetings[i];
    if (datesCovered[meeting.endTime] || datesCovered[meeting.startTime]) {
      continue;
    }
    let range = getRange(meeting.startTime, meeting.endTime);
    let meetingsInRange = getInRange(meetings, range);
    for (let j = 0; j < meetingsInRange.length; j++) {
      const tempMeeting = meetingsInRange[j];
      datesCovered[tempMeeting.endTime] = true;
      datesCovered[tempMeeting.startTime] = true;
      if (meeting.endTime < tempMeeting.endTime) {
        meeting.endTime = tempMeeting.endTime;
        let range2 = getRange(tempMeeting.startTime, tempMeeting.endTime);
        let meetingsInRange2 = getInRange(meetings, range2);
        meetingsInRange = [...meetingsInRange, ...meetingsInRange2];
      }
    }
    res.push(meeting);
  }
  return res;
}

function getRange(startTime, endTime) {
  const range = [];
  for (let i = startTime; i <= endTime; i++) {
    range.push(i);
  }
  return range;
}

function getInRange(meetings, range) {
  let inRange = [];
  for (let i = 0; i < meetings.length; i++) {
    if (
      range.includes(meetings[i].endTime) ||
      range.includes(meetings[i].startTime)
    ) {
      inRange.push(meetings[i]);
    }
  }
  return inRange;
}

export function mergeRanges2(meetings) {
  meetings.sort((left, right) => left.startTime - right.startTime);

  let mergedMeetings = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    const currentMeeting = meetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        currentMeeting.endTime,
        lastMergedMeeting.endTime
      );
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

function reverse(array) {
  let midPoint = Math.ceil(array.length / 2);
  for (let i = 0; i < midPoint; i++) {
    let beg = array[i];
    let end = array[array.length - i - 1];
    array[i] = end;
    array[array.length - 1 - i] = beg;
  }
}

let input = "AB".split("");
reverse(input);

console.log(input);
