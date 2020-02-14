import axios from 'axios';

import {
    GET_RADIO_TRACKLISTS
} from './types'

export default {
    async getRadio({ commit }) {
        const { data } = await axios.get(`/api/radio`);

        commit(GET_RADIO_TRACKLISTS, data.data);
    }
};
