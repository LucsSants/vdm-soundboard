import React from 'react';
import Logo from '../../assets/images/Logo';
import {Text} from 'react-native'

import { Container,Title, Image} from './styles';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';

export function Header(){
  return (
    
    <Container>
      <Image>
        <Logo/>
      </Image>

      <MaskedView maskElement={<Title style={{backgroundColor:'transparent'}}>Soundboard</Title>}>
        <LinearGradient
          start={{x:1, y:0}}
          end={{x:1, y:1}}
          colors={['#FF0051', '#F4ADC4']}
          >
            <Title style={{opacity: 0}}> Soundboard </Title>
        </LinearGradient>
      </MaskedView>
      
    </Container>
  );
}