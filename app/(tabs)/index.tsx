import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';

// Sample data - replace with your Firebase data later
const data = [
  {
    id: 'dr-pat-gulipat',
    name: 'Dr. Pat Gulipat',
    role: 'Dentist',
    date: 'Sunday, 27 June 2021',
    time: '08:00am - 10:00am',
  },
  {
    id: 'dr-rabiul-akher',
    name: 'Dr. Rabiul Akher',
    role: 'Orthopedi',
  },
  {
    id: 'dr-alex-romanov',
    name: 'Dr. Alex Romanov',
    role: 'Dentist',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#635bff', '#6c47ff']}
        style={styles.header}
      >
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.profileImage} 
        />
        <ThemedText style={styles.name}>Eshlie Alcantaro</ThemedText>
        <ThemedText style={styles.info}>Cupertino - Female, 25</ThemedText>
      </LinearGradient>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Upcoming schedule</ThemedText>
        <View style={styles.scheduleItem}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/40' }} 
            style={styles.providerImage} 
          />
          <View style={styles.scheduleInfo}>
            <ThemedText style={styles.providerName}>Dr. Pat Gulipat</ThemedText>
            <ThemedText style={styles.providerRole}>Dentist</ThemedText>
            <ThemedText style={styles.scheduleDate}>Sunday, 27 June 2021</ThemedText>
            <ThemedText style={styles.scheduleTime}>08:00am - 10:00am</ThemedText>
          </View>
          <Feather name="more-vertical" size={24} color="#ccc" />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Let's find the doctor</ThemedText>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.providerItem}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/40' }} 
                style={styles.providerImage} 
              />
              <View style={styles.providerInfo}>
                <ThemedText style={styles.providerName}>{item.name}</ThemedText>
                <ThemedText style={styles.providerRole}>{item.role}</ThemedText>
              </View>
              <Feather name="more-vertical" size={24} color="#ccc" />
            </View>
          )}
        />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Your daily report</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  info: {
    color: '#f6f9fc',
    fontSize: 16,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#24292e',
    marginBottom: 16,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  providerImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  scheduleInfo: {
    flex: 1,
  },
  providerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#24292e',
    marginBottom: 4,
  },
  providerRole: {
    color: '#657789',
    marginBottom: 8,
  },
  scheduleDate: {
    color: '#657789',
    fontSize: 14,
  },
  scheduleTime: {
    color: '#635bff',
    fontSize: 14,
    fontWeight: '500',
  },
  providerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  providerInfo: {
    flex: 1,
    marginHorizontal: 12,
  },
});