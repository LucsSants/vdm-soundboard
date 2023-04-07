import styled from 'styled-components/native'
import {PixelRatio} from 'react-native'

export const Container = styled.View`

padding-top: 12px;
padding-bottom: 15px;
flex-direction:row;
align-content:center;
align-items:center;
justify-content:center;

`

export const Title = styled.Text`
font-size: ${PixelRatio.get()* 16}px;
font-weight: 900;
margin-left: ${PixelRatio.get()* 5}px;


`

export const Image = styled.View`
  transform: rotate(-32.777deg);
  
`