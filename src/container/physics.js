import Matter from 'matter-js';
import {Dimensions} from 'react-native';
import {getPipeRandom, getRandom} from './utils/random';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Physics = (entities, {touches, time, dispatch}) => {
  const {engine} = entities.physics;

  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Bird.body, {
        x: 0,
        y: -20,
      });
    });

  // eslint-disable-next-line no-plusplus
  for (let index = 1; index <= 2; index++) {
    if (
      entities[`Octable${index}`].body.bounds.max.x <= 150 &&
      !entities[`Octable${index}`].point
    ) {
      entities[`Octable${index}`].point = true;
      dispatch({type: 'new_point'});
    }
    if (entities[`Octable${index}`].body.bounds.max.x <= 0) {
      const pipeRandom = getPipeRandom(windowWidth * 0.7);
      Matter.Body.setPosition(
        entities[`Octable${index}`].body,
        pipeRandom.pipe.pos,
      );
      entities[`Octable${index}`].point = false;
    }

    const collosion = Matter.Collision.collides(
      entities[`Octable${index}`].body,
      entities.Bird.body,
    );
    if (collosion !== null) {
      dispatch({type: 'game_over'});
    }

    Matter.Body.translate(entities[`Octable${index}`].body, {x: -3, y: 0});
  }

  if (
    entities.Bird.body.bounds.max.x <= 0 ||
    entities.Bird.body.bounds.max.y <= 0
  ) {
    dispatch({type: 'game_over'});
  }

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
