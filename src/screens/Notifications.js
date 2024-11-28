import { Button, View } from 'react-native';

function Notifications({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go Home"
        />
      </View>
    );
  }
  
  export default Notifications;