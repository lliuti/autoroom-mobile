import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Button } from './styles';

export default function Main() {
  const [lightOn, setLightOn] = useState(false);

  const lightColor = lightOn === true ? '#F1FF67' : '#111';

  async function handleLightSwitch() {
    lightOn === true ? setLightOn(false) : setLightOn(true)
  };
  
  return (
    <Container>
      <Button onPress={handleLightSwitch}>
        {/* <FontAwesome5 name='lightbulb'/>   */}
        <Icon name='lightbulb-o' color={lightColor} size={512}/>
      </Button>
    </Container>
  )
};