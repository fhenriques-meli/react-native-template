import chroma from 'chroma-js';

const fromHsv = ({h, s, v}) => {
  return chroma.hsv(h, s, v).hex();
};

export default fromHsv;
