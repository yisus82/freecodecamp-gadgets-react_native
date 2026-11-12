import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type AvatarProps = {
  imageUrl: string;
  username: string;
};

const Avatar = ({ imageUrl, username }: AvatarProps) => (
  <Pressable>
    {({ pressed }) => (
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ ...styles.avatarImage, opacity: pressed ? 0.5 : 1 }}
        />
        <Text style={styles.avatarText}>
          Hello, <Text style={styles.usernameText}>{username}</Text>!
        </Text>
      </View>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  avatarText: {
    fontSize: 16,
    color: '#333',
  },
  usernameText: {
    fontWeight: 'bold',
  },
});

export default Avatar;
