import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://10.254.139.245:3000';

export default function App() {
  const [mensaje, setMensaje] = useState('🔴 Estado: sin conectar');

  const cargarMensaje = async () => {
    try {
      const respuesta = await fetch(API_URL + '/mensaje');
      const datos = await respuesta.json();
      setMensaje('🟢 Estado: conectado ✓ (' + datos.texto + ')');
    } catch (error) {
      console.error(error);
      setMensaje('⚠️ Error al conectar');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.subtitle}>C01 · NEST + RN</Text>
        <Text style={styles.title}>📡 Datos recibidos desde NestJS</Text>
        <View style={styles.card}>
          <Text style={styles.status}>{mensaje}</Text>
        </View>
        <Button
          title="ACCIÓN PRINCIPAL"
          onPress={cargarMensaje}
          color="#208AEF"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888888',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f4f6f8',
    padding: 16,
    borderRadius: 10,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  status: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
});
