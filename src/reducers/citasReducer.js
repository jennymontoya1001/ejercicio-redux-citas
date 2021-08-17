import { types } from '../types/types';

const initialState = {
    citas: []
}

export const citasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.agregar:
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }
        case types.borrar:
            return {
                ...state,
                citas: state.citas.find(cita => cita.id === action.payload)
            }
        default:
            return state
    }
}