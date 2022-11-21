import { View, Text ,StyleSheet,Button} from 'react-native'
import React from 'react'
import { LocalPushNotification } from './src/services/LocalPushController'
import RemotePushController from './src/services/RemotePushController'
const App = () => {
  const handleButtonPress=()=>{
    LocalPushNotification();
  }
  return (
    <View style={styles.container}>
      <Text>press a button to trigger the notification</Text>
    <View style={{marginTop:20}}>
      <Button title="Local Notification" onPress={handleButtonPress}/>
    </View>
    <RemotePushController/>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default App