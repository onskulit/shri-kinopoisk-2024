import { Text } from '@components/Text';
import { ERROR_TEXT } from '@helpers/consts';

import styles from './ErrorText.module.css';

export const ErrorText = () => (
    <Text size="xs" className={styles.container}>
        {ERROR_TEXT}
    </Text>
);
