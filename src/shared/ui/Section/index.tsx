import { Container } from '@shared/ui/Container';
import { Title } from '@shared/ui/Title';
import { Subtitle } from '@shared/ui/Subtitle';
import { GoLink, GoLinkProps } from '@shared/ui/GoLink';

interface SectionProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    link: GoLinkProps;
    children: React.ReactNode;
}

export function Section({ title, subtitle, link, children }: SectionProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
            {link.text && (
                <GoLink
                    path={link.path}
                    sideLink={link.sideLink}
                    text={link.text}
                />
            )}
        </Container>
    );
}
