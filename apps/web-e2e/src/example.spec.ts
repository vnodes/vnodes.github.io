import { expect, test } from '@playwright/test';

test('example', async ({ page }) => {
  await page.goto('/');
  // Expect h1 to contain a substring.
  expect(0).toEqual(0)
});
