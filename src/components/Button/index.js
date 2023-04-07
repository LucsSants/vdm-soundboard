import React from 'react';

import { Container, Title } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import { useState, useEffect } from 'react';

import { Audio } from 'expo-av';

import getRequire from '../../utils/getRequire'

export function Button({data}){

  const [sound, setSound] = useState();

  async function playSound() {
    console.log();
    const { sound } = await Audio.Sound.createAsync(
       getRequire(data.fileName)
    );
    setSound(sound);
    await sound.playAsync(); }

  async function stopSound() {
      if (sound) {
        sound.unloadAsync()
      } 
  
  }

    useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
  
  return (
    <LinearGradient
    colors={data.colors}
    style={{borderRadius:20}}
    >
      <Container onPress={()=> playSound()} onLongPress={()=> stopSound()} > 
      <Title>
        {data.title}
      </Title>
    </Container>
    </LinearGradient>
    
  );
}