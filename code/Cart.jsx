import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function Cart({ navigation }) {
  const [activeTab, setActiveTab] = useState("Cart");

  const renderCartItem = (image, title, subtitle, quantity, price) => (
    <View style={styles.cartItem}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
        <View style={styles.quantityRow}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.itemPrice}>{price}</Text>
        <Text style={styles.removeText}>Remove</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Fixed Top Header */}
      <View style={styles.header}>
           <TouchableOpacity
                  onPress={() => navigation.navigate("BuyerDashboard")}
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
        {/* Notification icon right */}
        <View style={{ position: "relative", marginLeft: 10 }}>
          <Image
            source={require("../assets/notification.png")}
            style={styles.notificationIcon}
          />
          <View style={styles.headerNotificationBadge}>
            <Text style={styles.headerNotificationText}>2</Text>
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Shopping Cart Header (Inside ScrollView) */}
        <View style={styles.cartHeader}>
          <Text style={styles.pageTitle}>Shopping Cart</Text>
          <Text style={styles.pageSubtitle}>5 items ready for checkout</Text>
        </View>

        {renderCartItem(
          require("../assets/rice.png"),
          "Premium Basmati Rice",
          "$85/kg • From Rice Fields",
          "2 kg",
          "$170"
        )}
        {renderCartItem(
          require("../assets/carrot.png"),
          "Fresh Carrots",
          "$45/kg • From Green Valley Farms",
          "3 kg",
          "$135"
        )}

        {/* Order Summary */}
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$305</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$50</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$355</Text>
          </View>
        </View>
      </ScrollView>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
  <View style={styles.bottomNav}>
  {[
    { key: "Home", image: require("../assets/home-icon.png"), route: "BuyerDashboard" },
    { key: "Browse", image: require("../assets/products-icon.png"), route: "BuyerBrowse" },
    { key: "Cart", image: require("../assets/cart.png"), badge: 5, route: "Cart" },
    { key: "Orders", image: require("../assets/orders.png"), route: "BuyerOrder" },
  ].map((tab) => (
    <TouchableOpacity
      key={tab.key}
      style={[
        styles.navItem,
        activeTab === tab.key && styles.activeNavItem,
      ]}
      onPress={() => {
        setActiveTab(tab.key);
        navigation.navigate(tab.route); // ✅ navigate এখানে হবে
      }}
    >
      <View style={{ position: "relative" }}>
        <Image source={tab.image} style={styles.navIcon} />
        {tab.badge && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>{tab.badge}</Text>
          </View>
        )}
      </View>
      <Text
        style={[
          styles.navText,
          activeTab === tab.key && styles.activeNavText,
        ]}
      >
        {tab.key}
      </Text>
    </TouchableOpacity>
  ))}
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

  content: { flex: 1, paddingHorizontal: 15 },

  cartHeader: { marginBottom: 15 },
  pageTitle: { fontSize: 24, fontWeight: "bold", color: "#2c3e50" },
  pageSubtitle: { fontSize: 14, color: "#666", marginTop: 5 },

  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: { width: 40, height: 40, marginRight: 12, resizeMode: "contain" },
  itemDetails: { flex: 1 },
  itemTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  itemSubtitle: { fontSize: 13, color: "#666", marginTop: 2 },
  quantityRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  quantityButton: {
    backgroundColor: "#eaf8ea",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  quantityText: { fontSize: 16, fontWeight: "bold", color: "#28a745" },
  quantityValue: { marginHorizontal: 10, fontSize: 14, fontWeight: "bold" },

  itemRight: { alignItems: "flex-end" },
  itemPrice: { fontSize: 16, fontWeight: "bold", color: "#333" },
  removeText: { fontSize: 12, color: "red", marginTop: 5 },

  summaryBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  summaryTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  summaryLabel: { fontSize: 14, color: "#555" },
  summaryValue: { fontSize: 14, fontWeight: "bold", color: "#333" },
  totalLabel: { fontSize: 16, fontWeight: "bold", color: "#000" },
  totalValue: { fontSize: 16, fontWeight: "bold", color: "#000" },

  checkoutButton: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    margin: 15,
  },
  checkoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: { alignItems: "center", padding: 8, borderRadius: 8 },
  activeNavItem: {
    borderWidth: 1,
    borderColor: "#28a745",
    backgroundColor: "#eaf8ea",
  },
  navIcon: { width: 22, height: 22, marginBottom: 3, resizeMode: "contain" },
  navText: { fontSize: 12, color: "#555" },
  activeNavText: { color: "#28a745", fontWeight: "bold" },

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
