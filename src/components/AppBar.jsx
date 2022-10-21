import Constants from "expo-constants";
import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text fontSize="subheading" fontWeight="bold" color="textSecondary">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
