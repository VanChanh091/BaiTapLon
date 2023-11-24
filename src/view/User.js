import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";



const User = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1.7,
          backgroundColor: "#e94721",
        }}
      >
        <View
          style={{
            flex: 0.9,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 12,
          }}
        >
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 12,
            }}
          >
            <Image
              source={require("../img/setting.png")}
              style={{ width: 35, height: 35, resizeMode: "contain" }}
            ></Image>
          </Pressable>

          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 12,
            }}
          >
            <Image
              source={require("../img/cart.png")}
              style={{ width: 35, height: 35, resizeMode: "contain" }}
            ></Image>
          </Pressable>

          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 12,
              paddingRight: 15,
            }}
          >
            <Image
              source={require("../img/message.png")}
              style={{ width: 35, height: 35, resizeMode: "contain" }}
            ></Image>
          </Pressable>
        </View>
        <View style={{ flex: 1.1, flexDirection: "row" }}>
          <View
            style={{
              flex: 3,
              justifyContent: "center",
              paddingLeft: 20,
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../img/user.png")}
              style={{ width: 55, height: 55, resizeMode: "contain" }}
            ></Image>
          </View>
          <View
            style={{
              flex: 7,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 120,
                height: 50,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 3,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 400, color: "#e94721" }}>
                Đăng nhập
              </Text>
            </View>
            <View
              style={{
                width: 120,
                height: 50,
                borderWidth: 1,
                borderColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 3,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 400, color: "white" }}>
                Đăng ký
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 8.3, borderBottomWidth: 1 }}>
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 65,
              flexDirection: "row",
              marginTop: 5,
              borderBottomWidth: 1,
              borderColor: "#e6e6e6",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                width: "20%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../img/blackFriday_S.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              ></Image>
            </View>
            <View
              style={{
                width: "80%",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: 400, fontSize: 17 }}>
                Black Friday & Cyber Monday
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 130,
              flexDirection: "row",
              marginTop: 7,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../img/blackFriday_L.png")}
                style={{ width: 55, height: 55, resizeMode: "contain" }}
              ></Image>
              <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 3 }}>
                Trang
              </Text>
              <Text style={{ fontSize: 13, color: "grey" }}>chính</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../img/timeSale.png")}
                style={{ width: 55, height: 55, resizeMode: "contain" }}
              ></Image>
              <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 3 }}>
                Khung giờ
              </Text>
              <Text style={{ fontSize: 13, color: "grey" }}>săn sale</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../img/shopee.png")}
                style={{ width: 55, height: 55, resizeMode: "contain" }}
              ></Image>
              <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 3 }}>
                Shopee
              </Text>
              <Text style={{ fontSize: 13, color: "grey" }}>live</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../img/sale.png")}
                style={{ width: 55, height: 55, resizeMode: "contain" }}
              ></Image>
              <Text style={{ fontWeight: 600, fontSize: 15, marginTop: 3 }}>
                Sale
              </Text>
              <Text style={{ fontSize: 13, color: "grey" }}>thời trang</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: 160,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/phone.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Đơn nạp thẻ và dịch vụ
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/bill.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 3.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>Đơn mua</Text>
              </View>
              <View
                style={{
                  flex: 4,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 13,
                    color: "grey",
                    paddingRight: 5,
                  }}
                >
                  Xem lịch sử mua hàng
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/food.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Đơn ShopeeFood
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderRightWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("../img/next.png")}></Image>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: 250,
              marginTop: 7,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
                borderColor: "#e6e6e6",
                borderBottomWidth: 1,
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/tienIch.png")}
                  style={{ width: 35, height: 35, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 8.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Tiện ích của tôi
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 3,
                flexDirection: "row",
                borderColor: "#e6e6e6",
                borderBottomWidth: 1,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/viShopee.png")}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                ></Image>
                <Text style={{ fontWeight: 400, fontSize: 14, marginTop: 3 }}>
                  Ví ShopeePay
                </Text>
                <Text
                  style={{ textAlign: "center", color: "grey", marginTop: 3 }}
                >
                  Giảm đến 40.000đ
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/shopeeXu.png")}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                ></Image>
                <Text style={{ fontWeight: 400, fontSize: 14, marginTop: 3 }}>
                  Shopee Xu
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e94721",
                    marginTop: 3,
                    fontWeight: "bold",
                  }}
                >
                  Nhấn để nhận xu mỗi ngày!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/viTraSau.png")}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                ></Image>
                <Text style={{ fontWeight: 400, fontSize: 14, marginTop: 3 }}>
                  SPayLater
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e94721",
                    marginTop: 3,
                    fontWeight: "bold",
                  }}
                >
                  Mua trước trả sau
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderRightWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/voucher.png")}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                ></Image>
                <Text style={{ fontWeight: 400, fontSize: 14, marginTop: 3 }}>
                  Kho Voucher
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#e94721",
                    marginTop: 3,
                    fontWeight: "bold",
                  }}
                >
                  50+ Voucher
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/security.png")}
                  style={{ width: 35, height: 35, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{ flex: 8.5, justifyContent: "center", paddingLeft: 5 }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Bảo hiểm của tôi
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: 500,
              backgroundColor: "white",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/thanThiet.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Khách hàng thân thiết
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/heart.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>Đã thích</Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/followingShop.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Shop đang theo dõi
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderRightWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("../img/next.png")}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/sanThuong.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Săn thưởng Shopee
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/history.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Đã xem gần đây
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/soDu.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Số dư Tk Shopee
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/shopeeXu.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Shopee Xu
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/star.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Đánh giá của tôi
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/tiepThi.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Shopee tiếp thị liên kết
                </Text>
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
          </View>


          <View
            style={{
              width: "100%",
              height: 160,
              flexDirection: "row",
              marginTop: 7,
              backgroundColor: "white",
            }}>
                      <View
            style={{
              width: "100%",
              height: 160,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/settingAccount.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Thiết lập tài khoản
                </Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/centerHelp.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>Trung tâm trợ giúp</Text>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: "#e6e6e6",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/talkWithShopee.png")}
                  style={{ width: 37, height: 37, resizeMode: "contain" }}
                ></Image>
              </View>
              <View
                style={{
                  flex: 7.5,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  Trò chuyện với Shopee
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderRightWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("../img/next.png")}></Image>
              </View>
            </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
});
