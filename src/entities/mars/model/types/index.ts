import * as z from 'zod';

// NASA API response
export const CameraSchema = z.object({
    id: z.number(),
    name: z.string(),
    rover_id: z.number(),
    full_name: z.string(),
});
export type Camera = z.infer<typeof CameraSchema>;

export const RoverSchema = z.object({
    id: z.number(),
    name: z.string(),
    landing_date: z.string(),
    launch_date: z.string(),
    status: z.string(),
});
export type Rover = z.infer<typeof RoverSchema>;

export const PhotoSchema = z.object({
    id: z.number(),
    sol: z.number(),
    camera: CameraSchema,
    img_src: z.string(),
    earth_date: z.string(),
    rover: RoverSchema,
});
export type Photo = z.infer<typeof PhotoSchema>;

export const MarsSchema = z.object({
    photos: z.array(PhotoSchema),
});
export type Mars = z.infer<typeof MarsSchema>;
