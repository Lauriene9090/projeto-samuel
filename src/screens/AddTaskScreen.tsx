import { useState } from 'react'

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'

import { supabase } from '../services/supabase'

export default function AddTaskScreen() {
  const [title, setTitle] = useState('')
  const [subject, setSubject] =
    useState('')
  const [description, setDescription] =
    useState('')

  async function handleAddTask() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    await supabase.from('tasks').insert([
      {
        title,
        subject,
        description,
        public: false,
        user_id: user?.id,
      },
    ])

    alert('Tarefa cadastrada')
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        gap: 10,
      }}
    >
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
        }}
      />

      <TextInput
        placeholder="Matéria"
        value={subject}
        onChangeText={setSubject}
        style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
        }}
      />

      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
        }}
      />

      <TouchableOpacity
        onPress={handleAddTask}
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
          }}
        >
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  )
}