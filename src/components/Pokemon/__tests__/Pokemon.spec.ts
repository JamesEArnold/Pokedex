import { VueWrapper, mount } from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import Pokemon from '../Pokemon.vue';

describe('Pokemon.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<typeof Pokemon>>;

  it('is true', () => {
    expect(true).toBe(true);
  });
});
