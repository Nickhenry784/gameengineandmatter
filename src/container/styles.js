import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameEngineStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  pointText: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    top: 10,
  },
});
