import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function SoilGuide({ navigation }) {
  const [activeTab, setActiveTab] = useState("Home"); // Default Home selected

  const tabs = [
    { name: "Home", img: require("../assets/home-icon.png"), route: "GuestHome" },
    { name: "Products", img: require("../assets/products-icon.png"), route: "browse" },
    { name: "Learn", img: require("../assets/learn-icon.webp"), route: "LearnArti" },
    { name: "AI Chat", img: require("../assets/chat-icon.png"), route: "Ai" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
          <TouchableOpacity
          onPress={() => navigation.navigate("GuestHome")}
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
          <Text style={styles.subtitle}>Soil & Fertilizer Guide</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Existing Soil Types Section */}
        <View style={styles.sectionHeader}>
          <Image 
            source={require('../assets/leaf.jpg')} 
            style={styles.leafIcon} 
          />
          <Text style={styles.sectionTitle}>Soil Types & Fertilizers</Text>
        </View>
        
        <Text style={styles.sectionDescription}>
          Learn about soil health and fertilizer management
        </Text>

        <Text style={styles.fertilizerTitle}>Types of Soil</Text>

        {/* Soil Types */}
        {[
          { name: "Loamy Soil", description: "Most fertile, suitable for all types of crops", color: "#8FBC8F" },
          { name: "Clay Soil", description: "Good water retention, ideal for rice cultivation", color: "#D2B48C" },
          { name: "Sandy Soil", description: "Good drainage, suitable for vegetables", color: "#F4A460" }
        ].map((soil, index) => (
          <View key={index} style={styles.soilCard}>
            <View style={styles.soilHeader}>
              <View style={[styles.soilImagePlaceholder, { backgroundColor: soil.color }]} />
              <View style={styles.soilTextContainer}>
                <Text style={styles.soilName}>{soil.name}</Text>
                <Text style={styles.soilDescription}>{soil.description}</Text>
              </View>
            </View>
            <View style={[styles.colorIndicator, { backgroundColor: soil.color }]} />
          </View>
        ))}

        {/* Fertilizer Section - Moved before Crop Management */}
        <Text style={styles.fertilizerTitle}>Fertilizer Usage Guide</Text>
        <View style={styles.fertilizerSection}>
          {[
            { name: "Organic Fertilizer", desc: "Animal dung, Compost", image: require('../assets/leaf1.png') },
            { name: "Chemical Fertilizer", desc: "Urea, TSP, MP", image: require('../assets/chemical.png') }
          ].map((fertilizer, index, arr) => (
            <View
              key={index}
              style={[
                styles.fertilizerItem,
                index === arr.length - 1 && { borderBottomWidth: 0, marginBottom: 0, paddingBottom: 0 }
              ]}
            >
              <View style={styles.fertilizerHeader}>
                <View style={styles.fertilizerIcon}>
                  <Image 
                    source={fertilizer.image} 
                    style={{ width: 28, height: 28, resizeMode: 'contain' }} 
                  />
                </View>
                <Text style={styles.fertilizerName}>{fertilizer.name}</Text>
              </View>
              <Text style={styles.fertilizerDescription}>{fertilizer.desc}</Text>
            </View>
          ))}
        </View>

        {/* Crop Management Section - Now comes after Fertilizer */}
        <Text style={styles.cropManagementTitle}>Crop Management Guide</Text>
        <View style={styles.cropManagementSection}>
          {[
            { 
              title: "Soil Testing", 
              description: "Comprehensive soil analysis and recommendations",
              image: require('../assets/search-icon.png')
            },
            { 
              title: "Nutrient Management", 
              description: "Optimal nutrient balance for different crops",
              image: require('../assets/leaf.jpg')
            },
            { 
              title: "Season Planning", 
              description: "Best planting times and crop rotation",
              image: require('../assets/calendar-icon.png')
            },
            { 
              title: "Water Management", 
              description: "Efficient irrigation and water conservation",
              image: require('../assets/water-icon.png')
            }
          ].map((crop, index) => (
            <View key={index} style={styles.cropItem}>
              <View style={styles.cropIconContainer}>
                <Image 
                  source={crop.image} 
                  style={styles.cropImage}
                />
              </View>
              <View style={styles.cropTextContainer}>
                <Text style={styles.cropItemTitle}>{crop.title}</Text>
                <Text style={styles.cropItemDescription}>{crop.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
         <View style={styles.bottomNav}>
      {tabs.map((item, index) => {
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
  container: { flex: 1, backgroundColor: '#fff' },
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
  content: { flex: 1, padding: 20 },

  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  leafIcon: { width: 24, height: 24, marginRight: 8 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  sectionDescription: { fontSize: 14, color: '#666', marginBottom: 20 },
  fertilizerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15, marginTop: 10 },
  soilCard: { backgroundColor: '#f9f9f9', borderRadius: 10, padding: 15, marginBottom: 15, borderLeftWidth: 4, borderLeftColor: '#4CAF50' },
  soilHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  soilImagePlaceholder: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  soilTextContainer: { flex: 1 },
  soilName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  soilDescription: { fontSize: 14, color: '#666', marginTop: 5 },
  colorIndicator: { height: 4, borderRadius: 2, marginTop: 5 },

  // Fertilizer Section Styles
  fertilizerSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  fertilizerItem: {
    marginBottom: 15,
    paddingBottom: 12,
    borderBottomWidth: 5,
    borderBottomColor: '#e0e0e0',
  },
  fertilizerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  fertilizerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  fertilizerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  fertilizerDescription: {
    fontSize: 14,
    color: '#666',
    marginLeft: 46,
  },

  // Crop Management Section Styles
  cropManagementSection: {
    backgroundColor: '#f0f8ff',
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  cropManagementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
  },
  cropItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cropIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cropImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  cropTextContainer: {
    flex: 1,
  },
  cropItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  cropItemDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },

  bottomNav: { 
    flexDirection: 'row', 
    backgroundColor: '#f0f0f0', 
    borderTopWidth: 1, 
    borderTopColor: '#ddd', 
    paddingVertical: 10 
  },
  navItem: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 8, 
    borderWidth: 2, 
    borderColor: 'transparent', 
    borderRadius: 10, 
    marginHorizontal: 5 
  },
  activeNavItem: { 
    borderColor: '#4CAF50',
    backgroundColor: '#eaf8ea'
  },
  navIcon: { width: 28, height: 28, marginBottom: 5, resizeMode: 'contain' },
  navText: { fontSize: 12, color: '#333', fontWeight: '500', textAlign: 'center' },
});