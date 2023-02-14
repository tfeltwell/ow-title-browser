import { describe, expect, it } from 'vitest';

import Store from './store';
console.log(Store);
// const { getTitleById } = getters;

// Mounting isn't working right, need to come back to this: https://test-utils.vuejs.org/guide/advanced/vuex.html#testing-with-a-mock-store

describe('State - Getters', () => {
  it('returns -1 if id is longer than titleList length', async () => {
    const state = { titleList: [] }
    const result = getTitleById(state, 10);
    expect(result).toBe(-1);
  });
});