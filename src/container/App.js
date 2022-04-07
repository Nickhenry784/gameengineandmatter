import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar, Text, TouchableOpacity} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {appStyles} from './styles';
import entities from './entities';
import Physics from './physics';

App.propTypes = {};

function App(props) {
  const [isRunning, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [point, setPoint] = useState(0);

  useEffect(() => {
    setRunning(false);
  }, []);
  return (
    <View style={appStyles.canvas}>
      <Text style={appStyles.pointText}>{point}</Text>
      <GameEngine
        ref={ref => {
          setGameEngine(ref);
        }}
        style={appStyles.gameEngineStyle}
        systems={[Physics]}
        running={isRunning}
        onEvent={e => {
          // eslint-disable-next-line default-case
          switch (e.type) {
            case 'game_over':
              setRunning(false);
              gameEngine.stop();
              setPoint(0);
              break;
            case 'new_point':
              setPoint(point + 1);
              break;
          }
        }}
        entities={entities()}
      />
      <StatusBar hidden />
      {!isRunning ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
            onPress={() => {
              setPoint(0);
              setRunning(true);
              gameEngine.swap(entities());
            }}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 30}}>
              START GAME
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

export default App;
