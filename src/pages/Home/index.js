import react from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Header } from '../../components/Header';

import { Container, Text, Line, ButtonsList} from './styles';
import { Button } from '../../components/Button';

import data from '../../utils/sounds.json' 
import GridFlatList from 'grid-flatlist-react-native';

import { Dimensions } from 'react-native'



export function Home(){
  function getNumberOfColums() {
    if (Dimensions.get('window').width <=500) {
      return 2
    } else {
      return 4
    }
  }
  
  return (
      <LinearGradient
      colors={[ '#3D3D3D' ,'#212121', '#141414']}
      style={{flex:1}}
      >
        <Container>

          <Header/>
          <Line/>

          <GridFlatList
            data={data.sounds}
            numColumns={getNumberOfColums()}
            gap={9}
            paddingHorizontal={10}
            renderItem = {(item) => <Button data={item} />}
          />

        </Container>
      </LinearGradient>
      
    
    
  );
}