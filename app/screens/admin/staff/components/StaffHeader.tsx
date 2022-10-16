import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../../theme';
import { Text } from '../../../../components';
import { useNavigation } from '@react-navigation/native';

export default function StaffHeader(props: any) {
  const { data } = props;
  const navigation = useNavigation();
  const { navigate } = useNavigation<any>();
  const { top } = useSafeAreaInsets();

  const updateUser = () => {
    navigate('UserUpdate', {
      user: data,
    });
  };
  return (
    <View style={{ ...styles.container, marginTop: top }}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon style={{ left: 0 }} color={COLORS.white} name="chevron-left" size={32} />
      </Pressable>
      <Text color={COLORS.white} size={24}>
        Detalles del usuario
      </Text>
      <Icon onPress={updateUser} color={COLORS.white} name="dots-vertical" size={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
