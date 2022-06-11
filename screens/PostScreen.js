import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class PostScreen extends Component {
  constructor(props) {
    super();
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
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.titleContainer}>
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require('../assets/logo.png')}
                    style={styles.iconImage}></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}> Spectagram </Text>
                </View>
              </View>
            </View>

            <View style={styles.postContainer}>
              <ScrollView style={styles.postCard}>
                <View style={styles.titleTextContainer}>
                  <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                      <Image
                        source={require('../assets/profile_img.png')}
                        style={styles.profileImage}></Image>
                    </View>
                    <View style={styles.authorNameContainer}>
                      <Text style={styles.authorNameText}>
                        {this.props.route.params.post.author}
                      </Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={require('../assets/image_6.jpg')}
                  style={styles.image}></Image>

                <View style={styles.dataContainer}>
                  <View style={styles.titleTextContainer}>
                    <Text style={styles.postDateText}>
                      {this.props.route.params.post.created_on}
                    </Text>
                    <Text
                      style={[
                        styles.postDateText,
                        { marginVertical: RFValue(-2), fontSize: RFValue(22) },
                      ]}>
                      {this.props.route.params.post.caption}
                    </Text>
                  </View>
                </View>
                <View style={styles.actionContainer}>
                  <View style={styles.likeButton}>
                    <Ionicons
                      name={'heart'}
                      size={RFValue(30)}
                      color={'white'}
                    />
                    <Text style={styles.likeText}>12k</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  titleContainer: {
    flex: 0.13,
    justifyContent: 'center',
    backgroundColor: 'rgba(24, 43, 100, 0.65)',
    marginTop: -5,
  },
  appTitle: {
    flex: 0.78,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  postContainer: {
    flex: 1,
  },
  postCard: {
    margin: RFValue(20),
    backgroundColor: '#071B48',
    borderRadius: RFValue(20),
  },
  image: {
    marginTop: RFValue(20),
    borderRadius: RFValue(30),
    resizeMode: 'cover',
    width: '80%',
    alignSelf: 'center',
    height: RFValue(200),
  },
  dataContainer: {
    flexDirection: 'row',
    marginVertical: RFValue(10),
    marginHorizontal: RFValue(40),
  },
  titleTextContainer: {
    flex: 1,
  },
  authorContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: RFValue(15),
  },
  authorImageContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    flex: 0.2,
    marginLeft: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: 'cover',
    borderRadius: RFValue(10),
  },
  authorNameContainer: {
    flex: 0.85,
    justifyContent: 'center',
  },
  authorNameText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(20),
    color: 'white',
  },
  postDateText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(15),
    color: 'white',
    marginVertical: RFValue(10),
    marginHorizontal: RFValue(5),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
