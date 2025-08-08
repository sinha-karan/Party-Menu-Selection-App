import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import menuData from '../data/menuData.jsx';

const SummaryScreen = ({ route }) => {
  const { selectedItems } = route.params;

  const selectedDishes = menuData.filter(item =>
    selectedItems.includes(item.id)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Selected Items</Text>

      {selectedDishes.length === 0 ? (
        <Text style={styles.empty}>No items selected.</Text>
      ) : (
        <FlatList
          data={selectedDishes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                style={styles.image}
              />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>₹{item.price ?? 'N/A'}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  empty: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 50 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  image: { width: 80, height: 60, borderRadius: 6 },
  info: { marginLeft: 10 },
  name: { fontSize: 16, fontWeight: '600' },
});

export default SummaryScreen;
