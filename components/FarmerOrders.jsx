import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";

export default function FarmerOrders({ navigation }) {
  const [activeNav, setActiveNav] = useState("Orders");


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />

      {/* Fixed Header */}
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

      {/* Scrollable Orders Section */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>Order Management</Text>
        <Text style={styles.screenSubtitle}>
          Process and track customer orders
        </Text>

        {/* Order Card 1 */}
        <View style={styles.orderCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.orderId}>Order #1236</Text>
            <Text style={styles.orderFrom}>From: Ahmed Rahman • Oct 6, 2025</Text>
            <View style={styles.orderProductRow}>
              <Image
                source={require("../assets/rice.png")}
                style={styles.orderIcon}
              />
              <View>
                <Text style={styles.orderName}>Premium Basmati Rice - 10kg</Text>
                <Text style={styles.orderDetails}>$850 • Delivery: Dhaka</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.newOrderBadge}>
            <Text style={styles.badgeText}>New Order</Text>
          </TouchableOpacity>
        </View>

        {/* Accept / Decline Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.acceptBtn}>
            <Text style={styles.acceptText}>Accept Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineBtn}>
            <Text style={styles.declineText}>Decline</Text>
          </TouchableOpacity>
        </View>

        {/* Order Card 2 */}
        <View style={styles.orderCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.orderId}>Order #1237</Text>
            <Text style={styles.orderFrom}>From: Fatima Khatun • Oct 5, 2025</Text>
            <View style={styles.orderProductRow}>
              <Image
                source={require("../assets/tomato.png")}
                style={styles.orderIcon}
              />
              <View>
                <Text style={styles.orderName}>Fresh Tomatoes - 5kg</Text>
                <Text style={styles.orderDetails}>$300 • Delivery: Chittagong</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.processingBadge}>
            <Text style={styles.badgeText}>Processing</Text>
          </TouchableOpacity>
        </View>

        {/* Ship Button */}
        <TouchableOpacity style={styles.shipBtn}>
          <Text style={styles.shipText}>Mark as Shipped</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
    <View style={styles.bottomNav}>
  {[
    { name: "Home", image: require("../assets/home-icon.png"), route: "FarmerDashboard" },
    { name: "Products", image: require("../assets/products-icon.png"), route: "FarmerProducts" },
    { name: "Weather", image: require("../assets/weather.png"), route: "FarmerOrders" },
    { name: "Help", image: require("../assets/help.png"), route: "FarmerOrders" },
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
    backgroundColor: "#fff",
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
  appName: { fontSize: 18, fontWeight: "bold", color: "#000" },
  subtitle: { fontSize: 13, color: "#666" },
  notificationIcon: { width: 28, height: 28, resizeMode: "contain" },
  headerNotificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 4,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerNotificationText: { color: "#fff", fontSize: 10, fontWeight: "bold" },

  content: { flex: 1, padding: 20 },

  screenTitle: { fontSize: 20, fontWeight: "bold", color: "#2c3e50" },
  screenSubtitle: { fontSize: 14, color: "#666", marginBottom: 20 },

  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    elevation: 2,
  },
  orderId: { fontSize: 14, fontWeight: "bold", marginBottom: 2 },
  orderFrom: { fontSize: 12, color: "#666", marginBottom: 8 },
  orderProductRow: { flexDirection: "row", alignItems: "center" },
  orderIcon: { width: 36, height: 36, marginRight: 10, resizeMode: "contain" },
  orderName: { fontSize: 14, fontWeight: "bold", color: "#333" },
  orderDetails: { fontSize: 12, color: "#666" },

  newOrderBadge: {
    backgroundColor: "#FFEE93",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  processingBadge: {
    backgroundColor: "#BBDEFB",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: { fontSize: 12, fontWeight: "600", color: "#444" },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  acceptBtn: {
    flex: 1,
    backgroundColor: "#C8E6C9",
    marginRight: 5,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  declineBtn: {
    flex: 1,
    backgroundColor: "#FFCDD2",
    marginLeft: 5,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  acceptText: { color: "#2e7d32", fontWeight: "600" },
  declineText: { color: "#c62828", fontWeight: "600" },

  shipBtn: {
    backgroundColor: "#E1F5FE",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  shipText: { color: "#0277bd", fontWeight: "600" },

  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  activeNavItem: { backgroundColor: "#eaf8ea" },
  navIcon: { width: 24, height: 24, marginBottom: 4, resizeMode: "contain" },
  navText: { fontSize: 12, color: "#666", fontWeight: "500" },
  activeNavText: { color: "#4CAF50", fontWeight: "bold" },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 4,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationText: { color: "#fff", fontSize: 10, fontWeight: "bold" },
});
