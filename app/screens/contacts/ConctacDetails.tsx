import { StyleSheet, View } from 'react-native';
import DashedLine from 'react-native-dashed-line';
import { Avatar, Button, IconButtom, Text } from '../../components';
import { COLORS } from '../../theme';

const ConctacDetails = ({ route, navigation }: any) => {
  const { params } = route;
  const { name, description, type, phone } = params;
  return (
    <View style={styles.container}>
      <Avatar />

      <View style={{ alignItems: 'center' }}>
        <Text>{name}</Text>
        <Text size={14}>{description}</Text>
        <Text size={14}>{type}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingHorizontal: 32,
          marginVertical: 16,
        }}
      >
        <IconButtom name={'phone'} />
        <IconButtom name={'message'} />
        <IconButtom name={'email'} />
      </View>
      <DashedLine
        dashLength={2}
        dashThickness={1}
        dashColor={COLORS.gray}
        style={{ paddingVertical: 8, opacity: 0.4 }}
      />
      <View style={{ alignItems: 'center' }}></View>
      <Button
        title="Administrar servicios"
        onPress={() => {
          navigation.navigate('AddService');
        }}
      />
    </View>
  );
};

export default ConctacDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.white,
  },
});
