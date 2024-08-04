import {View, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={sytles.app}>
      <HomeScreen />
    </View>
  );
};

const sytles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
