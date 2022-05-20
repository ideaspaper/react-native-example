import { Provider } from 'react-redux';
import store from './store/index';
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './navigators/AppTab';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppTab />
      </NavigationContainer>
    </Provider>
  );
}
