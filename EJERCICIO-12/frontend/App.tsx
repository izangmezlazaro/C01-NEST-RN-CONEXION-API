import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://10.254.139.245:3000';

type Criatura = {
  id: number;
  nombre: string;
  nivel: number;
  poder: number;
  likes: number;
  emoji: string;
};

export default function App() {
  const [criaturas, setCriaturas] = useState<Criatura[]>([]);
  const [seleccionada, setSeleccionada] = useState<Criatura | null>(null);

  const cargarCriaturas = async () => {
    try {
      const r = await fetch(API_URL + '/criaturas');
      setCriaturas(await r.json());
    } catch (error) {
      console.error(error);
    }
  };

  const seleccionar = async (id: number) => {
    try {
      const r = await fetch(API_URL + '/criaturas/' + id);
      setSeleccionada(await r.json());
    } catch (error) {
      console.error(error);
    }
  };

  const darLike = async () => {
    if (!seleccionada) return;

    try {
      const r = await fetch(
        API_URL + '/criaturas/' + seleccionada.id + '/like',
        { method: 'PATCH' }
      );

      const actualizada = await r.json();
      setSeleccionada(actualizada);
      await cargarCriaturas();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarCriaturas();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>🧪 Creature Lab</Text>

        {seleccionada && (
          <View style={styles.hero}>
            <Text style={styles.emoji}>{seleccionada.emoji}</Text>
            <Text style={styles.name}>{seleccionada.nombre}</Text>
            <Text>
              Nivel {seleccionada.nivel} · Poder {seleccionada.poder}
            </Text>
            <Text>❤️ {seleccionada.likes}</Text>
            <Button title="❤️ Me gusta" onPress={darLike} />
          </View>
        )}

        <FlatList
          data={criaturas}
          keyExtractor={(item) => String(item.id)}
          horizontal
          renderItem={({ item }) => (
            <Pressable
              style={styles.item}
              onPress={() => seleccionar(item.id)}
            >
              <Text style={styles.itemEmoji}>{item.emoji}</Text>
              <Text>{item.nombre}</Text>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#ffffff' },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 18,
  },
  hero: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#EEF4FF',
    marginBottom: 20,
  },
  emoji: { fontSize: 48 },
  name: { fontSize: 24, fontWeight: '700' },
  item: {
    width: 110,
    padding: 12,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
  },
  itemEmoji: { fontSize: 30 },
});
