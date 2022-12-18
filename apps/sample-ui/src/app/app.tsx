// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { SharedUiSampleUiLib } from '@dotnet/shared/ui//sample-ui-lib';

export function App() {
  return (
    <>
      <SharedUiSampleUiLib />
      <NxWelcome title="sample-ui" />
      <div />
    </>
  );
}

export default App;
