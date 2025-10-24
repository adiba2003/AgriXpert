import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("register");
  const [role, setRole] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Welcome */}
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.subtext}>
          Sign in to your account or create a new one
        </Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "signin" && styles.activeTab]}
            onPress={() => {
              setActiveTab("signin");
              navigation.navigate("Login");
            }}
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
            onPress={() => setActiveTab("register")}
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

        {/* Role Selection */}
        <Text style={styles.roleLabel}>I am registering as:</Text>

        <TouchableOpacity
          style={[styles.roleCard, role === "buyer" && styles.activeRoleCard]}
          onPress={() => setRole("buyer")}
        >
          <View style={styles.roleIconBox}>
            <Image
              source={require("../assets/cart.png")}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.roleTitle}>I am a Buyer</Text>
            <Text style={styles.roleDesc}>
              I want to purchase fresh farm products
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleCard, role === "farmer" && styles.activeRoleCard]}
          onPress={() => setRole("farmer")}
        >
          <View style={[styles.roleIconBox, { backgroundColor: "#eafce9" }]}>
            <Image
              source={require("../assets/rice.png")}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.roleTitle}>I am a Farmer</Text>
            <Text style={styles.roleDesc}>I want to sell my farm products</Text>
          </View>
        </TouchableOpacity>

        {/* Registration Form (show only if role selected) */}
        {role && (
          <View style={styles.formBox}>
            <TextInput placeholder="Full Name" style={styles.input} />
            <TextInput
              placeholder="Email Address"
              style={styles.input}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Create Password"
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              secureTextEntry
            />

            <View style={styles.orRow}>
              <View style={styles.line} />
              <Text style={{ color: "#666", marginHorizontal: 8 }}>or</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleBtn}>
              <Image
                source={require("../assets/google.png")}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <Text style={{ fontWeight: "600", color: "#444" }}>
                Continue with Google
              </Text>
            </TouchableOpacity>

            {/* ✅ Create Account button with role-based navigation */}
            <TouchableOpacity
              style={styles.createBtn}
              onPress={() => {
                if (role === "buyer") {
                  navigation.navigate("BuyerDashboard");
                } else if (role === "farmer") {
                  navigation.navigate("FarmerDashboard");
                } else {
                  alert("Please select your role first!");
                }
              }}
            >
              <Text style={styles.createBtnText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Guest Option */}
        <TouchableOpacity
          style={styles.guestButton}
          onPress={() => navigation.navigate("GuestHome")}
        >
          <Text style={styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
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
  appName: { fontSize: 18, fontWeight: "bold", color: "#000" },
  subtitle: { fontSize: 13, color: "#666" },
  welcome: { fontSize: 24, fontWeight: "bold", color: "#000", marginLeft: 20 },
  subtext: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    marginLeft: 20,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 3,
    marginHorizontal: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
  },
  activeTab: { backgroundColor: "#fff", elevation: 2 },
  tabText: { fontSize: 16, color: "#666" },
  activeTabText: { color: "#28a745", fontWeight: "bold" },
  roleLabel: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 12,
    marginLeft: 20,
  },
  roleCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  activeRoleCard: {
    borderColor: "#28a745",
    backgroundColor: "#f6fef7",
  },
  roleIconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#f0f4ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  roleTitle: { fontSize: 16, fontWeight: "600", color: "#000" },
  roleDesc: { fontSize: 13, color: "#666", marginTop: 3 },
  formBox: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ddd" },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  createBtn: {
    backgroundColor: "#28a745",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
  },
  createBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  guestButton: { marginTop: 20 },
  guestText: {
    color: "#28a745",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
