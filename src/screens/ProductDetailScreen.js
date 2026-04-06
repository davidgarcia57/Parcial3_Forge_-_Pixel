import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
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

export default function ProductDetailScreen({ route, cart, setCart, favorites, setFavorites }) {
  const { name, price, image, description } = route.params;

  const isFavorite = favorites.some((item) => item.name === name);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((item) => item.name !== name));
    } else {
      setFavorites([...favorites, { name, price, image }]);
    }
  };

  const addToCart = () => {
    const exists = cart.find((item) => item.name === name);
    if (exists) {
      setCart(cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      ));
      alert(`Se agregó otra unidad de "${name}" al carrito`);
    } else {
      setCart([...cart, { name, price, image, quantity: 1 }]);
      alert("Producto agregado al carrito");
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Imagen del producto */}
      <View style={styles.imageContainer}>
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Botón favorito sobre la imagen */}
        <TouchableOpacity style={styles.favoriteBtn} onPress={toggleFavorite} activeOpacity={0.8}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={26}
            color={isFavorite ? COLORS.red : COLORS.white}
          />
        </TouchableOpacity>
      </View>

      {/* Bloque principal de info */}
      <View style={styles.infoCard}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.divider} />

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Precio</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>

      {/* Descripción */}
      <View style={styles.descriptionCard}>
        <Text style={styles.descriptionTitle}>Descripción</Text>
        <View style={styles.descriptionDivider} />
        <Text style={styles.descriptionText}>{description}</Text>
      </View>

      {/* Botón agregar al carrito */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={addToCart}
      >
        <Ionicons name="cart" size={20} color={COLORS.white} />
        <Text style={styles.buttonText}>Agregar al carrito</Text>
        <Text style={styles.buttonArrow}>→</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  /* Imagen */
  imageContainer: {
    width: "100%",
    elevation: 8,
    shadowColor: COLORS.cyan,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 280,
  },
  favoriteBtn: {
    position: "absolute",
    top: 14,
    right: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },

  /* Tarjeta de info */
  infoCard: {
    backgroundColor: COLORS.surface,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 5,
    shadowColor: COLORS.cyan,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: "900",
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  divider: {
    width: 40,
    height: 3,
    backgroundColor: COLORS.orange,
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceLabel: {
    fontSize: 14,
    color: COLORS.textMuted,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  price: {
    fontSize: 28,
    color: COLORS.cyan,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  /* Tarjeta de descripción */
  descriptionCard: {
    backgroundColor: COLORS.card,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  descriptionDivider: {
    width: 30,
    height: 2,
    backgroundColor: COLORS.cyan,
    borderRadius: 2,
    marginTop: 6,
    marginBottom: 14,
  },
  descriptionText: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 22,
  },

  /* Botón */
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.orange,
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 5,
    shadowColor: COLORS.orange,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    gap: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  buttonArrow: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "800",
  },

  bottomSpacing: {
    height: 30,
  },
});
