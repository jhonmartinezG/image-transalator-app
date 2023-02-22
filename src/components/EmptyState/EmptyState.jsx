import { View, Text, Image, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.image}
        source={require("../../assets/images/lottie-empty.json")}
        autoPlay
        loop
      />
      <Text style={styles.title}>There is nothing to show</Text>
      <Text style={styles.subtitle}>Ups it seems you have no images yet</Text>
      <Image
        style={styles.arrowImage}
        source={require("../../assets/images/arrow.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "90%",
    justifyContent: "center",
    marginTop: "10%",
  },
  image: {
    width: 350,
    height: 350,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#989898",
    width: "50%",
    textAlign: "center",
  },
  arrowImage: {
    width: 80,
    height: 70,
    marginTop: 10,
    marginLeft: 50,
  },
});
