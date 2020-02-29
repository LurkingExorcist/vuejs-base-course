import axios from 'axios';

import {
    GET_ITEMS,
    SET_ITEMS_LOADED,
    SET_CURRENT_TRACK
} from './types'

export default {
    async getItems({ commit }, type) {
        commit(SET_ITEMS_LOADED, false);

        const { data } = await axios.get(`/api/${type}`);
        commit(GET_ITEMS, data);
        commit(SET_ITEMS_LOADED, true);
    },
    async searchItems({ commit }, query) {
        commit(SET_ITEMS_LOADED, false);

        const { data } = await axios.get(`/api/search?q=${query}`);
        commit(GET_ITEMS, data);
        commit(SET_ITEMS_LOADED, true);
    },
    clearItems({ commit }) {
        commit(SET_ITEMS_LOADED, true);
        commit(GET_ITEMS, []);
    },
    setCurrentTrack({ commit }, track) {
        commit(SET_CURRENT_TRACK, track);
    }
};
