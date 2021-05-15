/* eslint-disable no-undef */
describe('Initial Tests', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  afterAll(async () => {
    await device.terminateApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('loads into the menu screen', async () => {
    await expect(element(by.id('menu-screen'))).toBeVisible();
  });
});
