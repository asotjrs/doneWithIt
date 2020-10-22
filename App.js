import React , {useState} from 'react';
import {View, Text , StyleSheet} from 'react-native';
import Header from './components/Header'
import {uuid} from 'uuidv4';

const App=()=>{

  const [items, setItems]= useState([
      {id:uuid(),text:'milk'},
      {id:uuid(),text:'bean'},
      {id:uuid(),text:'greens'},
      {id:uuid(),text:'bread'},
      

  ])



  return (
      <View style={style.container}>

      <Header />     
  
     </View>
  )

}

const style =StyleSheet.create(
 {
  container:{
   flex:1,
  }


}



);


export default App;