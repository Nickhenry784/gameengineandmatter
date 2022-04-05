import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {FoodStyle} from '../../styles';

Food.propTypes = {
  position: PropTypes.object,
  size: PropTypes.object,
};

function Food({position, size}) {
  return <View style={FoodStyle(position, size)} />;
}

export default Food;
