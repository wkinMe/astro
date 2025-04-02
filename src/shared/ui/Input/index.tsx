import { ChangeEvent, MouseEvent } from 'react';
import styles from './style.module.scss';

interface InputProps {
    type: string;
    value: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

export function Input({
    type,
    children,
    style,
    value,
    onChange,
    onClick,
}: InputProps) {
    return (
        <input
            className={styles.input}
            type={type}
            value={value}
            style={style}
            onChange={onChange}
            onClick={onClick}
        >
            {children}
        </input>
    );
}
