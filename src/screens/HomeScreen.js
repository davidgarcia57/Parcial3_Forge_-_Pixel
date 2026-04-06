import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header: Logo + Nombre */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.brandName}>Forge & Pixel</Text>
        <Text style={styles.brandTagline}>Arte digital & Diseño de personajes</Text>
      </View>

      {/* Banner principal */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
          }}
          style={styles.banner}
          resizeMode="cover"
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>Diseños únicos</Text>
          <Text style={styles.bannerSubtitle}>Pixel art hecho a medida para ti</Text>
        </View>
      </View>

      {/* Sección productos destacados */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Productos destacados</Text>
        <View style={styles.sectionDivider} />
      </View>

      <View style={styles.productsGrid}>
        <View style={styles.productCard}>
          <View style={styles.productImagePlaceholder}>
            <Text style={styles.productEmoji}>🎮</Text>
          </View>
          <Text style={styles.productName}>Sprite Pack</Text>
          <Text style={styles.productPrice}>$12.99</Text>
        </View>

        <View style={styles.productCard}>
          <View style={styles.productImagePlaceholder}>
            <Text style={styles.productEmoji}>⚔️</Text>
          </View>
          <Text style={styles.productName}>Hero Design</Text>
          <Text style={styles.productPrice}>$24.99</Text>
        </View>

        <View style={styles.productCard}>
          <View style={styles.productImagePlaceholder}>
            <Text style={styles.productEmoji}>🐉</Text>
          </View>
          <Text style={styles.productName}>Monster Pack</Text>
          <Text style={styles.productPrice}>$18.99</Text>
        </View>
      </View>

      {/* Banner secundario */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80",
          }}
          style={styles.bannerSecondary}
          resizeMode="cover"
        />
        <View style={styles.bannerOverlaySecondary}>
          <Text style={styles.bannerTitleSecondary}>Crea tu personaje</Text>
          <Text style={styles.bannerSubtitleSecondary}>Comisiones personalizadas</Text>
        </View>
      </View>

      {/* Botón ver catálogo */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ProductList")}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>Ver catálogo completo</Text>
        <Text style={styles.buttonArrow}>→</Text>
      </TouchableOpacity>

      {/* Botón ir al carrito (reto clase 5) */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>Ver carrito 🛒</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const COLORS = {
  bg: "#12121E",
  surface: "#1C1C30",
  card: "#22223A",
  cyan: "#4FC3F7",
  orange: "#FF8C42",
  white: "#FFFFFF",
  textMuted: "#A0A0C0",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  /* Header */
  header: {
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 20,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.cyan,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  brandName: {
    fontSize: 28,
    fontWeight: "900",
    color: COLORS.white,
    letterSpacing: 1.5,
    marginTop: 4,
  },
  brandTagline: {
    fontSize: 12,
    color: COLORS.cyan,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginTop: 4,
  },

  /* Banners */
  bannerContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 14,
    overflow: "hidden",
    elevation: 6,
    shadowColor: COLORS.cyan,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  banner: {
    width: "100%",
    height: 190,
  },
  bannerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.55)",
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.white,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: COLORS.cyan,
    marginTop: 2,
  },
  bannerSecondary: {
    width: "100%",
    height: 160,
  },
  bannerOverlaySecondary: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  bannerTitleSecondary: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.orange,
  },
  bannerSubtitleSecondary: {
    fontSize: 12,
    color: COLORS.white,
    marginTop: 2,
  },

  /* Sección */
  sectionHeader: {
    marginTop: 28,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  sectionDivider: {
    width: 40,
    height: 3,
    backgroundColor: COLORS.orange,
    borderRadius: 2,
    marginTop: 6,
  },

  /* Productos */
  productsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 16,
    gap: 10,
  },
  productCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2E2E4A",
    elevation: 4,
  },
  productImagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.cyan + "44",
  },
  productEmoji: {
    fontSize: 30,
  },
  productName: {
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.white,
    marginTop: 8,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 12,
    color: COLORS.cyan,
    fontWeight: "600",
    marginTop: 3,
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

  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surface,
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.cyan,
    elevation: 3,
  },

  bottomSpacing: {
    height: 30,
  },
});
