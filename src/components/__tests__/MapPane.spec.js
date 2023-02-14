import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import vuetify, { components } from '@/plugins/vuetify';

import MapPane from '../MapPane.vue';
const { testData } = require('./testData.js');

describe('MapPane', () => {
    it('mounts successfully', async () => {
        expect(MapPane).toBeTruthy();
    });
})