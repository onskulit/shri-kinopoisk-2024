import { UserIcon } from '@components/UserIcon';

import styles from './UserAvatar.module.css';

export const UserAvatar = () => {
    return (
        <div className={styles.container}>
            <UserIcon color="secondary" width={24} height={24} />
        </div>
    );
};
