import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import vuetify, { components } from '@/plugins/vuetify';

import Welcome from '../Welcome.vue';

describe('Welcome', () => {
  it('mount component', async () => {
    expect(Welcome).toBeTruthy();
    const inputText = 'OW Technical Task'
    const wrapper = mount(Welcome, {
      global: {
        plugins: [vuetify],
      },
      props: {
        msg: inputText
      }
    });

    // const img = wrapper.findComponent(components.VImg);
    // expect(img).toBeTruthy();

    expect(wrapper.text()).toContain(inputText);
  });
});