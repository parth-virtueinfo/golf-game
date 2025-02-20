import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";
import GameCard from "./adapter/GameCard";

const screenWidth = Dimensions.get("window").width;
const Tab = createBottomTabNavigator();

const GameLobbyScreen = () => {
  const [buyIn, setBuyIn] = useState(200);
  const [selectedOption, setSelectedOption] = useState("start");
  const suggestedGames = [
      {
        id: "1",
        type: "Stroke Play",
        course: "Dallas National Golf Club",
        holes: "18 holes",
        players: "5/6 players",
        date: "12 January 2025",
        time: "3:30PM",
        buyIn: 250,
        returnAmount: 4000,
      },
      {
        id: "2",
        type: "Stroke Play",
        course: "Dallas National Golf Club",
        holes: "18 holes",
        players: "5/6 players",
        date: "12 January 2025",
        time: "3:30PM",
        buyIn: 250,
        returnAmount: 4000,
      }
    ];

  return (
    <View style={{ flex: 1 }}>

    <View style={styles.container}>

    {/* Header */}
            <View style={styles.headerContainer}>
              <Image source={require("../assets/images/logo.png")} style={styles.logo} />
              <View style={styles.balanceContainer}>
                <Image source={require("../assets/images/notification.png")} style={styles.iconSmall} />
                <Image source={require("../assets/images/currency.png")} style={styles.iconSmall} />
                <Text style={styles.balanceText}> 2,200</Text>
              </View>
            </View>

             {/* Toggle Buttons */}
                    <View style={styles.toggleContainer}>
                      <TouchableOpacity
                        style={[styles.toggleButton, selectedOption === "start" ? styles.selectedButton : styles.unselectedButton]}
                        onPress={() => setSelectedOption("start")}
                      >
                        <Image source={require("../assets/images/start.png")} style={[styles.iconSmall, { tintColor: selectedOption === "start" ? "#fff" : "#000" }]} />
                        <Text style={[styles.toggleText, selectedOption === "start" ? styles.selectedText : styles.unselectedText]}>
                          START
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[styles.toggleButton, selectedOption === "find" ? styles.selectedButton : styles.unselectedButton]}
                        onPress={() => setSelectedOption("find")}
                      >
                        <FontAwesome name="search" size={16} color={selectedOption === "find" ? "#fff" : "#000"} />
                        <Text style={[styles.toggleText, selectedOption === "find" ? styles.selectedText : styles.unselectedText]}>
                          FIND
                        </Text>
                      </TouchableOpacity>
                    </View>

     <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
       {selectedOption === "start" ? (
         <>
           {/* Game Lobby Configuration */}
           <Text style={styles.sectionTitle}>CONFIGURE {"\n"}YOUR GAME {"\n"}LOBBY.</Text>

           <View style={styles.optionContainer}>
             <Text style={styles.optionLabel}>SELECT COURSE</Text>
             <Text style={styles.optionValue}>Dallas National Golf Club</Text>
           </View>
           <View style={styles.optionContainer}>
             <Text style={styles.optionLabel}>PLAY DATE</Text>
             <Text style={styles.optionValue}>12 January 2025 - 3:30pm</Text>
           </View>
           <View style={styles.optionContainer}>
             <Text style={styles.optionLabel}>PLAYER SIZE</Text>
             <Text style={styles.optionValue}>6 players</Text>
           </View>

           {/* Buy-In Configuration */}
           <View style={styles.buyInContainer}>
             <Text style={styles.buyInLabel}>BUY-IN</Text>
             <View style={styles.buyInSliderRow}>
               <Slider
                 style={styles.buyInSlider}
                 minimumValue={0}
                 maximumValue={800}
                 step={50}
                 value={buyIn}
                 onValueChange={(value) => setBuyIn(value)}
                 minimumTrackTintColor="#3F51B5"
                 maximumTrackTintColor="#E0E0E0"
                 thumbTintColor="#3F51B5"
               />
               <View style={styles.buyInValueWrapper}>
                 <View style={styles.buyInDollarBackground}>
                   <Text style={styles.buyInDollarSign}>$</Text>
                 </View>
                 <Text style={styles.buyInValueText}>{buyIn}</Text>
               </View>
             </View>
           </View>

           {/* Play Type Selection */}
           <Text style={styles.optionLabel}>PLAY TYPE</Text>
           <View style={styles.playTypeContainer}>
             <TouchableOpacity style={styles.optionButton}>
               <Text>STROKE</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.selectedOptionButton}>
               <Text style={styles.selectedText}>MATCH</Text>
             </TouchableOpacity>
           </View>

           {/* Round Length Selection */}
           <Text style={styles.optionLabel}>ROUND LENGTH</Text>
           <View style={styles.playTypeContainer}>
             <TouchableOpacity style={styles.optionButton}>
               <Text>9 HOLES</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.selectedOptionButton}>
               <Text style={styles.selectedText}>18 HOLES</Text>
             </TouchableOpacity>
           </View>

           {/* Create Lobby Button */}
           <TouchableOpacity style={styles.createLobbyButton}>
             <Text style={styles.buttonText}>Create Lobby (${buyIn})</Text>
           </TouchableOpacity>
           <View style={{ height: 80 }} />
         </>
       ) : (
         <View>

           <Text style={styles.sectionTitle}>SUGGESTED {"\n"}GAMES.</Text>
           <FlatList
                 data={suggestedGames}
                 keyExtractor={(item) => item.id}
                 renderItem={({ item }) => <GameCard game={item} />}
               />
         </View>
       )}
     </ScrollView>

    </View>
    </View>
  );
};

