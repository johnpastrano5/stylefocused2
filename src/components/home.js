
import { View,Button} from 'react-native'
import React from 'react'
import { Text,  } from 'react-native-paper';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
  
        />
      </View>
    );
  }



export default Home
