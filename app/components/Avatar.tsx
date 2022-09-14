//import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../theme';

type Props = {
  profile: string;
  size?: number;
};

const Avatar = (props: Props) => {
  const { profile, size = 42 } = props;
  return (
    <View style={styles.container}>
      {profile !== '' && (
        <View
          style={{ ...styles.wrapperAvatar, height: size, width: size, borderRadius: size / 2 }}
        >
          <Image
            source={{ uri: profile }}
            style={{ ...styles.avatar, height: size, width: size }}
          />
        </View>
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperAvatar: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.white,
    marginEnd: 8,
  },
  avatar: {
    resizeMode: 'cover',
  },
});
