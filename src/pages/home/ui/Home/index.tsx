import { Section } from '@shared/ui/Section';
import { URLS } from '@shared/config/urls';
import { Gallery, ListWithPreview } from '@shared/ui';
import { ApodGallery } from '../../../../widgets/apodGallery';

export function Home() {
    const sections = [
        {
            title: 'Explore space world',
            link: {
                path: URLS.APOD,
                sideLink: true,
                text: '',
            },
            listTitle: 'Explore space by using Astro',
            listTexts: [
                'Full HD Images',
                'Current information',
                'Working directly with NASA API',
            ],
            img: 'https://apod.nasa.gov/apod/image/2503/eclipse-shot-from-blue-ghost-crop1024.jpg',
        },
        {
            title: 'Get fresh space pictures',
        },
    ];
    return (
        <Section title={sections[0].title} link={sections[0].link!}>
            <ListWithPreview
                listTitle={sections[0].listTitle!}
                listTexts={sections[0].listTexts!}
                img={sections[0].img!}
            />
            <ApodGallery />
        </Section>
    );
}
