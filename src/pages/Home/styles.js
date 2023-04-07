import styled from 'styled-components/native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const Container = styled.SafeAreaView`
  padding-top: ${getStatusBarHeight()}px;
  background-color: 'orange';
  flex: 1;
  
`

export const Text = styled.Text`
  color:#fff;

`

export const Line = styled.View`
border: 2px #404040;
width:90%;
height: 1px;
align-self:center;
margin-top:10px;
margin-bottom: 20px;

`

export const ButtonsList = styled.FlatList`

`




