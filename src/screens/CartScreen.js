import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const COLORS = {
  bg: "#12121E",
  surface: "#1C1C30",
  card: "#22223A",
  cyan: "#4FC3F7",
  orange: "#FF8C42",
  white: "#FFFFFF",
  textMuted: "#A0A0C0",
  border: "#2E2E4A",
  red: "#FF4D6D",
};

export default function CartScreen({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi carrito</Text>
      <View style={styles.titleDivider} />

      <FlatList
        data={cart}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={typeof item.image === "string" ? { uri: item.image } : item.image}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <View style={styles.qtyBadge}>
                <Text style={styles.qtyText}>Cant: {item.quantity}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.deleteBtn} onPress={() => removeItem(item.name)}>
              <Ionicons name="trash-outline" size={22} color={COLORS.red} />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="cart-outline" size={64} color={COLORS.textMuted} />
            <Text style={styles.emptyText}>Tu carrito está vacío</Text>
          </View>
        }
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {cart.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.total}>${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => setCart([])}>
            <Ionicons name="trash" size={18} color={COLORS.white} />
            <Text style={styles.buttonText}>Vaciar carrito</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 16,
    paddingTop: 24,
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
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  image: {
    width: 90,
    height: 90,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.white,
  },
  price: {
    fontSize: 15,
    color: COLORS.cyan,
    marginTop: 4,
    fontWeight: "700",
  },
  qtyBadge: {
    marginTop: 6,
    backgroundColor: COLORS.card,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  qtyText: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
  deleteBtn: {
    padding: 16,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 80,
    gap: 12,
  },
  emptyText: {
    fontSize: 18,
    color: COLORS.textMuted,
    fontWeight: "600",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 16,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  totalLabel: {
    fontSize: 16,
    color: COLORS.textMuted,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  total: {
    fontSize: 24,
    fontWeight: "900",
    color: COLORS.white,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: COLORS.red,
    padding: 15,
    borderRadius: 12,
    elevation: 4,
    shadowColor: COLORS.red,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
