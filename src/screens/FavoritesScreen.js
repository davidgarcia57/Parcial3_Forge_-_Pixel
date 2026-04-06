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

export default function FavoritesScreen({ favorites, setFavorites }) {
  const removeFromFavorites = (name) => {
    setFavorites(favorites.filter((item) => item.name !== name));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis favoritos</Text>
      <View style={styles.titleDivider} />

      <FlatList
        data={favorites}
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
            </View>
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => removeFromFavorites(item.name)}
            >
              <Ionicons name="heart-dislike" size={20} color={COLORS.red} />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="heart-outline" size={64} color={COLORS.textMuted} />
            <Text style={styles.emptyText}>No tienes favoritos aún</Text>
            <Text style={styles.emptySubText}>
              Agrega productos desde el detalle del producto
            </Text>
          </View>
        }
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
    backgroundColor: COLORS.red,
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
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 3,
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
    marginTop: 6,
    fontWeight: "700",
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
  emptySubText: {
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
