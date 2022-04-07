import Matter from 'matter-js';
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

function Circle({color, body, pos}) {
  const widthBody = body.bounds.max.x - body.bounds.min.x;
  const heightBody = body.bounds.max.y - body.bounds.min.y;

  const xBody = body.position.x - widthBody / 2;
  const yBody = body.position.y - heightBody / 2;

  return (
    <View
      style={{
        borderWidth: 1,
        backgroundColor: color,
        borderStyle: 'solid',
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
}

Circle.propTypes = {
  color: PropTypes.string,
  pos: PropTypes.object,
  body: PropTypes.object,
};

function CircleObject(world, name, color, pos, size) {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label: name, isStatic: true},
  );

  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Circle />,
  };
}

export default CircleObject;
