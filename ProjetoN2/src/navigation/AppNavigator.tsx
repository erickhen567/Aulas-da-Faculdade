import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import CadastroAlunoScreen from '../screens/CadastroAlunoScreen';
import AreaAlunoScreen from '../screens/AreaAlunoScreen';
import UploadDocumentosScreen from '../screens/UploadDocumentosScreen';
import PainelAtendenteScreen from '../screens/PainelAtendenteScreen';
import { AuthUser } from '../types';
export type RootStackParamList = {
  Login: undefined;
  CadastroAluno: undefined;
  AreaAluno: { user: AuthUser; cadastroId?: string };
  UploadDocumentos: { user: AuthUser; cadastroId: string };
  PainelAtendente: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroAluno" component={CadastroAlunoScreen} />
        <Stack.Screen name="AreaAluno" component={AreaAlunoScreen} />
        <Stack.Screen name="UploadDocumentos" component={UploadDocumentosScreen} />
        <Stack.Screen name="PainelAtendente" component={PainelAtendenteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