// ✅ Bottom Navigation for Game Lobby
const GameLobby = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={GameLobbyScreen} options={{ tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} /> }} />
      <Tab.Screen name="My Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} /> }} />
      <Tab.Screen name="Events" component={EventsScreen} options={{ tabBarIcon: ({ color, size }) => <FontAwesome name="calendar" size={size} color={color} /> }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} /> }} />
    </Tab.Navigator>
  );
};

// ✅ Styles
const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#FFF", flex: 1 },
  headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 },
  logo: { width: 120, height: 60 },
  balanceContainer: { flexDirection: "row", alignItems: "center" },
  balanceText: { fontSize: 18, fontWeight: "bold" },
  iconSmall: { width: 20, height: 20, marginHorizontal: 5 },
  toggleContainer: { flexDirection: "row", backgroundColor: "#C4F40A", borderRadius: 15, padding: 4, width: "100%", alignItems: "center",height:50 },
  toggleButton: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", paddingVertical: 10, borderRadius: 15,height:40 },
  selectedButton: { backgroundColor: "#1A1A0D" },
  unselectedButton: { backgroundColor: "transparent" },
  selectedText: { color: "#fff" },
  unselectedText: { color: "#000" },
  optionContainer: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5, backgroundColor: "#F9F9F9" },
  optionLabel: { fontSize: 14, fontWeight: "bold" },
  createLobbyButton: { backgroundColor: "blue", padding: 15, borderRadius: 25, marginTop: 20, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "bold" },
  sectionTitle: { fontSize: 34, fontWeight: "bold", marginBottom: 20,marginTop:20, textAlign: "start",backgroundColor: "#F9F9F9" },
  buyInContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 },
    buyInValue: { fontSize: 18, fontWeight: "bold" },
    playTypeContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
    optionButton: { backgroundColor: "lightgray", padding: 10, borderRadius: 5, flex: 1, alignItems: "center" },
      selectedOptionButton: { backgroundColor: "black", padding: 10, borderRadius: 5, flex: 1, alignItems: "center" },
      selectedText: { color: "white", fontWeight: "bold" },

});

const ProfileScreen = () => <View><Text>Profile Screen</Text></View>;
const EventsScreen = () => <View><Text>Events Screen</Text></View>;
const SettingsScreen = () => <View><Text>Settings Screen</Text></View>;

export default GameLobby;
