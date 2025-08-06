import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput
} from 'react-native';
import menuData from '../data/menuData.jsx';

const categories = ['Starter', 'Main Course', 'Dessert', 'Sides'];

const HomeScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Main Course');
  const [expandedCuisine, setExpandedCuisine] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null); // 'VEG' or 'NON-VEG'
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleCuisineToggle = (cuisineName) => {
    setExpandedCuisine(prev =>
      prev === cuisineName ? null : cuisineName
    );
  };

  const filteredMenu = menuData.filter(item =>
    item.mealType?.toLowerCase().includes(activeCategory.toLowerCase()) &&
    (!typeFilter || item.type?.toUpperCase() === typeFilter) &&
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cuisines = [...new Set(filteredMenu.map(item => item.category?.name))];

  const renderDishCard = (item) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <View key={item.id} style={styles.card}>
       <Image
        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
        style={styles.image}
      />

        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.type?.toUpperCase() === 'VEG' ? '🟢 Veg' : '🔴 Non-Veg'}</Text>
        <Text>₹{item.price ?? 'N/A'}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity
          style={[styles.button, isSelected ? styles.remove : styles.add]}
          onPress={() => toggleItem(item.id)}
        >
          <Text style={styles.buttonText}>
            {isSelected ? 'Remove' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* 🔍 Search Bar */}
      <TextInput
        placeholder="Search dishes..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />

      {/* 🟢🔴 Veg / Non-Veg Filter */}
      <View style={styles.typeFilterContainer}>
        <TouchableOpacity
          style={[styles.typeButton, typeFilter === 'VEG' && styles.activeType]}
          onPress={() => setTypeFilter(typeFilter === 'VEG' ? null : 'VEG')}
        >
          <Text style={styles.typeButtonText}>🟢 Veg</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, typeFilter === 'NON-VEG' && styles.activeType]}
          onPress={() => setTypeFilter(typeFilter === 'NON-VEG' ? null : 'NON-VEG')}
        >
          <Text style={styles.typeButtonText}>🔴 Non-Veg</Text>
        </TouchableOpacity>
      </View>

      {/* 📌 Top Category Tabs */}
      <View style={styles.categoryTabs}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            onPress={() => setActiveCategory(category)}
            style={[
              styles.tab,
              activeCategory === category && styles.activeTab
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeCategory === category && styles.activeTabText
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🍱 Cuisine Sections */}
      {cuisines.map(cuisine => {
        const cuisineDishes = filteredMenu.filter(
          item => item.category?.name === cuisine
        );

        return (
          <View key={cuisine} style={styles.cuisineSection}>
            <TouchableOpacity
              onPress={() => handleCuisineToggle(cuisine)}
              style={styles.cuisineHeader}
            >
              <Text style={styles.cuisineTitle}>{cuisine}</Text>
              <Text style={styles.arrow}>
                {expandedCuisine === cuisine ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>

            {expandedCuisine === cuisine && (
              <FlatList
                data={cuisineDishes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => renderDishCard(item)}
                scrollEnabled={false}
              />
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  typeFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    gap: 12,
  },
  typeButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  activeType: {
    backgroundColor: '#FFA726',
  },
  typeButtonText: {
    fontWeight: '600',
    color: '#333',
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  activeTab: {
    backgroundColor: '#42a5f5',
  },
  tabText: {
    color: '#555',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  cuisineSection: {
    marginBottom: 20,
  },
  cuisineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  cuisineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 18,
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginVertical: 10,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 110,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontStyle: 'italic',
    color: '#666',
    marginVertical: 4,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
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
