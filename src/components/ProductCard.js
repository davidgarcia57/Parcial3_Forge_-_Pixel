import { View, Text, Image, StyleSheet } from "react-native";

const COLORS = {
  card: "#22223A",
  cyan: "#4FC3F7",
  white: "#FFFFFF",
  border: "#2E2E4A",
};

export default function ProductCard({ name, price, image }) {
  return (
    <View style={styles.card}>
      <Image
        source={typeof image === "string" ? { uri: image } : image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 6,
    shadowColor: "#4FC3F7",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: "100%",
    height: 180,
  },
  infoContainer: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
    flex: 1,
  },
  productPrice: {
    fontSize: 16,
    color: COLORS.cyan,
    fontWeight: "800",
    marginLeft: 8,
  },
});
