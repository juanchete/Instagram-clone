import {Image, StyleSheet, Text, View} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={sytles.post}>
      {/* Header */}
      <View style={sytles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={sytles.userAvatar}
        />
        <Text style={sytles.userName}>JuanLopezzz</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={sytles.threeDots}
        />
      </View>

      {/* Content  */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={sytles.image}
      />

      {/* Footer */}
      <View style={sytles.footer}>
        <View style={sytles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={sytles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={sytles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={sytles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* LIKES */}
        <Text style={sytles.text}>
          Liked by <Text style={sytles.bold}>lionelmessi</Text> and{' '}
          <Text style={sytles.bold}>27 others</Text>
        </Text>

        {/* Post description */}
        <Text style={sytles.text}>
          <Text style={sytles.bold}>juanlopezzz</Text> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aliquid quidem, molestias vitae
          soluta reprehenderit esse laudantium ullam, a veritatis distinctio sed
          quibusdam alias recusandae animi commodi! Non iure ea doloremque?
        </Text>

        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={sytles.comment}>
          <Text style={sytles.commentText}>
            <Text style={sytles.bold}>juanlopezzz</Text> Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Text>
          <AntDesign name={'hearto'} style={sytles.icon} color={colors.black} />
        </View>

        {/* Posted Date */}
        <Text>19 December, 2024</Text>
      </View>
    </View>
  );
};

const sytles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
  },
});

export default App;
