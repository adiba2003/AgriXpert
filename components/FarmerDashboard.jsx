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

export default function FarmerDashboard({ navigation }) {
  const [activeNav, setActiveNav] = useState("Home");


 

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />

      {/* Header */}
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

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Screen Title */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.screenTitle}>Farmer Dashboard</Text>
          <Text style={styles.screenSubtitle}>
            Manage your products and orders
          </Text>
        </View>

        {/* Dashboard Top Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Image
              source={require("../assets/order.png")}
              style={styles.statIcon}
            />
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Products</Text>
          </View>
          <View style={styles.statCard}>
            <Image
              source={require("../assets/cart.png")}
              style={styles.statIcon}
            />
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>New Orders</Text>
          </View>
          <View style={styles.statCard}>
            <Image
              source={require("../assets/money.jpeg")}
              style={styles.statIcon}
            />
            <Text style={styles.statNumber}>$2.5k</Text>
            <Text style={styles.statLabel}>This Month</Text>
          </View>
        </View>

        {/* Today’s Farm Task */}
        <View style={styles.taskCard}>
          <Image
            source={require("../assets/calendar-icon.png")}
            style={styles.taskIcon}
          />
          <View style={styles.taskTextBox}>
            <Text style={styles.taskTitle}>Today's Farming Tasks</Text>
            <Text style={styles.taskDetail}>• Harvest paddy (6AM - 8AM)</Text>
            <Text style={styles.taskDetail}>
              • Apply fertilizer to tomato plants
            </Text>
            <Text style={styles.taskDetail}>• Check weather forecast</Text>
            <TouchableOpacity  onPress={() => navigation.navigate("Calendar")}>
              <Text style={styles.viewFullCalendar}>View Full Calendar →</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Action Cards */}
        <View style={styles.quickActionsGrid}>
    <TouchableOpacity
  style={styles.actionCard}
  onPress={() => navigation.navigate("FarmerProducts")}
>
  <Image
    source={require("../assets/order.png")}
    style={styles.actionImage}
  />
  <View style={styles.actionTextBox}>
    <Text style={styles.actionTitle}>My Products</Text>
    <Text style={styles.actionSubtitle}>Manage listings</Text>
  </View>
</TouchableOpacity>


          <TouchableOpacity style={styles.actionCard}  onPress={() => navigation.navigate("FarmerOrders")}>
            <Image
              source={require("../assets/cart.png")}
              style={styles.actionImage}
            />
            <View style={styles.actionTextBox}>
              <Text style={styles.actionTitle}>Orders</Text>
              <Text style={styles.actionSubtitle}>15 pending</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => navigation.navigate("Calendar")}>
            <Image
              source={require("../assets/calendar-icon.png")}
              style={styles.actionImage}
            />
            <View style={styles.actionTextBox}>
              <Text style={styles.actionTitle}>Farm Calendar</Text>
              <Text style={styles.actionSubtitle}>Plan your crops</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => navigation.navigate("FAi")}>
            <Image
              source={require("../assets/robot.png")}
              style={styles.actionImage}
            />
            <View style={styles.actionTextBox}>
              <Text style={styles.actionTitle}>AI Assistant</Text>
              <Text style={styles.actionSubtitle}>
                Ask farming questions
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => navigation.navigate("NewProduct")}>
            <Image
              source={require("../assets/plus.png")}
              style={styles.actionImage}
            />
            <View style={styles.actionTextBox}>
              <Text style={styles.actionTitle}>Add Product</Text>
              <Text style={styles.actionSubtitle}>List new items</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}  onPress={() => navigation.navigate("FLearn")}>
            <Image
              source={require("../assets/books.png")}
              style={styles.actionImage}
            />
            <View style={styles.actionTextBox}>
              <Text style={styles.actionTitle}>Learn</Text>
              <Text style={styles.actionSubtitle}>Farming guides</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Orders Section */}
        <View style={styles.recentOrders}>
          <View style={styles.recentHeader}>
            <Text style={styles.recentTitle}>Recent Orders</Text>
            <TouchableOpacity onPress={() => navigation.navigate("FarmerOrders")}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* Order 1 */}
          <View style={styles.orderCard}>
            <Image
              source={require("../assets/rice.png")}
              style={styles.orderIcon}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.orderName}>Premium Basmati Rice - 10kg</Text>
              <Text style={styles.orderDetails}>Order #1236 • $850</Text>
            </View>
            <TouchableOpacity style={styles.processBtn}>
              <Text style={styles.processText}>Process</Text>
            </TouchableOpacity>
          </View>

          {/* Order 2 */}
          <View style={styles.orderCard}>
            <Image
              source={require("../assets/tomato.png")}
              style={styles.orderIcon}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.orderName}>Fresh Tomatoes - 5kg</Text>
              <Text style={styles.orderDetails}>Order #1237 • $300</Text>
            </View>
            <TouchableOpacity style={styles.shipBtn}>
              <Text style={styles.shipText}>Ship</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
