export default function(state = null, action) {
  switch (action.type) {
    case 'SELECT_VIDEO':
    return action.payload;
    break;
  }

  return state;
}