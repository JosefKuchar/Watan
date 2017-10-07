import { Vector3 } from './Vector';

export enum Resources {
    // Basic - ordered from most common to least common
    Wheat,
    Wood,
    Animal,
    Ore,
    Brick,
    // Special
    Sand
}

export const Directions = [
    new Vector3(1, 0, -1), // Right UP
    new Vector3(1, -1, 0), // Right
    new Vector3(0, -1, 1), // Right DOWN
    new Vector3(-1, 0, 1), // Left DOWN
    new Vector3(-1, 1, 0), // Left
    new Vector3(0, 1, -1)  // Left UP
]