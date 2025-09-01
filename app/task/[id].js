import { useLocalSearchParams, Link } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

const TaskDetails = () => {
    const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Detail for ID: {id}</Text>

      {/* Edit the current task */}
      <Link href="/task/edit" asChild>
        <Button title="Edit Task" />
      </Link>

      <Link href="/" asChild>
        <Button title="Back to Home" />
      </Link>
    </View>
  )
}

export default TaskDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
})