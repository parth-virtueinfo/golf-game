import React from "react";
import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const GameCard = ({ game }) => {
  return (
    <View style={styles.card}>
      {/* Header with Image */}
      <ImageBackground source={require("../../assets/images/header.png")} style={styles.header}>
      <View style={styles.headerColumn}>
      <Text style={styles.playType}>{game.type} →</Text>
      <Text style={styles.course}>{game.course}</Text>
      </View>
      <View style={styles.headerColumn}>
              <Text style={styles.holes}>{game.holes}</Text>
              <View style={styles.rowOnly}>

              <FontAwesome name="users" size={16} /> }} />
              <Text style={styles.playerCount}>5/6 players</Text>
              </View>
              </View>
      </ImageBackground>

      {/* Date & Time */}
      <View style={styles.row}>
        <Text style={styles.date}>{game.date}</Text>
        <Text style={styles.time}>{game.time}</Text>
      </View>

      {/* Buy-in & Return */}
      <View style={styles.buyInRow}>
        <View>
          <Text style={styles.buyInLabel}>BUYIN</Text>
          <Text style={styles.buyInAmount}>${game.buyIn}</Text>
        </View>
        <View style={styles.returnBox}>
          <Text style={styles.returnText}>${game.returnAmount} RETURN</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal:4,
    shadowColor: "#000",
      shadowOpacity: 0.2,  // Increased for better visibility
      shadowOffset: { width: 2, height: 4 }, // More depth
      shadowRadius: 6,  // Softer shadow edges

      // Android Shadow
      elevation: 4,
  },
  header: {
    width: "100%",
    height: 70, // Adjust based on your image
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
  },
   headerColumn: {
       flexDirection: "column",},
  playType: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    marginTop:5,
    paddingHorizontal:18,
  },
  holes: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal:16,
    fontSize: 24,
  },
  playerCount: {
      fontSize: 14,
      color: "white",
      opacity: 0.9,
      marginRight:10,
      marginLeft:5,
      marginVertical: 3,
    },
  course: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
    paddingHorizontal: 16,
  },
   rowOnly: {
       marginLeft:14,
      flexDirection: "row",
      alignItems: "center",
    },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  date: {
    fontSize: 20,
    padding:12,
        fontWeight: "bold",
        marginTop:10
  },
  iconSmall: { width: 20, height: 20, marginHorizontal: 5 },
  time: {
    fontSize: 28,
    padding:12,
    fontWeight: "bold",
    marginTop:10,
  },
  buyInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buyInLabel: {
    fontSize: 12,
    color: "#1A1F08",
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
  buyInAmount: {
    fontSize: 16,
    paddingHorizontal: 16,
    fontWeight: "bold",
    marginBottom:10
  },
  returnBox: {
    backgroundColor: "#000",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom:5,
    marginRight:10
  },
  returnText: {
      color: "#C5FF47",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GameCard;
