import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native-gesture-handler';

import PostCard from './PostCard';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

let posts = require('./temp_post.json');

export default class Feed extends Component {
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

  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

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
            <View style={styles.cardContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={posts}
                renderItem={this.renderItem}
              />
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
  cardContainer: {
    flex: 0.7,
    marginTop: 20,
    marginBottom: -27,
  },
});
