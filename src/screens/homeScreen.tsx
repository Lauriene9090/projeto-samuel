import {
  View,
 Text,
  TouchableOpacity,
} from 'react-native'

import { router } from 'expo-router'

export default function homeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111827',
        padding: 20,
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        Minhas tarefas
      </Text>

      <TouchableOpacity
        onPress={() =>
          router.push('./add-task')
        }
        style={{
          backgroundColor: '#7C3AED',
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Nova tarefa
        </Text>
      </TouchableOpacity>
    </View>
  )
}