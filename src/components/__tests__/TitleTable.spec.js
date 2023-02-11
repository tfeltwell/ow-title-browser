import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import vuetify, { components } from '@/plugins/vuetify';

import TitleTable from '../TitleTable.vue';

describe('Title Table', () => {
  it('renders', async () => {
    expect(TitleTable).toBeTruthy();

    const wrapper = mount(TitleTable, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.text()).toContain("Title number");
    expect(wrapper.text()).toContain("Class of title");
  });
});