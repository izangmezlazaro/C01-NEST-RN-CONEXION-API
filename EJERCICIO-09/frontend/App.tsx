import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://10.254.139.245:3000';

type Heroe = {
  id: number;
  nombre: string;
  poder: number;
  universo: string;
};

export default function App() {
  const [id, setId] = useState('1');
  const [heroe, setHeroe] = useState<Heroe | null>(null);

  const buscarHeroe = async () => {
    try {
      const respuesta = await fetch(API_URL + '/heroes/' + id);
      setHeroe(await respuesta.json());
    } catch (error) {
      console.error(error);
      setHeroe(null);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>🦸 Busca superhéroe</Text>
        <TextInput
          style={styles.input}
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
          placeholder="Introduce ID (ej. 1, 2, 3)"
        />
        <Button title="Buscar" onPress={buscarHeroe} />
        {heroe && (
          <Text style={styles.result}>
            {heroe.nombre} · Poder {heroe.poder}
            {'\n'}Universo {heroe.universo}
          </Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#ffffff' },
  title: { fontSize: 24, fontWeight: '700' },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    padding: 12,
    marginVertical: 16,
    borderRadius: 10,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '500',
    color: '#1e293b',
  },
});
