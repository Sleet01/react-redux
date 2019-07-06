export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';
// Skipped Leaderboard section for now
export const SHOOT = 'SHOOT';

export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});

export const startGame = () => ({
    type: START_GAME,
});

export const shoot = (mousePosition) => ({
    type: SHOOT,
    mousePosition,
});