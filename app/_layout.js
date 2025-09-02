import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
        headerStyle: { backgroundColor: '#111827' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '800' },
        contentStyle: { backgroundColor: '#F8FAFC' },
        }}>
            <Stack.Screen name="index" options={{ title: 'Tasks' }} />
            <Stack.Screen name="task/[id]" options={{ title: 'Task Detail' }} />
            <Stack.Screen name="task/edit" options={{ title: 'Add / Edit Task' }} />
        </Stack>
    );
}