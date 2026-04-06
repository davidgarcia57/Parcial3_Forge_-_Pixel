import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const darkHeader = {
  headerStyle: { backgroundColor: "#1C1C30" },
  headerTintColor: "#FFFFFF",
  headerTitleStyle: { fontWeight: "800" },
  contentStyle: { backgroundColor: "#12121E" },
};

function CartBadge({ count }) {
  if (count === 0) return null;
  return (
    <View style={badgeStyles.badge}>
      <Text style={badgeStyles.text}>{count > 9 ? "9+" : count}</Text>
    </View>
  );
}

const badgeStyles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -4,
    right: -8,
    backgroundColor: "#FF4D6D",
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  text: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
  },
});

function HomeStack({ cart, setCart, favorites, setFavorites }) {
  return (
    <Stack.Navigator screenOptions={darkHeader}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Productos" }}
      />
      <Stack.Screen
        name="ProductDetail"
        options={{ title: "Detalle del producto" }}
      >
        {(props) => (
          <ProductDetailScreen
            {...props}
            cart={cart}
            setCart={setCart}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "#1C1C30", borderTopColor: "#2a2a40" },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            if (route.name === "Inicio") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Carrito") {
              return (
                <View>
                  <Ionicons
                    name={focused ? "cart" : "cart-outline"}
                    size={size}
                    color={color}
                  />
                  <CartBadge count={cartItemCount} />
                </View>
              );
            } else if (route.name === "Favoritos") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#A78BFA",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 12 },
        })}
      >
        <Tab.Screen name="Inicio">
          {() => (
            <HomeStack
              cart={cart}
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Carrito">
          {(props) => (
            <CartScreen {...props} cart={cart} setCart={setCart} />
          )}
        </Tab.Screen>

        <Tab.Screen name="Favoritos">
          {(props) => (
            <FavoritesScreen {...props} favorites={favorites} setFavorites={setFavorites} />
          )}
        </Tab.Screen>

        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
