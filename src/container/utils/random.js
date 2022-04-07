import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getPipeRandom = (addToPosX = 0) => {
  const randomHeight = getRandom(100, 200);

  const pipe = {
    pos: {x: getRandom(addToPosX, windowWidth), y: 0 - getRandom(100, 300)},
    size: {height: randomHeight, width: 20},
  };

  return {pipe};
};
