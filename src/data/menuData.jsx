const menuData = [
  {
    "id": 1,
    "name": "Kadhai Paneer 1",
    "type": "VEG",
    "mealType": "MAIN COURSE",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 260,
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 2,
    "name": "Kadhai Paneer 2",
    "type": "VEG",
    "mealType": "MAIN COURSE",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 270,
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 3,
    "name": "Kadhai Paneer 3",
    "type": "VEG",
    "mealType": "MAIN COURSE",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 280,
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 4,
    "name": "Kadhai Paneer 4",
    "type": "VEG",
    "mealType": "MAIN COURSE",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 290,
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 5,
    "name": "Kadhai Paneer 5",
    "type": "VEG",
    "mealType": "MAIN COURSE",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 300,
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 6,
    "name": "Kadhai Paneer 6",
    "type": "VEG",
    "mealType": "MAIN COURSE",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 310,
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 7,
    "name": "Kadhai Paneer 7",
    "type": "VEG",
    "mealType": "MAIN COURSE",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 320,
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 8,
    "name": "Garlic Bread",
    "type": "VEG",
    "mealType": "Sides",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 330,
    "description": "Buttered and toasted bread with garlic flavor.",
    "image": require('../images/garlic-bread.jpg'),
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": require('../images/garlic-bread.jpg'),
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 9,
    "name": "Chicken Noodles",
    "type": "NON-VEG",
    "mealType": "Starter",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 340,
    "description": "Noodles stir-fried with chicken and vegetables in a savory sauce.",
    "image": require('../images/chicken-noodles.jpg'),
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": require('../images/chicken-noodles.jpg'),
      "isRecommendedForMealSuggestion": true
    }
  },
  {
    "id": 10,
    "name": "Rasmalai",
    "type": "VEG",
    "mealType": "DESSERT",
    "dishType": "CURRY",
    "forParty": true,
    "forChefit": true,
    "price": 350,
    "description": "Milk based sweet dish made with paneer and flavored with cardamom and saffron.",
    "image": require('../images/rasmalai.jpg'),
    "category": {
      "id": 1,
      "name": "North Indian",
      "image": require('../images/rasmalai.jpg'),
      "isRecommendedForMealSuggestion": true
    }
  }
];

export default menuData;
