import { Link } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tasks</Text>

      {/* Link to Add Task */}
      <Link href="/taskedit/edit" asChild>
        <Button title="Add Task" />
      </Link>

      {/* Example of linking to a task with id=1 */}
      <Link href="/task/1" asChild>
        <Button title="View Task 1" />
      </Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'red',
    marginBottom: 20,
  },
})