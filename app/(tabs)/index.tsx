import { Link } from 'expo-router';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import CustomPressable from '../../components/Pressable';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen tab</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
      <Link href="/explore">
      <CustomPressable
        style={{ borderRadius: 4, backgroundColor: '#FF0063', padding: 8 }}
      >
        <Text style={{ color: 'white' }}>Press Me</Text>
      </CustomPressable>
      </Link>
      <Pressable onPress={() => Alert.alert("Pressed!")}>
        <Text style={{ fontSize: 18 }}>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
