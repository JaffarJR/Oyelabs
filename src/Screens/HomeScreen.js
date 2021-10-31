import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Assurance from "../Components/Assurance";
import Card from "../Components/Card";
import Service from "../Components/Service";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const data = [
  {
    id: "1",
    title: "Kitchen Cleaning",
    image: require("../../assets/kitchenCleaning.png"),
  },
  {
    id: "2",
    title: "Sofa Cleaning",
    image: require("../../assets/sofaCleaning.png"),
  },
  {
    id: "3",
    title: "Full House Cleaning",
    image: require("../../assets/fullHouseCleaning.png"),
  },
  {
    id: "4",
    title: "Garden Cleaning",
    image: require("../../assets/kitchenCleaning.png"),
  },
];
const HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
      {/* Services */}
      <SafeAreaView>
        <View style={{ backgroundColor: "#fff", padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="location-outline" size={24} color="black" />
                <Text style={{ fontSize: 18, marginRight: 10 }}>Home</Text>
                <FontAwesome name="caret-down" size={15} color="black" />
              </View>
              <Text numberOfLines={1}>
                Inner Circle, Connaught Place, New Delhi, Del...
              </Text>
            </View>
            <View>
              <Ionicons name="search-outline" size={28} color="black" />
            </View>
          </View>
        </View>
        <Image
          source={require("../../assets/home.png")}
          style={{ resizeMode: "cover", flex: 1, width: "100%" }}
        />
        <View style={styles.servicesContainer}>
          <Service
            image={require("../../assets/icons/renovation.png")}
            title="Renovation"
          />
          <Service
            image={require("../../assets/icons/handyman.png")}
            title="Handyman"
          />
          <Service
            image={require("../../assets/icons/moving.png")}
            title="Home shifting"
          />
        </View>
        <View style={styles.servicesContainer}>
          <Service
            image={require("../../assets/icons/gardening.png")}
            title="Gardening"
          />
          <Service
            image={require("../../assets/icons/declutter.png")}
            title="Declutter"
          />
          <Service
            image={require("../../assets/icons/surface.png")}
            title="Painting"
          />
        </View>

        {/* Popular Services */}
        <View style={styles.popularServicesContainer}>
          <Text style={{ fontWeight: "600", fontSize: 24 }}>
            Popular Services
          </Text>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => (
              <View style={{ margin: 10 }}>
                <Image source={item.image} />
                <Text style={{ marginTop: 10, fontSize: 14 }}>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>

        {/* Section */}
        <View style={styles.assuranceContainer}>
          <Assurance
            image={require("../../assets/icons/onDemand.png")}
            text="On Demand / Scheduled"
          />
          <Assurance
            image={require("../../assets/icons/verifiedPartners.png")}
            text="Verified Partners"
          />
          <Assurance
            image={require("../../assets/icons/satisfaction.png")}
            text="Satisfaction Guarantee"
          />
          <Assurance
            image={require("../../assets/icons/upfront.png")}
            text="Upfront Pricing"
          />
          <Assurance
            image={require("../../assets/icons/trained.png")}
            text="Highly Trained Professionals"
          />
        </View>

        {/* finalContainer */}
        <View style={styles.whyChooseContainer}>
          <View style={{ padding: 20 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 20,
                alignItems: "center",
              }}
            >
              <Image source={require("../../assets/icons/security.png")} />
              <Text
                style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}
              >
                Why Choose Us
              </Text>
            </View>
            <Card
              image={require("../../assets/icons/quality.png")}
              title="Quality Assurance"
              text="Your satisfaction is guaranteed"
            />
            <Card
              image={require("../../assets/icons/fixedPrices.png")}
              title="Fixed Prices"
              text=" No hidden costs, all the prices are known and fixed before
            booking"
            />
            <Card
              image={require("../../assets/icons/hasselFree.png")}
              title="Hassel free"
              text="Convenient, time saving and secure"
            />
          </View>
          <View style={{ backgroundColor: "#262626", marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                padding: 20,
                alignSelf: "center",
              }}
            >
              Best-in-Class Safety Measures
            </Text>
          </View>
        </View>

        {/*  End Section */}
        <View style={styles.endContainer}>
          <View style={styles.endContentContainer}>
            <Image source={require("../../assets/icons/mask.png")} />
            <View style={styles.endTextContainer}>
              <Text style={styles.endTextPrimary}>
                Usage of masks, gloves & Sanitisers
              </Text>
              <Text style={styles.endTextSecondary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dictumst nullam mauris malesuada in. Eget in condimentum
                porttitor nec tristique penatibus ipsum nunc.
              </Text>
            </View>
          </View>
          <View style={styles.endContentContainer}>
            <Image source={require("../../assets/icons/lowContact.png")} />
            <View style={[styles.endTextContainer, { marginLeft: 30 }]}>
              <Text style={styles.endTextPrimary}>
                Low-contact Service Experience
              </Text>
              <Text style={styles.endTextSecondary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dictumst nullam mauris malesuada in. Eget in condimentum
                porttitor nec tristique penatibus ipsum nunc.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: 300,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>HASSLE FREE</Text>
          <Text style={styles.text}>QUALITY SERVICE</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  servicesContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  popularServicesContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 10,
  },
  assuranceContainer: {
    backgroundColor: "#fff",
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  whyChooseContainer: { backgroundColor: "#fff", marginTop: 20 },
  endContainer: { backgroundColor: "#F7FBFF", flex: 1 },
  endContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  endTextContainer: { flexShrink: 1, marginLeft: 20 },
  endTextPrimary: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  endTextSecondary: { fontSize: 14, color: "#7E7E7E", lineHeight: 20 },
  text: { color: "#C4C4C4", fontSize: 20, letterSpacing: 1 },
});
