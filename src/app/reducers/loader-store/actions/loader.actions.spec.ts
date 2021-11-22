import * as fromLoader from './loader.actions';

describe('loadLoaders', () => {
  it('should return an action', () => {
    expect(fromLoader.loadLoaders().type).toBe('[Loader] Load Loaders');
  });
});
