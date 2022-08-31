// import React from "react";
import { ScrollView } from "react-native";
import news_banner_data from "./assets/news_banner_data.json";

const NewsBanner = () => {
  return (
    <ScrollView horizontal>
      {news_banner_data.map((item) => (
        <Image style={styles.Image} source={{ uri: item.imageUrl }} />
      ))}
    </ScrollView>
  );
};

export default NewsBanner;
