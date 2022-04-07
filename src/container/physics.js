import Matter from 'matter-js';
import {Dimensions} from 'react-native';
import {getPipeRandom, getRandom} from './utils/random';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Physics = (entities, {touches, time, dispatch}) => {
  const {engine} = entities.physics;

  touches
    .filter(t => t.type === 'move')
    .forEach(t => {
      Matter.Body.setPosition(entities.Bird.body, {
        x: entities.Bird.body.position.x + t.delta.pageX,
        y: entities.Bird.body.position.y + t.delta.pageY,
      });
    });

  // eslint-disable-next-line no-plusplus
  for (let index = 1; index <= 2; index++) {
    if (
      entities[`Octable${index}`].body.bounds.max.y >=
        entities.Bird.body.bounds.max.y &&
      !entities[`Octable${index}`].point
    ) {
      entities[`Octable${index}`].point = true;
      dispatch({type: 'new_point'});
    }
    if (
      entities[`Octable${index}`].body.bounds.max.y >=
      entities.Bird.body.bounds.max.y
    ) {
      const pipeRandom = getPipeRandom();
      Matter.Body.setPosition(
        entities[`Octable${index}`].body,
        pipeRandom.pipe.pos,
      );
      entities[`Octable${index}`].point = false;
    }

    // va cham
    const collosion = Matter.Collision.collides(
      entities[`Octable${index}`].body,
      entities.Bird.body,
    );
    if (collosion !== null) {
      dispatch({type: 'game_over'});
    }

    // Matter.Body.translate(entities[`Octable${index}`].body, {x: 0, y: 1});
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
