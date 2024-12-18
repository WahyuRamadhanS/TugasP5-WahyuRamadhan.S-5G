import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function ProfileScreen({ route, navigation }) {
  const { photoUri } = route.params || { photoUri: 'https://randomuser.me/api/portraits/men/1.jpg' };

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        source={{ uri: photoUri }}
        containerStyle={styles.avatar}
      />
      <Text style={styles.text}>Wahyu Ramadhan</Text>
      <Button 
        title="Go Back" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
  },
  avatar: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});