import { z } from 'zod';

export const Apod = z.object({
    copyright: z.string(),
    date: z.string(),
    explanation: z.string(),
    hdurl: z.string(),
    media_type: z.string(),
    service_version: z.string(),
    title: z.string(),
    url: z.string(),
});

export type Apod = z.infer<typeof Apod>;
