import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function FarmerProducts({ navigation }) {
  const [activeNav, setActiveNav] = useState("Products");

  // Dummy products data
  const products = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      price: "$85/kg",
      stock: "500kg available",
      orders: "25 orders",
      rating: "4.8 rating",
      status: "Active",
      icon: require("../assets/rice.png"),
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      price: "$60/kg",
      stock: "200kg available",
      orders: "18 orders",
      rating: "4.7 rating",
      status: "Active",
      icon: require("../assets/tomato.png"),
    },
    {
      id: 3,
      name: "Organic Potatoes",
      price: "$85/kg",
      stock: "300kg available",
      orders: "12 orders",
      rating: "4.6 rating",
      status: "Active",
      icon: require("../assets/potato.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Fixed Top Header */}
      <View style={styles.header}>
         <TouchableOpacity
          onPress={() => navigation.navigate("FarmerDashboard")}
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

      {/* Scrollable Product List */}
      <ScrollView style={styles.scrollArea}>
        {/* Section Title with Add Button */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>My Products</Text>
            <Text style={styles.sectionSubtitle}>
              Manage your product listings
            </Text>
          </View>
      <TouchableOpacity
  style={styles.addButton}
  onPress={() => navigation.navigate("NewProduct")}
>
  <Text style={styles.addButtonText}>+ Add Product</Text>
</TouchableOpacity>

        </View>

        {/* Products */}
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            {/* Left Side Product Info */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={product.icon} style={styles.productImage} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDetails}>
                  {product.price} • {product.stock}
                </Text>
                <View style={styles.productStats}>
                  <View style={styles.statRow}>
                    <Image
                      source={require("../assets/order.png")}
                      style={styles.statIcon}
                    />
                    <Text style={styles.statText}>{product.orders}</Text>
                  </View>
                  <View style={styles.statRow}>
                    <Image
                      source={require("../assets/star-icon.webp")}
                      style={styles.statIcon}
                    />
                    <Text style={styles.statText}>{product.rating}</Text>
                  </View>
                  <Text style={styles.activeStatus}>● {product.status}</Text>
                </View>
              </View>
            </View>

            {/* Right Side Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pauseBtn}>
                <Text style={styles.pauseText}>Pause</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Fixed Bottom Navigation */}
<View style={styles.bottomNav}>
  {[
    { name: "Home", image: require("../assets/home-icon.png"), route: "FarmerDashboard" },
    { name: "Products", image: require("../assets/products-icon.png"), route: "FarmerProducts" },
    { name: "Weather", image: require("../assets/weather.png"), route: "Calendar" },
    { name: "Help", image: require("../assets/help.png"), route: "Calendar" },
    { name: "Orders", image: require("../assets/orders.png"), notification: 15, route: "FarmerOrders" },
  ].map((item, index) => {
    const isActive = activeNav === item.name;
    return (
      <TouchableOpacity
        key={index}
        style={[styles.navItem, isActive && styles.activeNavItem]}
        onPress={() => {
          setActiveNav(item.name);
          navigation.navigate(item.route); // ✅ স্ক্রিনে যাওয়ার জন্য
        }}
      >
        <View style={{ position: "relative" }}>
          <Image source={item.image} style={styles.navIcon} />
          {item.notification && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>
                {item.notification}
              </Text>
            </View>
          )}
        </View>
        <Text style={[styles.navText, isActive && styles.activeNavText]}>
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

  // Header fixed
  header: {
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: { marginRight: 10 },
  backIcon: { width: 24, height: 24, resizeMode: "contain" },
  logoBox: {
    backgroundColor: "#28a745",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
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

  // Section Header
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#000" },
  sectionSubtitle: { fontSize: 13, color: "#666" },
  addButton: {
    backgroundColor: "#28a745",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: { color: "#fff", fontWeight: "bold", fontSize: 13 },

  // Scrollable area
  scrollArea: { flex: 1, padding: 15, marginBottom: 70 },

  productCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  productImage: { width: 40, height: 40, resizeMode: "contain" },
  productName: { fontSize: 15, fontWeight: "bold", color: "#000" },
  productDetails: { fontSize: 13, color: "#666" },
  productStats: { flexDirection: "row", marginTop: 5, alignItems: "center" },
  statRow: { flexDirection: "row", alignItems: "center", marginRight: 12 },
  statIcon: { width: 14, height: 14, resizeMode: "contain", marginRight: 4 },
  statText: { fontSize: 12, color: "#666" },
  activeStatus: { fontSize: 12, color: "green", fontWeight: "600" },

  actionButtons: { flexDirection: "row" },
  editBtn: {
    backgroundColor: "#e6f0ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  editText: { color: "#007bff", fontWeight: "bold" },
  pauseBtn: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  pauseText: { color: "#555", fontWeight: "bold" },

  // Bottom navigation fixed
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
