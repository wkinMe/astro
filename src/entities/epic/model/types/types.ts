import * as z from 'zod';

export const AttitudeQuaternionsSchema = z.object({
    q0: z.number(),
    q1: z.number(),
    q2: z.number(),
    q3: z.number(),
});
export type AttitudeQuaternions = z.infer<typeof AttitudeQuaternionsSchema>;

export const CentroidCoordinatesSchema = z.object({
    lat: z.number(),
    lon: z.number(),
});
export type CentroidCoordinates = z.infer<typeof CentroidCoordinatesSchema>;

export const J2000PositionSchema = z.object({
    x: z.number(),
    y: z.number(),
    z: z.number(),
});
export type J2000Position = z.infer<typeof J2000PositionSchema>;

export const CoordsSchema = z.object({
    centroid_coordinates: CentroidCoordinatesSchema,
    dscovr_j2000_position: J2000PositionSchema,
    lunar_j2000_position: J2000PositionSchema,
    sun_j2000_position: J2000PositionSchema,
    attitude_quaternions: AttitudeQuaternionsSchema,
});
export type Coords = z.infer<typeof CoordsSchema>;

export const EpicSchema = z.object({
    identifier: z.string(),
    caption: z.string(),
    image: z.string(),
    version: z.string(),
    centroid_coordinates: CentroidCoordinatesSchema,
    dscovr_j2000_position: J2000PositionSchema,
    lunar_j2000_position: J2000PositionSchema,
    sun_j2000_position: J2000PositionSchema,
    attitude_quaternions: AttitudeQuaternionsSchema,
    date: z.coerce.date(),
    coords: CoordsSchema,
});
export type Epic = z.infer<typeof EpicSchema>;
