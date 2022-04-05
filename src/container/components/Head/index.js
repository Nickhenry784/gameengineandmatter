import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {headSnakeStyle} from '../../styles';

Head.propTypes = {
  position: PropTypes.object,
  size: PropTypes.object,
};

function Head({position, size}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: 'red',
        position: 'absolute',
        left: position[0] * size,
        top: position[1] * size,
      }}
    />
  );
}

export default Head;
