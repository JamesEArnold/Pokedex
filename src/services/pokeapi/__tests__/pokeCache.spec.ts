import { pokeCache } from '../pokeCache';

describe('Pokeapi Cache', () => {
  beforeEach(() => {
    pokeCache.clear();
  });

  it('caches a value', () => {
    pokeCache.put('foo', 'bar');
    expect(pokeCache.get('foo')).toEqual('bar');
  });

  it('does not cache a value past our set time limit', async () => {
    pokeCache.put('foo', 'bar', 1000);
    await new Promise((res) => setTimeout(res, 1500));
    expect(pokeCache.get('foo')).toEqual(null);
  });
});
