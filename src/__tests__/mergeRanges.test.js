import { mergeRanges, mergeRanges2 } from "../misc/mergeRanges";

describe("test merge range for various meeting times", () => {
  it("should merge two meetings properly", () => {
    let actual = mergeRanges2([
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 4 }
    ]);
    let expected = [{ startTime: 1, endTime: 4 }];
    expect(actual).toEqual(expected);
  });

  it("meeting contains other meeting", () => {
    //
    let actual = mergeRanges([
      { startTime: 1, endTime: 8 },
      { startTime: 2, endTime: 5 }
    ]);
    let expected = [{ startTime: 1, endTime: 8 }];
    expect(actual).toEqual(expected);
  });

  it("meeting contains other meeting", () => {
    let actual = mergeRanges([
      { startTime: 1, endTime: 8 },
      { startTime: 2, endTime: 5 }
    ]);
    let expected = [{ startTime: 1, endTime: 8 }];
    expect(actual).toEqual(expected);
  });

  it("meeting contains other meeting", () => {
    let actual = mergeRanges([
      { startTime: 1, endTime: 8 },
      { startTime: 2, endTime: 5 }
    ]);
    let expected = [{ startTime: 1, endTime: 8 }];
    expect(actual).toEqual(expected);
  });

  it("meetings stay separate", () => {
    let actual = mergeRanges([
      { startTime: 1, endTime: 3 },
      { startTime: 4, endTime: 8 }
    ]);
    let expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
    expect(actual).toEqual(expected);
  });

  it("multiple merged meetings", () => {
    let actual = mergeRanges2([
      { startTime: 1, endTime: 4 },
      { startTime: 2, endTime: 5 },
      { startTime: 5, endTime: 8 }
    ]);
    let expected = [{ startTime: 1, endTime: 8 }];
    expect(actual).toEqual(expected);
  });

  it("meetings not sorted", () => {
    let actual = mergeRanges([
      { startTime: 5, endTime: 8 },
      { startTime: 1, endTime: 4 },
      { startTime: 6, endTime: 8 }
    ]);
    let expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
    expect(actual).toEqual(expected);
  });

  it("oneLongMeetingContainsSmallerMeetings", () => {
    let actual = mergeRanges2([
      { startTime: 1, endTime: 10 },
      { startTime: 2, endTime: 5 },
      { startTime: 6, endTime: 8 },
      { startTime: 9, endTime: 10 },
      { startTime: 10, endTime: 12 }
    ]);
    let expected = [{ startTime: 1, endTime: 12 }];
    expect(actual).toEqual(expected);
  });

  it("sample input", () => {
    let actual = mergeRanges([
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 5 },
      { startTime: 4, endTime: 8 },
      { startTime: 10, endTime: 12 },
      { startTime: 9, endTime: 10 }
    ]);
    let expected = [
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 }
    ];
    expect(actual).toEqual(expected);
  });
});
