import React, {useState}from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableWithoutFeedback} from 'react-native';
import { FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [tarefas, setTarefas] = useState([]);	

  const handleAdd = () => {
    setTarefas([...tarefas, text]);
    setText('');
  }

  const handleRenderTarefas = ({item}) => {
    return (
      <Text>{item}</Text>
    )
  }

  return (
   <SafeAreaView style={styles.container}>
      <Text>Todo list</Text>
      <TextInput  
      value={text}
      onChangeText={text => setText(text)}
        style={{
          borderWidth: 1, 
          borderColor: 'black', 
          width: 200, height: 40
      }}/>
      <TouchableWithoutFeedback 
        onPress={handleAdd}>
        <Text style={{
          borderRadius: 5,
          borderColor: 'black',
          width: 200,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          backgroundColor: "aqua"
        }}>Enviar</Text>
      </TouchableWithoutFeedback>
      <FlatList 
      data={tarefas} 
      keyExtractor={item => item}
      renderItem={handleRenderTarefas}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
