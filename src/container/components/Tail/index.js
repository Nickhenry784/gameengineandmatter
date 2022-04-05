import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import contants from '../../contants';

Tail.propTypes = {
  position: PropTypes.object,
  size: PropTypes.object,
  elements: PropTypes.array,
};

function Tail({elements, position, size}) {
  const tailList = elements.map((el, idx) => (
    <View
      key={idx}
      style={{
        width: size,
        height: size,
        position: 'absolute',
        left: el[0] * size,
        top: el[1] * size,
        backgroundColor: 'red',
      }}
    />
  ));
  return (
    <View
      style={{
        width: contants.GRID_SIZE * size,
        height: contants.GRID_SIZE * size,
      }}>
      {tailList}
    </View>
  );
}

export default Tail;
