import * as fromLoader from '../reducers/loader.reducer';
import { selectLoaderState } from './loader.selectors';

describe('Loader Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLoaderState({
      [fromLoader.loaderFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
