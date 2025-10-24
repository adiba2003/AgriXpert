import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';

export default function BuyerDashboard({ navigation }) {
  const [activeNav, setActiveNav] = useState("Home");

  // Recent orders data
  const recentOrders = [
    { id: 1, name: "Premium Basmati Rice - 5kg", orderId: "#1234", status: "Delivered", statusColor: "#4CAF50", image: require('../assets/rice.png') },
    { id: 2, name: "Fresh Carrots - 2kg", orderId: "#1235", status: "In Transit", statusColor: "#FF9800", image: require('../assets/carrot.png') },
    { id: 3, name: "Fresh Tomatoes - 3kg", orderId: "#1236", status: "Delivered", statusColor: "#4CAF50", image: require('../assets/tomato.png') }
  ];

  // Quick actions data
const quickActions = [
  {
    title: "Browse Products",
    subtitle: "Find fresh produce",
    image: require("../assets/cart.png"),
    route: "BuyerBrowse",
  },
  {
    title: "My Orders",
    subtitle: "Track deliveries",
    image: require("../assets/order.png"),
    route: "BuyerOrder",
  },
  {
    title: "Shopping Cart",
    subtitle: "5 items ready",
    image: require("../assets/Shopping Cart.jpeg"),
    route: "Cart",
  },
  {
    title: "Learn",
    subtitle: "Farming guides",
    image: require("../assets/books.png"),
    route: "BuyerLearn",
  },
];


  // Bottom navigation items
  const navItems = [
    { name: "Home", image: require('../assets/home-icon.png'), route: "BuyerDashboard" },
    { name: "Browse", image: require('../assets/products-icon.png'), route: "BuyerBrowse" },
    { name: "Cart", image: require('../assets/cart.png'), notification: 5, route: "Cart" },
    { name: "Orders", image: require('../assets/orders.png'), route: "BuyerOrder" }
  ];
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
        {/* Notification icon right */}
        <View style={{ position: 'relative', marginLeft: 10 }}>
          <Image source={require('../assets/notification.png')} style={styles.notificationIcon} />
          <View style={styles.headerNotificationBadge}>
            <Text style={styles.headerNotificationText}>2</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.welcomeSubtitle}>Find fresh products from local farmers</Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Image source={require('../assets/cart.png')} style={styles.statIcon} />
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Cart Items</Text>
          </View>
          <View style={styles.statCard}>
            <Image source={require('../assets/order.png')} style={styles.statIcon} />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={styles.statCard}>
            <Image source={require('../assets/star-icon.webp')} style={styles.statIcon} />
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
    <View style={styles.quickActionsGrid}>
  {quickActions.map((action, index) => (
    <TouchableOpacity
      key={index}
      style={styles.actionCard}
      onPress={() => navigation.navigate(action.route)}
    >
      <Image source={action.image} style={styles.actionImage} />
      <View style={styles.actionText}>
        <Text style={styles.actionTitle}>{action.title}</Text>
        <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
      </View>
    </TouchableOpacity>
  ))}
</View>


        {/* Recent Orders */}
        <View style={styles.ordersHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <TouchableOpacity  onPress={() => navigation.navigate("BuyerOrder")}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ordersContainer}>
          {recentOrders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <Image source={order.image} style={styles.orderImage} />
              <View style={styles.orderInfo}>
                <Text style={styles.orderName}>{order.name}</Text>
                <Text style={styles.orderId}>{order.orderId}</Text>
              </View>
              <View style={[styles.orderStatus, { backgroundColor: order.statusColor + '20' }]}>
                <Text style={[styles.statusText, { color: order.statusColor }]}>{order.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
   <View style={styles.bottomNav}>
      {navItems.map((item, index) => {
        const isActive = activeNav === item.name;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.navItem, isActive && styles.activeNavItem]}
            onPress={() => {
              setActiveNav(item.name);
              navigation.navigate(item.route);
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
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: "row", alignItems: "center", padding: 20, paddingTop: 10, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#eee" },
  logoBox: { backgroundColor: "#28a745", width: 50, height: 50, borderRadius: 12, alignItems: "center", justifyContent: "center", marginRight: 12 },
  logoText: { color: "#fff", fontSize: 22, fontWeight: "bold" },
      backButton: { marginRight: 10 },
  backIcon: { width: 24, height: 24, resizeMode: "contain" },
  appName: { fontSize: 18, fontWeight: "bold", color: "#000" },
  subtitle: { fontSize: 13, color: "#666" },
  notificationIcon: { width: 28, height: 28, resizeMode: 'contain' },
  headerNotificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 4,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerNotificationText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  content: { flex: 1, padding: 20 },
  welcomeSection: { marginBottom: 25 },
  welcomeTitle: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', marginBottom: 8 },
  welcomeSubtitle: { fontSize: 16, color: '#666', lineHeight: 22 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  statCard: { flex: 1, backgroundColor: '#fff', borderRadius: 12, padding: 15, marginHorizontal: 5, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  statIcon: { width: 24, height: 24, marginBottom: 8, resizeMode: 'contain' },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', marginBottom: 5 },
  statLabel: { fontSize: 12, color: '#666', fontWeight: '500' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#2c3e50', marginBottom: 15 },
  quickActionsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 30 },
  actionCard: { width: '48%', backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  actionImage: { width: 40, height: 40, marginRight: 12, resizeMode: 'contain' },
  actionText: { flex: 1 },
  actionTitle: { fontSize: 14, fontWeight: 'bold', color: '#2c3e50', marginBottom: 2 },
  actionSubtitle: { fontSize: 12, color: '#666' },
  ordersHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  viewAllText: { fontSize: 14, color: '#4CAF50', fontWeight: '600' },
  ordersContainer: { marginBottom: 20 },
  orderCard: { backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 10, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  orderImage: { width: 40, height: 40, borderRadius: 8, marginRight: 12, resizeMode: 'contain' },
  orderInfo: { flex: 1 },
  orderName: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50', marginBottom: 4 },
  orderId: { fontSize: 12, color: '#666' },
  orderStatus: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15, marginLeft: 10 },
  statusText: { fontSize: 12, fontWeight: '600' },
  bottomNav: { flexDirection: 'row', backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ddd', paddingVertical: 10, paddingHorizontal: 5 },
  navItem: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 8, marginHorizontal: 5, borderRadius: 10 },
  activeNavItem: { backgroundColor: '#eaf8ea' },
  navIcon: { width: 24, height: 24, marginBottom: 4, resizeMode: 'contain' },
  navText: { fontSize: 12, color: '#666', fontWeight: '500' },
  activeNavText: { color: '#4CAF50', fontWeight: 'bold' },
  notificationBadge: { position: 'absolute', top: -5, right: -10, backgroundColor: 'red', borderRadius: 8, paddingHorizontal: 4, minWidth: 16, height: 16, alignItems: 'center', justifyContent: 'center' },
  notificationText: { color: '#fff', fontSize: 10, fontWeight: 'bold' }
});
