import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

const COLORS = {
  bg: "#12121E",
  surface: "#1C1C30",
  cyan: "#4FC3F7",
  orange: "#FF8C42",
  white: "#FFFFFF",
};

export default function ProductListScreen({ navigation }) {
  const products = [
    {
      id: "1",
      name: "Audífonos Bluetooth",
      price: 499,
      image: require("../../assets/audifonos.png"),
      description:
        "Audífonos inalámbricos con tecnología Bluetooth 5.0, hasta 30 horas de batería y cancelación activa de ruido para una experiencia de audio inmersiva.",
    },
    {
      id: "2",
      name: "Teclado Mecánico",
      price: 899,
      image: require("../../assets/teclado.png"),
      description:
        "Teclado mecánico con switches Cherry MX Red, retroiluminación RGB personalizable y construcción en aluminio para máximo rendimiento en gaming y escritura.",
    },
    {
      id: "3",
      name: "Mouse Gamer",
      price: 350,
      image: require("../../assets/mouse.png"),
      description:
        "Mouse gamer con sensor óptico de 16,000 DPI, 7 botones programables, iluminación RGB y diseño ergonómico para largas sesiones de juego.",
    },
    {
      id: "4",
      name: "Smartwatch",
      price: 1200,
      image: require("../../assets/smartwatch.png"),
      description:
        "Smartwatch con monitor de frecuencia cardíaca, GPS integrado, resistencia al agua IP68 y hasta 7 días de autonomía. Compatible con iOS y Android.",
    },
    {
      id: "5",
      name: "Webcam HD",
      price: 650,
      image: require("../../assets/webcam.png"),
      description:
        "Webcam Full HD 1080p a 60fps con micrófono estéreo incorporado, corrección automática de luz y campo de visión de 90° ideal para videoconferencias y streaming.",
    },
    {
      id: "6",
      name: "Monitor Curvo",
      price: 3500,
      image: require("../../assets/monitor.png"),
      description:
        "Monitor curvo 27\" QHD 1440p con panel VA, tasa de refresco de 165Hz, tiempo de respuesta de 1ms y conectividad HDMI/DisplayPort para gaming profesional.",
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
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            onPress={() =>
              navigation.navigate("ProductDetail", {
                name: item.name,
                price: item.price,
                image: item.image,
                description: item.description,
              })
            }
          />
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
