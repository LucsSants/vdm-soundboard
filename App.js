import react  from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" 
      translucent
      backgroundColor= '#141414'
      />
      <Home/>
    </>
    
  );
}


