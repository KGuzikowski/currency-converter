export interface extraPointsStateType {
    accepted: boolean
}

export const extraPointsActionType = {
    ACCEPT_EXTRA_POINTS: 'ACCEPT_EXTRA_POINTS'
}

export interface acceptExtraPointsType {
    type: typeof extraPointsActionType.ACCEPT_EXTRA_POINTS
}
