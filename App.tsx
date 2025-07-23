import {
  View,
  Text,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';


const App = () => {
   const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

const backgroundColor = isDarkMode ? 'black' : 'white';
const textColor = isDarkMode ? 'white' : 'black';
const borderColor = isDarkMode ? 'lightgrey' : 'grey';
const buttonBorderColor = isDarkMode ? 'white' : 'grey';
  return (
    <SafeAreaView style={[styles.container,{backgroundColor:backgroundColor}]}>
      <Text style={[styles.text,{color:textColor}]}>Hi i'm Harsh</Text>

      {/* Images are Here */}
      <Image
        style={[styles.image,{borderColor:borderColor}]}
        source={{
          uri: 'https://images.unsplash.com/photo-1752350434901-e1754a4784fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        }}
      />
      <Image
        style={[styles.img2,{borderColor:borderColor}]}
        source={{
          uri: 'https://images.unsplash.com/photo-1753012102486-e6fa2dd0558a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
        }}
      />

      {/* Buttons are Here */}

      <TouchableOpacity
        style={[styles.button,{borderColor: buttonBorderColor}]}
        onPress={() => Alert.alert('TouchableOpacity pressed!')}
      >
        <Text style={styles.btnText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={[styles.button,{borderColor: buttonBorderColor}]}
        onPress={() => Alert.alert('TouchableHighlight pressed!')}
      >
        <Text style={styles.btnText}>TouchableHighlight</Text>
      </TouchableHighlight>

      <Pressable
        style={[styles.button,{borderColor: buttonBorderColor}]}
        onPress={() => Alert.alert('Pressable pressed!')}
      >
        <Text style={styles.btnText}>Pressable</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 60,
    fontWeight: 400,
    textDecorationLine: 'none',
  },
  image: {
    borderWidth: 4,
    width: 300,
    height: 300,
    borderRadius: 50,
  },
  img2: {
    borderWidth: 4,
    width: 250,
    height: 250,
    borderRadius: 50,
  },

  button: {
    backgroundColor: 'wheat',
    fontSize: 20,
    borderRadius: 50,
    padding: 20,
    borderWidth: 4,
    width: '50%',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  btnText: {
    color: 'black',
    fontSize: 19,
    fontWeight: '500',
  },
});
