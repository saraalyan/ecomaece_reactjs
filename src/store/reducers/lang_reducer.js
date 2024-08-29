// const INITIAL_VALUE = {
//     lang: "en"
// };

// export default function languageReducer(state = INITIAL_VALUE, action) {
//     switch(action.type) {
//         case "CHANGE_LANG":
//             return {
//                 ...state,
//                 lang: action.payload
//             };
//         default:
//             return state;
//     }
// }
const INITIAL_VALUE = {
    lang: "en"
};

export default function languageReducer(state = INITIAL_VALUE, action) {
    switch(action.type) {
        case "CHANGE_LANG":
            return {
                ...state,
                lang: action.payload
            };
        default:
            return state;
    }
}

export const changeLang = (payload) => {
    return {
        type: "CHANGE_LANG", 
        payload
    }
}
