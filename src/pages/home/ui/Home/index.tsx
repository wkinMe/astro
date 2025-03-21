import { Section } from '@shared/ui/Section';
import { URLS } from '@shared/config/urls';
import { ListWithPreview, RotatedGallery } from '@shared/ui';
import { ApodGallery } from '@entities/apod';
import { EpicRotatedGallery } from '@entities/epic';

export function Home() {
    const sections = [
        {
            title: 'Explore space world',
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
            link: {
                path: URLS.APOD,
                sideLink: true,
                text: 'Get best picutres of the week',
            },
        },
        {
            title: 'View of our home',
            subtitle: 'Get images of EPIC camera',
            link: {
                path: URLS.EPIC,
                sideLink: false,
                text: 'Get today pictures',
            },
        },
    ];
    return (
        <>
            <Section title={sections[0].title} link={sections[0].link!}>
                <ListWithPreview
                    listTitle={sections[0].listTitle!}
                    listTexts={sections[0].listTexts!}
                    img={sections[0].img!}
                />
            </Section>
            <Section title={sections[1].title} link={sections[1].link}>
                <ApodGallery />
            </Section>
            <Section
                title={sections[2].title}
                subtitle={sections[2].subtitle}
                link={sections[2].link}
            >
                <EpicRotatedGallery />
            </Section>
        </>
    );
}
