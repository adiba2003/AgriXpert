import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

export default function NewProduct({ navigation }) {
  const [activeNav, setActiveNav] = useState("Products");


  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
            <TouchableOpacity
          onPress={() => navigation.navigate("FarmerProducts")}
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
        <View style={{ flex: 1 }}>
          <Text style={styles.appName}>AgriXpert</Text>
          <Text style={styles.subtitle}>Smart Agriculture Platform</Text>
        </View>
        <View style={{ position: "relative", marginLeft: 10 }}>
          <Image
            source={require("../assets/notification.png")}
            style={styles.notificationIcon}
          />
          <View style={styles.headerNotificationBadge}>
            <Text style={styles.headerNotificationText}>15</Text>
          </View>
        </View>
      </View>

      {/* Scrollable Form */}
      <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.sectionTitle}>Add New Product</Text>
        <Text style={styles.sectionSubtitle}>List your farm products for sale</Text>

        {/* Product Name */}
        <Text style={styles.label}>Product Name</Text>
        <TextInput style={styles.input} placeholder="e.g., Premium Basmati Rice" />

        {/* Category + Price */}
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>Category</Text>
            <TextInput style={styles.input} placeholder="Select Category" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Price per kg ($)</Text>
            <TextInput style={styles.input} placeholder="85" keyboardType="numeric" />
          </View>
        </View>

        {/* Quantity + Location */}
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>Available Quantity (kg)</Text>
            <TextInput style={styles.input} placeholder="500" keyboardType="numeric" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Location</Text>
            <TextInput style={styles.input} placeholder="Select Location" />
          </View>
        </View>

        {/* Description */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, { height: 80, textAlignVertical: "top" }]}
          placeholder="Describe your product quality, farming methods, etc."
          multiline
        />

        {/* Product Image Upload */}
        <Text style={styles.label}>Product Image</Text>
        <TouchableOpacity style={styles.imageUpload}>
          <Image
            source={require("../assets/camera.jpeg")}
            style={{ width: 30, height: 30, marginBottom: 5 }}
          />
          <Text style={{ color: "#666", fontSize: 12 }}>Click to upload product image</Text>
          <Text style={{ color: "#aaa", fontSize: 11 }}>JPG, PNG up to 5MB</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>List Product</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
     <View style={styles.bottomNav}>
  {[
    { name: "Home", img: require("../assets/home-icon.png"), route: "FarmerDashboard" },
    { name: "Products", img: require("../assets/products-icon.png"), route: "FarmerProducts" },
    { name: "Weather", img: require("../assets/weather.png"), route: "NewProduct" },
    { name: "Help", image: require("../assets/help.png") ,route: "NewProduct"},
    { name: "Orders", image: require("../assets/orders.png"), notification: 15 ,route: "FarmerOrders"},
  ].map((item, index) => {
    const isActive = item.name === activeNav;
    return (
      <TouchableOpacity
        key={index}
        style={[styles.navItem, isActive && styles.activeNavItem]}
        onPress={() => {
          setActiveNav(item.name);
          navigation.navigate(item.route); // ✅ navigate to corresponding screen
        }}
      >
        <Image source={item.img} style={styles.navIcon} />
        <Text
          style={[styles.navText, isActive && styles.activeNavText]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  })}
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },

  // Header
  header: {
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logoBox: {
    backgroundColor: "#28a745",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  backButton: { marginRight: 10 },
  backIcon: { width: 24, height: 24, resizeMode: "contain" },
  logoText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  appName: { fontSize: 16, fontWeight: "bold", color: "#000" },
  subtitle: { fontSize: 12, color: "#666" },
  notificationIcon: { width: 28, height: 28, resizeMode: "contain" },
  headerNotificationBadge: {
    position: "absolute",
    right: -2,
    top: -4,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  headerNotificationText: { color: "#fff", fontSize: 10, fontWeight: "bold" },

  scrollArea: { flex: 1, padding: 15 },

  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#000", marginBottom: 2 },
  sectionSubtitle: { fontSize: 13, color: "#666", marginBottom: 15 },

  label: { fontSize: 14, fontWeight: "600", marginBottom: 5, color: "#333" },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 13,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },

  imageUpload: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderRadius: 8,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
  },

  submitButton: {
    backgroundColor: "#28a745",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  submitButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  // Bottom navigation
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    marginHorizontal: 3,
    borderRadius: 10,
    position: "relative",
  },
  activeNavItem: { backgroundColor: "#eaf8ea" },
  navIcon: { width: 24, height: 24, marginBottom: 3, resizeMode: "contain" },
  navText: { fontSize: 12, color: "#666", fontWeight: "500" },
  activeNavText: { color: "#4CAF50", fontWeight: "bold" },
  navBadge: {
    position: "absolute",
    top: 2,
    right: 18,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 4,
  },
  badgeText: { color: "#fff", fontSize: 10, fontWeight: "bold" },
});
