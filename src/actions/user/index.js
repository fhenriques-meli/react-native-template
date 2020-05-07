const selectColor = (payload) => ({type: 'SELECT_COLOR', payload});
const selectBrightness = (payload) => ({type: 'SELECT_BRIGHTNESS', payload});

export default {
  selectColor,
  selectBrightness,
};
