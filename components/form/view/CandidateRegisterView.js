import React, { useRef, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { FirstRegisterRoute, SecondRegisterRoute } from "../FormRoute";
import FormTab from "../FormTab";

const renderScene = SceneMap({
  first: FirstRegisterRoute,
  second: SecondRegisterRoute,
});

const CandidateRegisterView = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  const [routes] = useState([
    { key: "first", title: "Étape 1" },
    { key: "second", title: "Étape 2" },
  ]);

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={handleIndexChange}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <>
            <View style={{ flexDirection: "row" }}>
              {props.navigationState.routes.map((route, tabIndex) => (
                <FormTab
                  key={route.key}
                  route={route}
                  tabIndex={tabIndex}
                  index={index}
                  onPress={() => setIndex(tabIndex)}
                />
              ))}
            </View>
          </>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default CandidateRegisterView;
