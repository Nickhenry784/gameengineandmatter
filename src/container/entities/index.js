import Matter from 'matter-js';
import {Dimensions} from 'react-native';
import ObjectBird from '../components/Circle';
import ObjectFloor from '../components/Floor';
import ObjectOctable from '../components/Octable';
import {getPipeRandom, getRandom} from '../utils/random';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default restart => {
  const engine = Matter.Engine.create({enableSleeping: false});

  const {world} = engine;

  engine.gravity.y = 0.1;

  const pipeRandom = getPipeRandom(0);

  const pipeRandom1 = getPipeRandom(-100);

  return {
    physics: {engine, world},

    Bird: ObjectBird(
      world,
      'Bird',
      'blue',
      {x: windowWidth / 2, y: 500},
      {height: 100, width: 20},
    ),

    Octable1: ObjectOctable(
      world,
      'Octable',
      'green',
      pipeRandom.pipe.pos,
      pipeRandom.pipe.size,
    ),
    Octable2: ObjectOctable(
      world,
      'Octable',
      'green',
      pipeRandom1.pipe.pos,
      pipeRandom1.pipe.size,
    ),
  };
};
