import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { render } from "react-dom";

const listNotification = [
  {
    image: require("../img/khuyenMai.png"),
    title: "Khuyến Mãi",
    status: "Mua cả thế giới chỉ với 9.000đ",
  },
  {
    image: require("../img/live.png"),
    title: "Live & Video",
    status: "12h Black Friday",
  },
  {
    image: require("../img/taiChinh.png"),
    title: "Thông Tin Tài Chính",
    status: "Siêu Voucher cập bếp tối thứ 6 đen tối",
  },
  {
    image: require("../img/updateShopee.png"),
    title: "Cập nhật Shopee",
    status: "Hãy đánh giá và chia sẻ cảm nhận của bạn",
  },
  {
    image: require("../img/reward.png"),
    title: "Giải thưởng Shopee",
    status: "Cơ hội nhận thêm hàng triệu Shopee Voucher",
  },
];

const Notification = () => {
  const [data, setData] = useState(listNotification);

  const renderData = ({ item }) => {
    return(
      <TouchableOpacity
      style={{
        flex: 1, 
        // borderBottomWidth: 1,
        flexDirection: "row",
        // borderColor: "#e6e6e6",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.image}
          style={{ width: 50, height: 50, resizeMode: "contain" }}
        ></Image>
      </View>
      <View style={{ flex: 7 }}>
        <View
          style={{
            flex: 1,
            paddingLeft: 10,
            paddingTop: 12,
          }}
        >
          <Text style={{ fontWeight: 500, fontSize: 18 }}>{item.title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontWeight: 400, fontSize: 14 }}>{item.status}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../img/next.png")}></Image>
      </View>
    </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 350,
          // marginTop: 12,
          backgroundColor: "white",
        }}
      >
        <FlatList 
          data={data}
          renderItem={renderData}
          // style={{marginTop: 12, }}
        />
      </View>
      <StatusBar />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
});
