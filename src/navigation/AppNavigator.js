import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const darkHeader = {
  headerStyle: { backgroundColor: "#1C1C30" },
  headerTintColor: "#FFFFFF",
  headerTitleStyle: { fontWeight: "800" },
  contentStyle: { backgroundColor: "#12121E" },
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={darkHeader}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Productos" }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailScreen} options={{ title: "Detalles del Producto" }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Carrito" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}