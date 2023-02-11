import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import vuetify, { components } from '@/plugins/vuetify';

import TitleMapView from '../TitleMapView.vue';

describe('Title Map View', () => {
  it('renders', async () => {
    expect(TitleMapView).toBeTruthy();

    const wrapper = mount(TitleMapView, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.text()).toContain("Map");
  })
})