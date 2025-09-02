import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import { CATEGORIES } from '../constants/categories'

const CategoryTabs = ({value, onChange}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.row}>
        {CATEGORIES.map(cat => {
            const active = value === cat.key;
            return (
                <Pressable key={cat.key} onPress={() => onChange(cat.key)}
                style={[styles.tab, active && { backgroundColor: cat.color }]}>
                    <Text style={[styles.tabText, active && styles.tabTextActive]}
                    >{cat.label}</Text>
                </Pressable>
            );
        })}
    </ScrollView>
  )
}

export default CategoryTabs

const styles = StyleSheet.create({
    row: { gap: 8, paddingHorizontal: 12, paddingVertical: 8 },
    tab: {
        borderWidth: 1,
        borderColor: '#e5e7eb',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
        backgroundColor: '#fff',
    },
    tabText: { color: '#111827', fontWeight: '600' },
    tabTextActive: { color: '#fff' },
})