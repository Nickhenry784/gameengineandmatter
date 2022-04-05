import {StyleSheet} from 'react-native';
import contants from './contants';

const BoardSize = contants.GRID_SIZE * contants.CELL_SIZE;

export const appStyles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameEngineStyle: {
    width: BoardSize,
    height: BoardSize,
    flex: null,
    backgroundColor: 'white',
  },
});

export const headSnakeStyle = (position, size) =>
  StyleSheet.create({
    width: size,
    height: size,
    backgroundColor: 'red',
    position: 'absolute',
    left: position[0] * size,
    top: position[1] * size,
  });

export const FoodStyle = (position, size) =>
  StyleSheet.create({
    width: size,
    height: size,
    backgroundColor: 'blue',
    position: 'absolute',
    left: position[0] * size,
    top: position[1] * size,
    borderRadius: 2,
  });
