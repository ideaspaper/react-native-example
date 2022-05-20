import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../screens/PostsScreen';
import UsersScreen from '../screens/UsersScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Users':
                iconName = focused ? 'people' : 'people-outline';
                break;
              case 'Posts':
                iconName = focused ? 'document' : 'document-outline';
                break;
              default:
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        };
      }}
    >
      <Tab.Screen name="Users" component={UsersScreen} />
      <Tab.Screen name="Posts" component={PostsScreen} />
    </Tab.Navigator>
  );
};

export default AppTab;
