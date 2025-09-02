import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from 'expo-router'

const TaskItem = ({task, onToggle}) => {
  return (
    <Link href={{ pathname: '/task/[id]', params: { id: task.id } }} asChild>
        <Pressable style={[styles.card, task.completed && styles.cardDone]}>
            <View style={styles.row}>
                <Pressable onPress={() => onToggle(task.id)} style={[styles.checkbox,
                task.completed && styles.checkboxOn]} />
                <View style={{ flex: 1 }}>
                    <Text style={[styles.title, task.completed && styles.titleDone]}
                    numberOfLines={1}>
                        {task.title}
                    </Text>
                    {!!task.description && (
                    <Text style={styles.subtitle} numberOfLines={1}>
                        {task.description}
                    </Text>
                    )}
                </View>
                <View style={[styles.pill, { backgroundColor:
                categoryColor(task.category) }]}>
                    <Text style={styles.pillText}>{capitalize(task.category)}</Text>
                </View>
            </View>
        </Pressable>
    </Link>
  )
}

export default TaskItem

function categoryColor(key) {
    switch (key) {
        case 'work': return '#2563EB';
        case 'personal': return '#059669';
        case 'study': return '#D97706';
        default: return '#6B7280';
    }
}

function capitalize(s) { return s?.charAt(0).toUpperCase() + s?.slice(1); }

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: '#EEF2FF',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 10,
    },
    cardDone: { opacity: 0.6 },
    row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    checkbox: {
        width: 22, height: 22, borderRadius: 6,
        borderWidth: 2, borderColor: '#CBD5E1', backgroundColor: '#fff'
    },
    checkboxOn: { backgroundColor: '#10B981', borderColor: '#10B981' },
    title: { fontSize: 16, fontWeight: '700', color: '#111827' },
    titleDone: { textDecorationLine: 'line-through', color: '#6B7280' },
    subtitle: { fontSize: 12, color: '#6B7280', marginTop: 2 },
    pill: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
    pillText: { color: 'white', fontSize: 12, fontWeight: '700' },
})