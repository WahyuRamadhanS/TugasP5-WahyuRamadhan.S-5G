import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Welcome Home!</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Explore the amazing features of our app. Click below to view your profile and start your journey with us!
        </Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile', {
            photoUri: 'file:///Users/wahyu/Documents/KULIAH/SMST%205/P.DPM/tugasP5/assets/IMG_20230318_005320_669.jpg',
          })}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    marginBottom: 10,
    textAlign: 'center',
  },
});