import {
    GET_ITEMS,
    SET_ITEMS_LOADED,
    SET_CURRENT_TRACK
} from './types'

export default {
    [GET_ITEMS]: (state, items) => {
        state.items = items;
    },
    [SET_ITEMS_LOADED]: (state, value) => {
        state.itemsLoaded = value;
    },
    [SET_CURRENT_TRACK]: (state, track) => {
        state.currentTrack = track;
    }
};
