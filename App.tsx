import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        style={styles3.titleStyle}
        >Caso queira, coloque uma mensagem inicial aqui
      </Text>

      <Text 
        style={styles2.titleStyle}
        >Caso queira, coloque uma mensagem secundária aqui
      </Text>
        
      <StatusBar style="auto" />
    </View>
  );
}


const styles2 = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: 'black',
    backgroundColor: '#fff',

  }
})

const styles3 = StyleSheet.create({
  titleStyle:{
    fontSize: 30,
    color:'black',
    backgroundColor: '#fff',
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
