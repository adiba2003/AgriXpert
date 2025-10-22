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

export default function Calendar({ navigation }) {
  const [activeNav, setActiveNav] = useState("Home");
  const [checkedTasks, setCheckedTasks] = useState({});

  // Bottom navigation items
   const navItems = [
    { name: "Home", image: require("../assets/home-icon.png"), route: "FarmerDashboard" },
    { name: "Products", image: require("../assets/products-icon.png"), route: "FarmerProducts" },
    { name: "Weather", image: require("../assets/weather.png"), route: "Calendar" },
    { name: "Help", image: require("../assets/help.png"), route: "Calendar" }, // চাইলে আলাদা Help screen দিও
    { name: "Orders", image: require("../assets/orders.png"), notification: 15, route: "FarmerOrders" },
  ];
  // Calendar data
  const calendarData = {
    month: "October 2025",
    days: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"],
    dates: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, null, null, null, null],
    ],
  };

  const highlightedDates = [6, 9, 14];

  // Farming tasks data
  const farmingTasks = [
    {
      id: 1,
      title: "Irrigate the rice field",
      items: ["6:00 AM - 8:00 AM • Urgent"],
      image: require("../assets/water-icon.png"),
    },
    {
      id: 2,
      title: "Apply fertilizer to tomato plants",
      items: ["4:00 PM - 6:00 PM"],
      image: require("../assets/leaf.jpg"),
    },
    {
      id: 3,
      title: "Check weather forecast",
      items: ["Anytime"],
      image: require("../assets/weather-colour.png"),
    },
  ];

  // Crop Cards data
  const cropCards = [
    {
      id: 1,
      title: "Vegetables",
      crops: "Spinach, Red Amaranth, Radish",
      season: "Planting: December - January",
      image: require("../assets/vegetables.jpeg"),
    },
    {
      id: 2,
      title: "Root Vegetables",
      crops: "Carrot, Beetroot, Turnip",
      season: "Planting: November - December",
      image: require("../assets/carrot.png"),
    },
    {
      id: 3,
      title: "Spices",
      crops: "Chili, Coriander, Cumin",
      season: "Planting: October - November",
      image: require("../assets/chili.png"),
    },
    {
      id: 4,
      title: "Bulb Vegetables",
      crops: "Onion, Garlic, Leek",
      season: "Planting: November - December",
      image: require("../assets/onion.png"),
    },
  ];

  // Next Week's Tasks
  const nextWeekTasks = [
    {
      id: 1,
      title: "Rice Harvesting Preparation",
      detail: "October 9 • Prepare Equipment",
      image: require("../assets/rice.png"),
    },
    {
      id: 2,
      title: "Carrot Seed Sowing",
      detail: "October 14 • Prepare the Land",
      image: require("../assets/carrot.png"),
    },
  ];

  // Toggle checkbox
  const toggleTask = (id) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />

      {/* Header */}
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
        <TouchableOpacity style={styles.notificationBtn}>
          <Image
            source={require("../assets/notification.png")}
            style={styles.notificationIcon}
          />
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>15</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Screen Title with calendar icon */}
        <View style={styles.titleSection}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/calendar-icon.png")}
              style={styles.calendarIcon}
            />
            <Text style={styles.screenTitle}>Farming Calendar</Text>
          </View>
          <Text style={styles.screenSubtitle}>
            Plan your crops and track farming activities
          </Text>
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarCard}>
          <Text style={styles.monthTitle}>{calendarData.month}</Text>

          {/* Days Header */}
          <View style={styles.daysHeader}>
            {calendarData.days.map((day, index) => (
              <Text key={index} style={styles.dayText}>
                {day}
              </Text>
            ))}
          </View>

          {/* Calendar Dates */}
          <View style={styles.calendarGrid}>
            {calendarData.dates.map((week, weekIndex) => (
              <View key={weekIndex} style={styles.weekRow}>
                {week.map((date, dayIndex) => {
                  const isHighlighted = highlightedDates.includes(date);
                  return (
                    <TouchableOpacity
                      key={dayIndex}
                      style={[
                        styles.dateCell,
                        isHighlighted && styles.activeDate,
                      ]}
                      disabled={!date}
                    >
                      <Text
                        style={[
                          styles.dateText,
                          isHighlighted && styles.activeDateText,
                        ]}
                      >
                        {date || ""}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Farming Tasks Section */}
          <View style={styles.tasksSection}>
            <Text style={styles.tasksTitle}>Today's Tasks (6 October)</Text>

            {farmingTasks.map((task) => (
              <TouchableOpacity
                key={task.id}
                style={styles.taskItem}
                onPress={() => toggleTask(task.id)}
              >
                <View style={styles.taskHeader}>
                  <View style={styles.checkbox}>
                    {checkedTasks[task.id] && (
                      <View style={styles.checkboxInner} />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.taskTitle,
                      checkedTasks[task.id] && {
                        textDecorationLine: "line-through",
                        color: "#4CAF50",
                      },
                    ]}
                  >
                    {task.title}
                  </Text>
                  <Image source={task.image} style={styles.taskImage} />
                </View>
                <View style={styles.taskDetails}>
                  {task.items.map((item, idx) => (
                    <Text key={idx} style={styles.taskDetail}>
                      {item}
                    </Text>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Weather Alert Section */}
          <View style={styles.alertCard}>
            <Image
              source={require("../assets/weather-colour.png")}
              style={styles.alertImage}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.alertTitle}>Weather Alert</Text>
              <Text style={styles.alertText}>
                There is a possibility of rain for the next 3 days. Advance the
                rice harvesting work and suspend irrigation activities.
              </Text>
            <TouchableOpacity
  style={styles.alertButton}
  onPress={() => navigation.navigate("FAi")} // 👈 এই লাইনটাই মূল কাজ করছে
>
  <Text style={styles.alertButtonText}>Get advice from AI</Text>
</TouchableOpacity>
            </View>
          </View>

          {/* Winter Cultivation Guide Title */}
          <Text style={styles.cultivationTitle}>Winter Cultivation Guide</Text>

          {/* Crop Cards Grid */}
          <View style={styles.cardsGrid}>
            {cropCards.map((card) => (
              <View key={card.id} style={[styles.cropCard]}>
                <Image source={card.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardCrops}>{card.crops}</Text>
                <Text style={styles.cardSeason}>{card.season}</Text>
              </View>
            ))}
          </View>

          {/* Next Week's Tasks */}
          <View style={styles.nextWeekBox}>
             <Text style={styles.nextWeekTitle}>Next Week's Tasks</Text>
             {nextWeekTasks.map((task, index) => {
                const daysLeft = index === 0 ? "3 days left" : "8 days left"; // example logic
                return (
                   <View key={task.id} style={styles.nextTaskCard}>
                     <Image source={task.image} style={styles.nextTaskImage} />
                     <View style={{ flex: 1 }}>
                         <Text style={styles.nextTaskTitle}>{task.title}</Text>
                         <Text style={styles.nextTaskDetail}>{task.detail}</Text>
                    </View>
                     <View style={styles.daysLeftTag}>
                       <Text style={styles.daysLeftText}>{daysLeft}</Text>
                    </View>
                    </View>
                     );
                 })}
           </View>

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
              navigation.navigate(item.route); // ✅ navigate হবে এখানে
            }}
          >
            <View style={{ position: "relative" }}>
              <Image source={item.image} style={styles.navIcon} />
              {item.notification && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>{item.notification}</Text>
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
  notificationBtn: { padding: 5, position: "relative" },
  notificationIcon: { width: 28, height: 28, resizeMode: "contain" },
  notificationBadge: {
    position: "absolute",
    right: 0,
    top: -2,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  badgeText: { color: "#fff", fontSize: 10, fontWeight: "bold" },
  content: { flex: 1, padding: 20 },
  titleSection: { marginBottom: 20 },
  calendarIcon: { width: 24, height: 24, marginRight: 8, resizeMode: "contain" },
  screenTitle: { fontSize: 22, fontWeight: "bold", color: "#2c3e50" },
  screenSubtitle: { fontSize: 14, color: "#666", marginTop: 4 },
  calendarCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
    textAlign: "center",
  },
  daysHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dayText: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },
  calendarGrid: { marginBottom: 20 },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  dateCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    borderRadius: 6,
  },
  activeDate: { backgroundColor: "#4CAF50" },
  dateText: { fontSize: 14, color: "#333", fontWeight: "500" },
  activeDateText: { color: "#fff", fontWeight: "bold" },
  divider: { height: 1, backgroundColor: "#e0e0e0", marginVertical: 15 },
  tasksSection: { marginTop: 10 },
  tasksTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
  },
  taskItem: { marginBottom: 20 },
  taskHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#4CAF50",
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 2,
  },
  taskTitle: { fontSize: 14, fontWeight: "600", color: "#333", flex: 1 },
  taskDetails: { marginLeft: 30 },
  taskDetail: { fontSize: 13, color: "#666", marginBottom: 4 },
  taskImage: { width: 30, height: 30, resizeMode: "contain", marginLeft: 10 },

  // Weather Alert Styles
  alertCard: {
    flexDirection: "row",
    backgroundColor: "#fff3e0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: "#ff9800",
    alignItems: "center",
  },
  alertImage: { width: 50, height: 50, resizeMode: "contain", marginRight: 12 },
  alertTitle: { fontSize: 16, fontWeight: "bold", color: "#e65100", marginBottom: 8 },
  alertText: { fontSize: 14, color: "#333", marginBottom: 12 },
  alertButton: {
    backgroundColor: "#ff9800",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  alertButtonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },

  // Winter Cultivation Guide title
  cultivationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 12,
  },

  // Crop Cards Grid
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cropCard: {
    width: "48%",
    backgroundColor: "#e8f5e9",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  cardImage: { width: 50, height: 50, resizeMode: "contain", marginBottom: 8 },
  cardTitle: { fontSize: 14, fontWeight: "bold", color: "#2c3e50", marginBottom: 4 },
  cardCrops: { fontSize: 12, color: "#666", textAlign: "center", marginBottom: 2 },
  cardSeason: { fontSize: 12, color: "#4CAF50", textAlign: "center" },

  // Next Week's Tasks
  nextWeekBox: {
    backgroundColor: "#f0f4ff",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  nextWeekTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 12,
  },
  nextTaskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  nextTaskImage: { width: 40, height: 40, resizeMode: "contain", marginRight: 12 },
  nextTaskTitle: { fontSize: 14, fontWeight: "bold", color: "#333" },
  nextTaskDetail: { fontSize: 12, color: "#666" },

daysLeftTag: {
  backgroundColor: "#E8F5E9",
  borderRadius: 8,
  paddingHorizontal: 10,
  paddingVertical: 5,
  alignSelf: "flex-start",
},
daysLeftText: {
  fontSize: 12,
  color: "#388E3C",
  fontWeight: "600",
},


  // Bottom Navigation
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
    position: "relative",
  },
  activeNavItem: { backgroundColor: "#eaf8ea" },
  navIcon: { width: 24, height: 24, marginBottom: 4, resizeMode: "contain" },
  navText: { fontSize: 12, color: "#666", fontWeight: "500" },
  activeNavText: { color: "#4CAF50", fontWeight: "bold" },
  navBadge: {
    position: "absolute",
    top: 2,
    right: 18,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});
