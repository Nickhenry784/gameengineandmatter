import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getPipeRandom = (addToPosX = 0) => {
  const randomHeight = getRandom(400, 900);

  const pipe = {
    pos: {x: windowWidth / 2 + addToPosX, y: windowHeight},
    size: {height: randomHeight, width: 20},
  };
  const earn = {
    pos: {
      x: windowWidth / 2 + getRandom(addToPosX * 2, addToPosX * 3),
      y: windowHeight - 160,
    },
    size: {height: 5, width: 5},
  };

  return {pipe, earn};
};
