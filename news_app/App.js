import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import news_data from "./assets/new_data.json";
// import news_banner_data from "./assets/news_banner_data.json";
import NewsBanner from "./components/newsBanner";

export default function App() {
  console.log(news_data);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headText}>News App</Text>
        <FlatList
          ListHeaderComponent={() => (
            // <ScrollView horizontal>
            //   {news_banner_data.map((item) => (
            //     <Image style={styles.Image} source={{ uri: item.imageUrl }} />
            //   ))}
            // </ScrollView>
            <NewsBanner />
          )}
          keyExtractor={(item) => item.u_id.toString()}
          data={news_data}
          renderItem={({ item }) => <Text>deneme</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: "#fff",
  },
  headText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  Image: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 5,
  },
});
