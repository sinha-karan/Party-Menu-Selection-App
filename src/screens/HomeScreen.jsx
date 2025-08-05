import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import menuData from '../data/menuData.jsx';

const HomeScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item.image || item.category?.image }}
          style={styles.image}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.type?.toUpperCase().trim() === 'VEG' ? '🟢 Veg' : '🔴 Non-Veg'}</Text>
        <Text>Price: ₹{item.price ?? 'N/A'}</Text>
        <Text>{item.dishType} • {item.mealType}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.category}>Cuisine: {item.category?.name}</Text>

        <TouchableOpacity
          style={[styles.button, isSelected ? styles.remove : styles.add]}
          onPress={() => toggleItem(item.id)}
        >
          <Text style={styles.buttonText}>{isSelected ? 'Remove' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { padding: 16 },
  card: {
    backgroundColor: '#f1f1f1',
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  image: { width: 180, height: 100, marginBottom: 10, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  category: { fontStyle: 'italic', marginTop: 4, color: '#555' },
  button: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  add: {
    backgroundColor: '#28a745',
  },
  remove: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default HomeScreen;
