import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button,Image } from 'react-native';
//import { Container, Navbar } from 'navbar-native';
import { LinearGradient } from 'expo-linear-gradient';

// Get screen dimensions -> pour récupérer les dimensions actuelles du phone
const { heigh, width } = Dimensions.get('window');

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
    <View style={styles.header}>
    <Text style={styles.appTitle}>New neighbour</Text>
    </View>
      <View >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
       </View>
       <View >
      <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View>
      <TextInput style={styles.input} placeholder="Phone number" />
      </View>
      <View>
      <TextInput style={styles.input} placeholder="Adress " />
      </View>
      <View>
      <TextInput style={styles.input} placeholder="About me" />
      </View>
      <View>
      <Button
            title="Save"
            onPress={() => Alert.alert('pressed')}
          />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  appTitle: {
    textAlign:'center',
    color: '#fff',
   marginBottom:15,
    fontSize: 35,
    fontWeight: '300'
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius:150/2,
    margin:10
  },
  header:{
    height:100,
    backgroundColor: '#74D0F1',
    width:600,
    paddingTop:40
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  }
});
