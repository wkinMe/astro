import { Input } from '@shared/ui/Input';
import { ChangeEvent, MouseEvent } from 'react';

interface CalendarInputProps {
    date: Date;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: MouseEvent<HTMLInputElement>) => void;
}

export function CalendarInput({ date, onClick }: CalendarInputProps) {
    return (
        <Input onClick={onClick} value={date.toDateString()} type="button" />
    );
}
