// I can't believe something like this is not already included in jasmine :/
export const customMatchers: any = {
  toBeWithinDelta: (util, customEqualityTesters) => {
    return {
      compare: (actual, expected, delta) => {
        return {
          pass: Math.abs(actual - expected) <= delta,
          message: `Expected ${actual} to be within ${expected} ± ${delta}`
        };
      }
    };
  }
};
