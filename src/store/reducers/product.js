const initialState = {
    index:0,
    title: 'All Product'
}
export default function(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH': {
            return action.payload
        }
    }
}