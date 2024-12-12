import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

interface Props {
    onSubmit: (nombre: string, precio:number) => void;
}

export default function AddProductsForm({onSubmit}: Props) {
    const[nombre, setNombre] = useState('')
    const[precio, setPrecio] = useState(0)
    
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      value={nombre}
      onChangeText={setNombre}
      />
      <TextInput 
        style={styles.input}
        value={precio.toString()} // Convertir a string para TextInput
        onChangeText={(text) => setPrecio(parseFloat(text))} 
        />
      <Button color={'black'} title='Subir' onPress={() => {
        onSubmit(nombre, precio)
        setNombre('')
        setPrecio(0)
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:16,
    },
    input:{
        borderColor:'gray',
        borderWidth:1,
        padding:8,
    }
})