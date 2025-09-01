import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'

const TaskEdit = () => {

    const [title, setTitle] = useState('')
    const router = useRouter()

    const handleSave = () => {
        // save task logic here
        console.log("Saving task:", title)
        router.push("/") // navigate back to home
    }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Add / Edit Task</Text>
        <TextInput
            placeholder="Task Title"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
        />
        <Button title="Save" onPress={handleSave} />
    </View>
  )
}

export default TaskEdit

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
})