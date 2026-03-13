import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

const COLORS = {
  bg: "#12121E",
  surface: "#1C1C30",
  cyan: "#4FC3F7",
  orange: "#FF8C42",
  white: "#FFFFFF",
};

export default function ProductListScreen() {
  const products = [
    {
      id: "1",
      name: "Audífonos Bluetooth",
      price: 499,
      image: require("../../assets/audifonos.png"),
    },
    {
      id: "2",
      name: "Teclado Mecánico",
      price: 899,
      image: require("../../assets/teclado.png"),
    },
    {
      id: "3",
      name: "Mouse Gamer",
      price: 350,
      image: require("../../assets/mouse.png"),
    },
    {
      id: "4",
      name: "Smartwatch",
      price: 1200,
      image: require("../../assets/smartwatch.png"),
    },
    {
      id: "5",
      name: "Webcam HD",
      price: 650,
      image: require("../../assets/webcam.png"),
    },
    {
      id: "6",
      name: "Monitor Curvo",
      price: 3500,
      image: require("../../assets/monitor.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Catálogo de productos</Text>
        <View style={styles.titleDivider} />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard name={item.name} price={item.price} image={item.image} />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  titleDivider: {
    width: 40,
    height: 3,
    backgroundColor: COLORS.orange,
    borderRadius: 2,
    marginTop: 6,
  },
  listContainer: {
    paddingBottom: 20,
  },
});
