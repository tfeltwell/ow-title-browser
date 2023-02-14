import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import vuetify from '@/plugins/vuetify';

import TitleDetails from '../TitleDetails.vue';
const { testData } = require('./testData.js');

describe('Title Details', () => {
  it('renders', async () => {
    expect(TitleDetails).toBeTruthy();

    const wrapper = mount(TitleDetails, {
      global: {
        plugins: [vuetify],
      },
      props: {
        details: {
          number: testData['Title Number'],
          tenure: testData['Tenure']
        }
      }
    });
    expect(wrapper.text()).toContain(testData['Title Number']);
    expect(wrapper.text()).toContain(testData['Tenure']);
  });
});