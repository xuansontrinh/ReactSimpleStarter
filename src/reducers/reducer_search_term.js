export default function(state = null, action) {
  switch (action.type) {
    case 'CHANGE_TERM':
    return action.payload;
    break;
  }

  return '';
}