import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import vuetify, { components } from '@/plugins/vuetify';

import TitleDetails from '../TitleDetails.vue';

describe('Title Details', () => {
  it('renders', async () => {
    expect(TitleDetails).toBeTruthy();

    const testProps = {
      title_number: '243751',
      title_class: 'Freehold'
    }
    const wrapper = mount(TitleDetails, {
      global: {
        plugins: [vuetify],
      },
      props: testProps
    });

    expect(wrapper.text()).toContain(testProps.title_number);
    expect(wrapper.text()).toContain(testProps.title_class);
  });
});