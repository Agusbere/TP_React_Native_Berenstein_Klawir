import { Text, View, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aguante macabi</Text>
      <Image source={require('./assets/macabi.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32, 
    color: 'black',
    transform: [{ rotate: '180deg' }],
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