<View style={styles.bottomNav}>
  {[
    { name: "Home", image: require("../assets/home-icon.png"), route: "FarmerDashboard" },
    { name: "Products", image: require("../assets/products-icon.png"), route: "FarmerProducts" },
    { name: "Weather", image: require("../assets/weather.png"), route: "FarmerDashboard" },
    { name: "Help", image: require("../assets/help.png"), route: "FarmerDashboard" },
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
  logoBox: {
    backgroundColor: "#28a745",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
      backButton: { marginRight: 10 },
  backIcon: { width: 24, height: 24, resizeMode: "contain" },
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

  screenTitle: { fontSize: 22, fontWeight: "bold", color: "#2c3e50" },
  screenSubtitle: { fontSize: 14, color: "#666", marginTop: 4 },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
    elevation: 3,
  },
  statIcon: { width: 24, height: 24, marginBottom: 8, resizeMode: "contain" },
  statNumber: { fontSize: 20, fontWeight: "bold", color: "#2c3e50" },
  statLabel: { fontSize: 12, color: "#666", fontWeight: "500" },

  taskCard: {
    flexDirection: "row",
    backgroundColor: "#eaf8ea",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  taskIcon: { width: 40, height: 40, marginRight: 12, resizeMode: "contain" },
  taskTextBox: { flex: 1 },
  taskTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  taskDetail: { fontSize: 13, color: "#333", marginBottom: 2 },
  viewFullCalendar: {
    marginTop: 6,
    fontSize: 13,
    color: "#4CAF50",
    fontWeight: "600",
  },

  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  actionCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
  actionImage: {
    width: 40,
    height: 40,
    marginRight: 12,
    resizeMode: "contain",
  },
  actionTextBox: {
    flex: 1,
    flexShrink: 1,
  },
  actionTitle: { fontSize: 14, fontWeight: "bold", color: "#2c3e50" },
  actionSubtitle: { fontSize: 12, color: "#666", flexWrap: "wrap" },

  recentOrders: { backgroundColor: "#fff", borderRadius: 12, padding: 15 },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  recentTitle: { fontSize: 16, fontWeight: "bold", color: "#2c3e50" },
  viewAll: { fontSize: 13, color: "#4CAF50", fontWeight: "600" },

  orderCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
  },
  orderIcon: { width: 36, height: 36, marginRight: 10, resizeMode: "contain" },
  orderName: { fontSize: 14, fontWeight: "bold", color: "#333" },
  orderDetails: { fontSize: 12, color: "#666" },
  processBtn: {
    backgroundColor: "#FFE082",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  processText: { fontSize: 12, color: "#6d4c41", fontWeight: "600" },
  shipBtn: {
    backgroundColor: "#E1F5FE",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  shipText: { fontSize: 12, color: "#0277bd", fontWeight: "600" },

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
