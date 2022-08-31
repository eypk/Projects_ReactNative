import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import news_data from "./assets/new_data.json";
import NewsBanner from "./components/newsBanner";
import NewsCard from "./components/newsCard";

export default function App() {
  console.log(news_data);
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>News App</Text>
      <FlatList
        ListHeaderComponent={() => <NewsBanner />}
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={(news_data) => <NewsCard data={news_data} />}
      />
    </View>
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
