import Nav from './nav/nav';
import styles from './shared-ui--sample-ui-lib.module.css';

/* eslint-disable-next-line */
export interface SharedUiSampleUiLibProps {}

export function SharedUiSampleUiLib(props: SharedUiSampleUiLibProps) {
  return (
    <div className={styles['container']}>
      <Nav />
      <h1>Welcome to SharedUiSampleUiLib!</h1>
    </div>
  );
}

export default SharedUiSampleUiLib;
