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
  TextInput,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_1',
      dropdownHeight: 40,
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
      let preview_images = {
        image_1: require('../assets/image_1.jpg'),
        image_2: require('../assets/image_2.jpg'),
        image_3: require('../assets/image_3.jpg'),
        image_4: require('../assets/image_4.jpg'),
        image_5: require('../assets/image_5.jpg'),
        image_6: require('../assets/image_6.jpg'),
        image_7: require('../assets/image_7.jpg'),
      };
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
                  <Text style={styles.appTitleText}> Create New Post </Text>
                </View>
              </View>
            </View>
            <View style={styles.fieldsContainer}>
              <ScrollView>
                {/*default*/}
                <Image
                  source={preview_images[this.state.previewImage]}
                  style={styles.previewImage}
                />
                <View style={{ height: RFValue(this.state.dropdownHeight)}}>
                  <DropDownPicker
                    items={[
                      //label : display value : value
                      { label: 'Image 1 [default]', value: 'image_1' },
                      { label: 'Image 2', value: 'image_2' },
                      { label: 'Image 3', value: 'image_3' },
                      { label: 'Image 4', value: 'image_4' },
                      { label: 'Image 5', value: 'image_5' },
                      { label: 'Image 6', value: 'image_6' },
                      { label: 'Image 7', value: 'image_7' },
                    ]}
                    defaultValue={this.state.previewImage}
                    open={this.state.dropdownHeight == 170 ? true : false}
                    onOpen={() => {
                      this.setState({ dropdownHeight: 170 });
                    }}
                    onClose={() => {
                      this.setState({ dropdownHeight: 40 });
                    }}
                    style={{
                      backgroundColor: '#13345A',
                      borderWidth: 1,
                      borderColor: 'white',
                    }}
                    textStyle={{
                      color:
                        this.state.dropdownHeight == 170 ? 'black' : 'white',
                      fontFamily: 'Bubblegum-Sans',
                    }}
                    //changing value of image that is being displayed by default
                    onSelectItem={(item) =>
                      this.setState({
                        previewImage: item.value,
                      })
                    }
                  />
                </View>
              </ScrollView>

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(title) =>
                  this.setState({
                    title,
                  })
                }
                placeholder={'Enter Caption....'}
                placeholderTextColor={'#C4C4C4'}
              />
            </View>
            <View style={{ flex: 0.01 }} />
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
  fieldsContainer: {
    flex: 0.66,
    marginHorizontal: 10
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(50),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    marginTop: RFValue(10),
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
});
