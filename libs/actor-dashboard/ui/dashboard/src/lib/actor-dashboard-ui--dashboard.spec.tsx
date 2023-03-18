import { render } from '@testing-library/react';

import ActorDashboardUiDashboard from './actor-dashboard-ui--dashboard';

describe('ActorDashboardUiDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActorDashboardUiDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
