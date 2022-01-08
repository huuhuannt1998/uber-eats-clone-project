import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-web';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, {
    localRestaurants,
  } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';



export default function Home() {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs/>
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems 
                    restaurantData={restaurantData}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
