import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

const AdminDashboard = () => {
  const router = useRouter();

  const handleAddUser = () => {
    router.push("/addUser"); // توجه إلى صفحة إضافة مستخدم جديد
  };

  const handleViewReports = () => {
    router.push("/reports"); // توجه إلى صفحة التقارير
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Admin Dashboard</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.button} onPress={handleAddUser}>
          <Text style={styles.buttonText}>Add New User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleViewReports}>
          <Text style={styles.buttonText}>View Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: "#001D75",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  body: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#001D75",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AdminDashboard;
