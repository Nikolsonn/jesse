import React from 'react';

import { test, expect } from '@playwright/experimental-ct-react';
import { App } from '../../../src/components/App.tsx';

test('should work', async ({ mount }) => {
  const component = await mount(<App/>);
  await expect(component).toContainText('Page to have an acces to different client test pages');
});