import styled from 'styled-components/native'
import {PixelRatio} from 'react-native'

export const Container = styled.TouchableOpacity`
align-items: center;
justify-content:center;
flex-grow: 1;
margin: 4px;
padding: 20px;
height:180px;
border-radius:10px;

`
export const Title = styled.Text`
color: #fff;
font-size:${PixelRatio.get()*9}px;
text-align:center;
font-weight:bold;

`