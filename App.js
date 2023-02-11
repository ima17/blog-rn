import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as BlogProvider } from "./src/contexts/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: "Blogs" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
