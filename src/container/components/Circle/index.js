import Matter from 'matter-js';
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

function Circle({color, body, pos, status}) {
  const widthBody = body.bounds.max.x - body.bounds.min.x;
  const heightBody = body.bounds.max.y - body.bounds.min.y;

  const xBody = body.position.x - widthBody / 2;
  const yBody = body.position.y - heightBody / 2;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: status ? null : color,
        backgroundColor: status ? color : null,
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
  status: PropTypes.bool,
};

function CircleObject(world, name, status, color, pos, size) {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label: name, isStatic: status},
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
