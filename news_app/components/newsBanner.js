// import React from "react";
import { ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import news_banner_data from "news_app/assets/news_banner_data.json";

const NewsBanner = () => {
  return (
    <ScrollView horizontal>
      {news_banner_data.map((item) => (
        <Image style={styles.Image} source={{ uri: item.imageUrl }} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 5,
  },
});

export default NewsBanner;
