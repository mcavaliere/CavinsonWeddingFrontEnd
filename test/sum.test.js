import Constants from '../src/lib/Constants';

test('GA tracking code', () => {
  expect(Constants.GA_TRACKING_ID).toBe("UA-3409001-6");
});
