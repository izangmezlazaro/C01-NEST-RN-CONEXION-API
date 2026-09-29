import { Button, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://10.254.139.245:3000';

export default function App() {
  const cargarMensaje = async () => {
    const respuesta = await fetch(API_URL + '/mensaje');
    const datos = await respuesta.json();
    console.log(datos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Mi primera conexión</Text>

        <Button
          title="Conectar con Nest"
          onPress={cargarMensaje}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
