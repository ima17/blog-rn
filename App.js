import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as BlogProvider } from "./src/contexts/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";

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
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{ title: "Blogs" }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "Blogs" }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
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
