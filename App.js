import { Provider } from 'react-redux';
import store from './store/index';
import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import AppTab from './navigators/AppTab';

export default function App() {
  const config = {
    useSystemColorMode: false,
    initialColorMode: 'light'
  };
  const customTheme = extendTheme({ config });

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer>
          <AppTab />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
