import PushNotification from 'react-native-push-notification';
console.log("calling")
PushNotification.configure({
  onNotification: function (notification) {
    console.log(' LOCAL NOTIFICATION:', notification); 
  },
  popInitialNotification: true,
  requestPermissions: true,
});
 PushNotification.createChannel(
   {
     channelId: 'channel-id', 
     channelName: 'My channel', 
     channelDescription: 'A channel to categorise your notifications', 
     playSound: true, 
     soundName: 'default', 
    // importance:10,
     vibrate: true, 
     vibration:1000,
   },
   created => console.log(`createChannel returned '${created}'`), 
 );
 export const LocalPushNotification=()=>{
   PushNotification.localNotification({
     channelId: 'channel-id',
     channelName: 'My channel',
     autoCancel:true,
     bigText:'This is local notification demo from react-native. it will show when expended',
     subText:'Local Notification',
     title:'local notification title',
     message:'hey expand me!!!!!',
     playSound: true,
     soundName: 'default',
     importance: 10,
     vibrate: true,
     vibration: 1000,
   }); 
 }