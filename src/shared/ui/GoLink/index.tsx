import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { clsx } from 'clsx';

export interface GoLinkProps {
    path: string;
    sideLink: boolean;
    text: string | React.ReactNode;
}

export function GoLink({ path, sideLink, text }: GoLinkProps) {
    const className = clsx({
        [styles.link]: true,
        [styles.sideLink]: sideLink,
    });

    return (
        <Link to={path} className={className}>
            {typeof text === 'string' ? (
                `${text} ->`
            ) : (
                <>
                    {text} {' ->'}
                </>
            )}
        </Link>
    );
}
