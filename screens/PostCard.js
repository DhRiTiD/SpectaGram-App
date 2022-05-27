import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class PostCard extends Component {
   constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                            
                        </View>
                        
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:10
    },
    cardContainer: {
        backgroundColor: "#071B48",
       
    },
    authorContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: RFValue(15),
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
      flex: 0.2,
      marginLeft: RFValue(5),
    justifyContent: "center",
    alignItems: "center",width:RFValue(30),
    height: RFValue(30),
    resizeMode: "cover", borderRadius: RFValue(10),
    },
    authorNameContainer: {
        flex: 0.85,
        justifyContent: "center"
    },
    authorNameText: {
        color: "white",
        fontSize: RFValue(20),
    },
    postImage: {
        marginTop: RFValue(20),
        borderRadius: RFValue(30),
        resizeMode: "cover",
        width: "80%",
        alignSelf: "center",
        height: RFValue(250)
    },
    captionContainer: {},
    captionText: {
        fontSize: RFValue(19),
        color: "white",
        paddingTop: RFValue(10),
        paddingLeft: RFValue(18)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});
