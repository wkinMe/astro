import { ChangeEvent } from 'react';
import styles from './style.module.scss';

interface InputProps {
    type: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type, children, style, onChange }: InputProps) {
    return (
        <input
            className={styles.input}
            type={type}
            style={style}
            onChange={onChange}
        >
            {children}
        </input>
    );
}
