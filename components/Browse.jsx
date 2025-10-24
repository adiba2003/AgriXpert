import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList
} from 'react-native';

export default function Browse({ navigation }) {
  const [activeTab, setActiveTab] = useState("Products");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("Newest First");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      farmer: "Rice Fields",
      price: "$85/kg",
      location: "Khulna",
      category: "Grains",
      image: require('../assets/rice.png'),
      rating: 4.8
    },
    {
      id: 2,
      name: "Fresh Carrots",
      farmer: "Green Valley Farms",
      price: "$45/kg",
      location: "Khulna",
      category: "Vegetables",
      image: require('../assets/carrot.png'),
      rating: 4.9
    },
    {
      id: 3,
      name: "Fresh Tomatoes",
      farmer: "Green Valley Farms",
      price: "$60/kg",
      location: "Dhaka",
      category: "Vegetables",
      image: require('../assets/tomato.png'),
      rating: 4.5
    },
    {
      id: 4,
      name: "Organic Potatoes",
      farmer: "Farm Fresh Co.",
      price: "$85/kg",
      location: "Chittagong",
      category: "Vegetables",
      image: require('../assets/potato.png'),
      rating: 4.2
    },
    {
      id: 5,
      name: "Sweet Mangoes",
      farmer: "Mango Garden",
      price: "$80/kg",
      location: "Rajshahi",
      category: "Fruits",
      image: require('../assets/mango.png'),
      rating: 4.8
    },
    {
      id: 6,
      name: "Fresh Milk",
      farmer: "Dairy Pure",
      price: "$1.20/L",
      location: "Dhaka",
      category: "Dairy",
      image: require('../assets/milk.png'),
      rating: 4.3
    },
    {
      id: 7,
      name: "Eggs",
      farmer: "Happy Hens",
      price: "$0.25/egg",
      location: "Sylhet",
      category: "Poultry",
      image: require('../assets/eggs.png'),
      rating: 4.6
    }
  ];

  const categories = [
    "All Categories",
    "Vegetables",
    "Fruits",
    "Dairy",
    "Poultry",
    "Grains",
    "Spices"
  ];

  const locations = [
    "All Locations",
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Sylhet",
    "Barisal"
  ];

  const sortOptions = [
    "Newest First",
    "Price: Low to High",
    "Price: High to Low",
    "Highest Rated",
    "Most Popular"
  ];

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.farmerName}>{item.farmer}</Text>
        <View style={styles.productMeta}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productLocation}>{item.location}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/star-icon.webp')} style={styles.starIcon} />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

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
          <Text style={styles.subtitle}>Browse Products</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <View style={styles.browseSection}>
          <Text style={styles.browseTitle}>Browse Products</Text>
          <Text style={styles.browseSubtitle}>
            Discover fresh produce from local farmers
          </Text>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search products..."
              placeholderTextColor="#999"
            />
          </View>

          {/* Category Filter */}
          <Text style={styles.filterLabel}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.filterChip, selectedCategory === category && styles.selectedFilterChip]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[styles.filterChipText, selectedCategory === category && styles.selectedFilterChipText]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Location Filter */}
          <Text style={styles.filterLabel}>Locations</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
            {locations.map((location, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.filterChip, selectedLocation === location && styles.selectedFilterChip]}
                onPress={() => setSelectedLocation(location)}
              >
                <Text style={[styles.filterChipText, selectedLocation === location && styles.selectedFilterChipText]}>
                  {location}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Sort Options */}
          <View style={styles.sortContainer}>
            <Text style={styles.sortLabel}>Sort by:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sortScroll}>
              {sortOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.sortChip, sortBy === option && styles.selectedSortChip]}
                  onPress={() => setSortBy(option)}
                >
                  <Text style={[styles.sortChipText, sortBy === option && styles.selectedSortChipText]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Products Grid */}
          <Text style={styles.productsTitle}>Available Products</Text>
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={styles.productsRow}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { name: "Home", image: require('../assets/home-icon.png'),route: "GuestHome" },
          { name: "Products", image: require('../assets/products-icon.png'),route: "browse"},
          { name: "Learn", image: require('../assets/learn-icon.webp') ,route: "LearnArti" },
          { name: "AI Chat", image: require('../assets/chat-icon.png'),route: "Ai"  }
        ].map((item, index) => {
          const isActive = activeTab === item.name;
          return (
            <TouchableOpacity 
              key={index} 
              style={[styles.navItem, isActive && styles.activeNavItem]} 
              onPress={() => {setActiveTab(item.name);
                navigation.navigate(item.route);
              }
              }
            >
              <Image source={item.image} style={styles.navIcon} />
              <Text style={[styles.navText, isActive && { color: "#4CAF50", fontWeight: "bold" }]}>
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
  header: { flexDirection: "row", alignItems: "center", marginBottom: 10, padding: 20, borderBottomWidth: 1, borderBottomColor: "#eee", backgroundColor: "#fff" },
  backButton: { marginRight: 10 },
  backIcon: { width: 24, height: 24, resizeMode: "contain" },

  logoBox: { backgroundColor: "#28a745", width: 50, height: 50, borderRadius: 12, alignItems: "center", justifyContent: "center", marginRight: 12 },
  logoText: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  appName: { fontSize: 18, fontWeight: "bold", color: "#000" },
  subtitle: { fontSize: 13, color: "#666"},
  content: { flex: 1, padding: 20 },
  browseSection: { flex: 1 },
  browseTitle: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', marginBottom: 8,marginTop: -12},
  browseSubtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  searchContainer: { marginBottom: 20 },
  searchInput: { backgroundColor: '#f8f9fa', borderWidth: 1, borderColor: '#e9ecef', borderRadius: 12, padding: 15, fontSize: 16, color: '#333' },
  filterLabel: { fontSize: 16, fontWeight: '600', color: '#2c3e50', marginBottom: 10, marginTop: 10 },
  filterScroll: { marginBottom: 15 },
  filterChip: { backgroundColor: '#f8f9fa', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, marginRight: 10, borderWidth: 1, borderColor: '#e9ecef' },
  selectedFilterChip: { backgroundColor: '#4CAF50', borderColor: '#4CAF50' },
  filterChipText: { fontSize: 14, color: '#666', fontWeight: '500' },
  selectedFilterChipText: { color: '#fff', fontWeight: '600' },
  sortContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  sortLabel: { fontSize: 14, fontWeight: '600', color: '#666', marginRight: 10 },
  sortScroll: { flex: 1 },
  sortChip: { backgroundColor: '#f8f9fa', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, marginRight: 8, borderWidth: 1, borderColor: '#e9ecef' },
  selectedSortChip: { backgroundColor: '#2196F3', borderColor: '#2196F3' },
  sortChipText: { fontSize: 12, color: '#666', fontWeight: '500' },
  selectedSortChipText: { color: '#fff', fontWeight: '600' },
  productsTitle: { fontSize: 20, fontWeight: 'bold', color: '#2c3e50', marginBottom: 15, marginTop: 10 },
  productsRow: { justifyContent: 'space-between', marginBottom: 15 },
  productCard: { backgroundColor: '#fff', borderRadius: 12, padding: 12, width: '48%', marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, borderWidth: 1, borderColor: '#f0f0f0' },
  productImage: { width: '100%', height: 100, borderRadius: 8, marginBottom: 10, resizeMode: 'contain' },
  productInfo: { flex: 1 },
  productName: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  farmerName: { fontSize: 12, color: '#666', marginBottom: 6 },
  productMeta: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  productPrice: { fontSize: 14, fontWeight: 'bold', color: '#4CAF50' },
  productLocation: { fontSize: 11, color: '#999' },
  ratingContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  starIcon: { width: 14, height: 14, marginRight: 4, resizeMode: "contain" },
  rating: { fontSize: 11, color: '#666' },
  category: { fontSize: 10, color: '#999', backgroundColor: '#f0f0f0', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#f0f0f0', borderTopWidth: 1, borderTopColor: '#ddd', paddingVertical: 10 },
  navItem: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 8, borderWidth: 2, borderColor: 'transparent', borderRadius: 10, marginHorizontal: 5 },
  activeNavItem: { borderColor: '#4CAF50', backgroundColor: '#eaf8ea' },
  navIcon: { width: 28, height: 28, marginBottom: 5, resizeMode: 'contain' },
  navText: { fontSize: 12, color: '#333', fontWeight: '500', textAlign: 'center' },
});
