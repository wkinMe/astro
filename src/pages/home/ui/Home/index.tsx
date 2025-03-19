import { Section } from '@shared/ui/Section';
import { URLS } from '@shared/config/urls';

export function Home() {
    const sections = [
        {
            title: 'Explore space world',
            link: {
                path: URLS.APOD,
                sideLink: true,
                children: 'Get best pictures of the week',
            },
        },
    ];
    return (
        <Section title={sections[0].title} link={sections[0].link}>
            <div></div>
        </Section>
    );
}
