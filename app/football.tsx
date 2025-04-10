import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Player {
  name: string;
  team: string;
  country: string;
}

const Football: React.FC = () => {
  const router = useRouter();
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Call API to fetch players
  const fetchPlayers = async (): Promise<void> => {
    const url =
      "https://free-api-live-football-data.p.rapidapi.com/football-players-search?search=m";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4518f3a773msh3a8b7432ae05e5cp122029jsnf7f79dd4fcfc",
        "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setPlayers(result.players || []);
    } catch (error) {
      console.error("Error fetching players:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/thefillbac.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Football Players</Text>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="log-out-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Search Results</Text>
            {loading ? (
              <ActivityIndicator size="large" color="#0a2463" />
            ) : players.length === 0 ? (
              <Text style={{ color: "#333", fontSize: 16 }}>
                No players found.
              </Text>
            ) : (
              players.map((player, index) => (
                <View key={index} style={styles.matchCard}>
                  <Text style={styles.matchTitle}>{player.name}</Text>
                  <Text style={styles.matchDetails}>Team: {player.team}</Text>
                  <Text style={styles.matchTime}>
                    Country: {player.country}
                  </Text>
                </View>
              ))
            )}
          </View>
        </ScrollView>

        {/* Bottom Nav */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/")}
          >
            <Ionicons name="person" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/football")}
          >
            <Ionicons name="football" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/dashboard")}
          >
            <Ionicons name="home" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0a2463",
  },
  matchCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  matchTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a2463",
  },
  matchDetails: {
    fontSize: 16,
    marginTop: 8,
  },
  matchTime: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#0a2463",
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    padding: 10,
  },
});

export default Football;
