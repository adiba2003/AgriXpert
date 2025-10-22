import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("signin");
  const [role, setRole] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("../assets/back-arrow.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <View style={styles.logoBox}>
          <Text style={styles.logoText}>A</Text>
        </View>
        <View>
          <Text style={styles.appName}>AgriXpert</Text>
          <Text style={styles.subtitle}>Smart Agriculture Platform</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.subtext}>
          Sign in to your account or create a new one
        </Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "signin" && styles.activeTab]}
            onPress={() => setActiveTab("signin")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "signin" && styles.activeTabText,
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "register" && styles.activeTab]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "register" && styles.activeTabText,
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>

        {/* Email & Password */}
        <Text style={styles.label}>Email or Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email or phone number"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        {/* Roles */}
        <Text style={styles.label}>Sign in as:</Text>
        <View style={styles.roleRow}>
       <TouchableOpacity
  style={[styles.roleBox, role === "buyer" && styles.activeRole]}
  onPress={() => {
    setRole("buyer");
    navigation.navigate("BuyerDashboard");
  }}
>
  <Image
    source={require("../assets/cart.png")}
    style={styles.roleImage}
  />
  <Text
    style={[styles.roleText, role === "buyer" && styles.activeRoleText]}
  >
    Buyer
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={[styles.roleBox, role === "farmer" && styles.activeRole]}
  onPress={() => {
    setRole("farmer");
    navigation.navigate("FarmerDashboard");
  }}
>
  <Image
    source={require("../assets/rice.png")}
    style={styles.roleImage}
  />
  <Text
    style={[
      styles.roleText,
      role === "farmer" && styles.activeRoleText,
    ]}
  >
    Farmer
  </Text>
</TouchableOpacity>

        </View>

       <TouchableOpacity
  style={styles.guestButton}
  onPress={() => navigation.navigate("GuestHome")}
>
  <Text style={styles.guestText}>Continue as Guest</Text>
</TouchableOpacity>


        <View style={styles.extraSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: { marginRight: 10 },
  backIcon: { width: 24, height: 24, resizeMode: "contain" },
  logoBox: {
    backgroundColor: "#28a745",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  logoText: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  appName: { fontSize: 20, fontWeight: "bold", color: "#000" },
  subtitle: { fontSize: 14, color: "#555" },
  scrollContent: { padding: 20 },
  welcome: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 10 },
  subtext: { fontSize: 14, color: "#666", marginBottom: 20 },
  tabContainer: { flexDirection: "row", marginBottom: 25 },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeTab: { backgroundColor: "#eaf8ef", borderColor: "#28a745" },
  tabText: { fontSize: 16, color: "#666" },
  activeTabText: { color: "#28a745", fontWeight: "bold" },
  label: { fontSize: 14, color: "#333", marginBottom: 5, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  roleBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    alignItems: "center",
    padding: 15,
    marginHorizontal: 5,
  },
  activeRole: { borderColor: "#28a745", backgroundColor: "#eaf8ef" },
  roleImage: { width: 40, height: 40, marginBottom: 5, resizeMode: "contain" },
  roleText: { fontSize: 16, color: "#333" },
  activeRoleText: { color: "#28a745", fontWeight: "bold" },
  guestButton: { marginTop: 20 },
  guestText: {
    color: "#28a745",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  extraSpace: { height: 50 },
});
