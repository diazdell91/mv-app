import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Text } from '../../../../components';
import { useNavigation } from '@react-navigation/native';

export default function ListItem(props: any) {
  const { item } = props;
  const { navigate } = useNavigation<any>();
  let icon = 'dots-horizontal-circle';

  if (item.__typename === 'Topup') {
    icon = 'phone-dial-outline';
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 12,
          alignItems: 'center',
        }}
      >
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 4 }}>
              <Icon name={icon} size={24} color={COLORS.gray} />
            </View>
            <View>
              <Text color={COLORS.black}>{item.__typename}</Text>
              <Text h4 color={COLORS.black}>
                Code: <Text h4> {item.code}</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.itemOptions}>
          <Icon
            onPress={() => {
              navigate('ProductDetails');
            }}
            style={styles.itemOption}
            name="account-details-outline"
            size={24}
            color={COLORS.gray}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemOptions: {
    flexDirection: 'row',
  },
  itemOption: {
    marginLeft: 2,
  },
});
