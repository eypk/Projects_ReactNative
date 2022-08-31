import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

const NewsCard = (props) => {
  //   console.log("newscard props", props);
  const news = props.data.item;
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{ uri: news.imageUrl }} />
      <Text style={styles.newsTitle}>{news.title}</Text>
      <Text style={styles.newsDescription}>{news.description}</Text>
      <Text style={styles.newsAuthor}>{news.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, marginTop: 10 },
  Image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
  newsTitle: {
    fontWeight: "bold",
    marginTop: 5,
  },
  newsDescription: {
    textAlign: "justify",
  },
  newsAuthor: {
    textAlign: "right",
    fontStyle: "italic",
  },
});

export default NewsCard;
