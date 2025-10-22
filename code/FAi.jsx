import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";


export default function FAi({ navigation }) {
  const [activeNav, setActiveNav] = useState("AI Chat");
  const [messages, setMessages] = useState([
    {
      id: "0",
      sender: "AI",
      text: "Hello! I am your AI agriculture assistant. Do you have any questions?",
    },
  ]);
  const [input, setInput] = useState("");


  const flatListRef = useRef();


  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);


  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = {
      id: Date.now().toString(),
      sender: "You",
      text: input,
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };


  const popularQuestions = [
    { title: "Rice Diseases", description: "Identify and treat common rice plant diseases" },
    { title: "Fertilizer Usage", description: "Optimal fertilizer application for different crops" },
    { title: "Winter Vegetables", description: "Best vegetables to grow in winter season" },
    { title: "Soil Health", description: "Improve and maintain soil fertility" },
    { title: "Organic Pesticides", description: "Natural pest control methods" },
    { title: "Irrigation", description: "Efficient water management techniques" },
  ];


  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.headerSection}>
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
          <Text style={styles.appTitle}>AgriXpert</Text>
          <Text style={styles.appSubtitle}>AI Assistant</Text>
        </View>
      </View>


      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        {/* Header with Robot */}
        <View style={styles.scrollHeaderRow}>
          <Image
            source={require("../assets/robot.png")}
            style={styles.robotImageHeader}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.scrollHeaderTitle}>AI Agriculture Assistant</Text>
            <Text style={styles.scrollHeaderSubtitle}>
              Get instant answers to your farming questions
            </Text>
          </View>
        </View>


        {/* Chat List Box */}
        <View style={styles.chatListBox}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageWrapper,
                  item.sender === "You" ? styles.userWrapper : styles.aiWrapper,
                ]}
              >
                {item.sender === "AI" && (
                  <View style={styles.aiProfile}>
                    <Text style={styles.aiProfileText}>AI</Text>
                  </View>
                )}
                <View
                  style={[
                    styles.messageBubble,
                    item.sender === "You" ? styles.userBubble : styles.aiBubble,
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      item.sender === "You" ? styles.userText : styles.aiText,
                    ]}
                  >
                    {item.text}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>


        {/* Popular Questions */}
        <View style={styles.aiSection}>
          <View style={styles.aiHeader}>
            <Text style={styles.aiTitle}>Popular Questions</Text>
          </View>
          {popularQuestions.map((question, index) => (
            <TouchableOpacity key={index} style={styles.questionItem}>
              <View style={styles.questionContent}>
                <Text style={styles.questionTitle}>{question.title}</Text>
                <Text style={styles.questionDescription}>
                  {question.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}


          {/* Input Section */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type your question here..."
              placeholderTextColor="#999"
              multiline={true}
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>


          {/* Note Box */}
          <View style={styles.noteBox}>
            <Text style={styles.noteText}>
              Note: This AI assistant provides general farming guidance. For
              specific issues, consult with local agricultural experts.
            </Text>
          </View>
        </View>
      </ScrollView>


      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { name: "Home", img: require("../assets/home-icon.png") },
          { name: "Products", img: require("../assets/products-icon.png") },
          { name: "Learn", img: require("../assets/learn-icon.webp") },
          { name: "AI Chat", img: require("../assets/chat-icon.png") },
        ].map((item, index) => {
          const isActive = item.name === activeNav;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.navItem, isActive && styles.activeNavItem]}
              onPress={() => setActiveNav(item.name)}
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
  container: { flex: 1, backgroundColor: "#fff" },


  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
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
  appTitle: { fontSize: 18, fontWeight: "bold", color: "#000" },
  appSubtitle: { fontSize: 13, color: "#666" },


  scrollHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  robotImageHeader: { width: 50, height: 50 },
  scrollHeaderTitle: { fontSize: 18, fontWeight: "bold", color: "#000" },
  scrollHeaderSubtitle: { fontSize: 14, color: "#666", marginTop: 2 },


  chatListBox: {
  minHeight: 250,        // ✅ শুরুতেই বড় হবে
  maxHeight: 500,        // ✅ বেশি হলে scroll করবে
  borderWidth: 1,
  borderColor: "#e9ecef",
  borderRadius: 12,
  padding: 12,
  marginBottom: 20,
  backgroundColor: "#f8f9fa",
},


  messageWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 6,
  },
  aiWrapper: { justifyContent: "flex-start" },
  userWrapper: { justifyContent: "flex-end" },


  messageBubble: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    maxWidth: "80%",
  },
  aiBubble: {
    backgroundColor: "#eaf8ea",
    marginLeft: 5,
  },
  userBubble: {
    backgroundColor: "#d1ecf1",
    marginLeft: "auto",
  },
  messageText: { fontSize: 15, lineHeight: 20 },
  aiText: { color: "#155724" },
  userText: { color: "#0c5460" },


  aiProfile: {
    backgroundColor: "#28a745",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
    marginTop: 5,
  },
  aiProfileText: { color: "#fff", fontWeight: "bold", fontSize: 12 },


  aiSection: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e9ecef",
    marginBottom: 15,
  },
  aiHeader: { alignItems: "center", marginBottom: 15 },
  aiTitle: { fontSize: 20, fontWeight: "bold", color: "#2c3e50" },
  questionItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  questionContent: { flex: 1 },
  questionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  questionDescription: { fontSize: 14, color: "#666", lineHeight: 18 },


  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 15,
  },
  textInput: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: "#333",
    minHeight: 50,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: "#28a745",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 10,
  },
  sendButtonText: { color: "white", fontSize: 14, fontWeight: "bold" },


  noteBox: {
    backgroundColor: "#fff3cd",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ffeeba",
  },
  noteText: { fontSize: 12, color: "#856404", textAlign: "center" },


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
    paddingVertical: 6,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  navIcon: { width: 22, height: 22, marginBottom: 4, resizeMode: "contain" },
  activeNavItem: { borderColor: "#28a745", backgroundColor: "#eaf8ea" },
  navText: { fontSize: 12, color: "#333", textAlign: "center" },
  activeNavText: { color: "#28a745", fontWeight: "bold" },
});
