import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLogoBox}>
          <Text style={styles.headerLogoText}>A</Text>
        </View>
        <View>
          <Text style={styles.headerAppName}>AgriXpert</Text>
          <Text style={styles.headerSubtitle}>Smart Agriculture Platform</Text>
        </View>
      </View>

      {/* Scroll Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Logo section */}
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>A</Text>
            </View>
            <Text style={styles.appName}>AgriXpert</Text>
            <Text style={styles.subtitle}>Smart Agriculture Platform</Text>
            <Text style={styles.tagline}>
              Empowering Farmers • Connecting Buyers • Growing Together
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.primaryBtnText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity 
               style={styles.secondaryBtn}
               onPress={() => navigation.navigate("GuestHome")}
            >
              <Text style={styles.secondaryBtnText}>Browse as Guest</Text>
            </TouchableOpacity>
          </View>

          {/* Features */}
          <View style={styles.featuresContainer}>
            <View style={styles.featuresRow}>
              <View style={styles.featureItem}>
                <Image
                  source={require("../assets/rice.png")}
                  style={styles.featureIcon}
                />
                <Text style={styles.featureLabel}>Smart{"\n"}Farming</Text>
              </View>
              <View style={styles.featureItem}>
                <Image
                  source={require("../assets/hand.webp")}
                  style={styles.featureIcon}
                />
                <Text style={styles.featureLabel}>Direct{"\n"}Sales</Text>
              </View>
              <View style={styles.featureItem}>
                <Image
                  source={require("../assets/robot.png")}
                  style={styles.featureIcon}
                />
                <Text style={styles.featureLabel}>AI{"\n"}Assistant</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
    elevation: 4,
  },
  headerLogoBox: {
    backgroundColor: "#28a745",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  headerLogoText: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  headerAppName: { fontSize: 18, fontWeight: "bold", color: "#000" },
  headerSubtitle: { fontSize: 13, color: "#666" },

  scrollView: { flex: 1, backgroundColor: "#fff" },
  contentContainer: { flexGrow: 1 },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: "space-between",
    minHeight: "100%",
  },

  logoContainer: { alignItems: "center", marginBottom: 20 },
  logoBox: {
    backgroundColor: "#28a745",
    width: 100,
    height: 100,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoText: { color: "#fff", fontSize: 42, fontWeight: "bold" },
  appName: { fontSize: 32, fontWeight: "bold", color: "#000", marginBottom: 5 },
  subtitle: { fontSize: 18, color: "#555", marginBottom: 10, fontWeight: "500" },
  tagline: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
  },

  buttonContainer: { alignItems: "center", width: "100%", marginVertical: 25 },
  primaryBtn: {
    backgroundColor: "#28a745",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  primaryBtnText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  secondaryBtn: {
    borderWidth: 2,
    borderColor: "#28a745",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  secondaryBtnText: { color: "#28a745", fontSize: 16, fontWeight: "600" },

  featuresContainer: { width: "100%", marginTop: 25 },
  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  featureItem: { alignItems: "center", flex: 1, paddingHorizontal: 10 },
  featureIcon: { width: 50, height: 50, marginBottom: 10, resizeMode: "contain" },
  featureLabel: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    lineHeight: 18,
  },
});
