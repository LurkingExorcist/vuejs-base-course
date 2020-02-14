import {
    GET_RADIO_TRACKLISTS
} from './types'

export default {
    [GET_RADIO_TRACKLISTS]: (state, items) => {
        state.items = items;
        state.subjectType = 'radio';
    }
};
