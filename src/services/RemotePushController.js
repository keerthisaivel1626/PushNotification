import {View, Text} from 'react-native';
import React from 'react';
import PushNotification from 'react-native-push-notification';
const RemotePushController = () => {
  React.useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log(' Remote NOTIFICATION:', notification);
      },
      senderID: '564337169655',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  return null;
};

export default RemotePushController;
