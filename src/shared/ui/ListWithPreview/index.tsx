import styles from './style.module.scss';

interface ListWithPreviewProps {
    listTitle: string;
    listTexts: string[];
    img: string;
}

export function ListWithPreview({
    listTitle,
    listTexts,
    img,
}: ListWithPreviewProps) {
    return (
        <div className={styles.listWithPreview}>
            <div className={styles.content}>
                <h3 className={styles.listTitle}>{listTitle}</h3>
                <ul className={styles.list}>
                    {listTexts.map((i, idx) => {
                        return <li key={idx}>{i}</li>;
                    })}
                </ul>
                <img src={img} />
            </div>
        </div>
    );
}
