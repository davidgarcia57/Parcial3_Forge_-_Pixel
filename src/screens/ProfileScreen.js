import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.image}
      />
      <Text style={styles.name}>Usuario Demo</Text>
      <Text style={styles.email}>usuario@correo.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12121E",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  email: {
    fontSize: 16,
    color: "#999",
    marginTop: 8,
  },
});
