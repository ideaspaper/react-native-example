import { Provider } from 'react-redux';
import store from './store/index';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import AppTab from './navigators/AppTab';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <AppTab />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
