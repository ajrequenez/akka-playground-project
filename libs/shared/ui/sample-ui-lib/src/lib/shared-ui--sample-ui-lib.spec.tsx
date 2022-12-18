import { render } from '@testing-library/react';

import SharedUiSampleUiLib from './shared-ui--sample-ui-lib';

describe('SharedUiSampleUiLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiSampleUiLib />);
    expect(baseElement).toBeTruthy();
  });
});
