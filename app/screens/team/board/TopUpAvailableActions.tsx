import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import { Button, Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import { useMutation } from '@apollo/client';
import { ASSIGN_TOPUP, TOPUPS_ASSIGNED, TOPUPS_AVAILABLES } from '../../../graphql/topup.grapgql';

const TopUpAvailableActions = ({ route, navigation }: any) => {
  const [assignTopup, { loading }] = useMutation(ASSIGN_TOPUP);

  if (route.params) {
    const { topup } = route.params;

    const { id, code, status, createdAt, product, phone } = topup;

    const handleAssign = async () => {
      const result = await assignTopup({
        variables: {
          id: id,
        },
        update: (cache, { data }) => {
          const q = cache.readQuery({
            query: TOPUPS_AVAILABLES,
          });
          console.log('query on chache', q);
          // const { listTopupsAssigned } = cache.readQuery({
          //   query: TOPUPS_ASSIGNED,
          // });
        },
      });

      (await result.data.assignTopup.success) ? navigation.goBack() : alert('Error al asignar');
    };

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
        }}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={{ padding: 16, justifyContent: 'center' }}>
              <Text size={32} fontFamily={'Poppins-Bold'} color={COLORS.fog}>
                {status}
              </Text>
              <Text size={18} fontFamily={'Poppins-Bold'} color={COLORS.gray}>
                {code.toUpperCase()}
              </Text>
              <Text size={36} fontFamily={'Poppins-Bold'} color={COLORS.white}>
                {phone}
              </Text>
              <Text size={32} fontFamily={'Poppins-Bold'} color={COLORS.white}>
                {product?.receiveValue} CUP
              </Text>
              <Text size={24}>{moment.unix(createdAt / 1000).format('lll')}</Text>
            </View>
            <View style={styles.wrappperButton}>
              <Button title="Obtener" onPress={handleAssign} style={styles.button} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return <View />;
};

export default TopUpAvailableActions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: COLORS.background,
    borderRadius: SIZES.m,
    padding: SIZES.m,
  },
  wrappperButton: {
    // flexDirection: 'row',
    paddingBottom: SIZES.xl,
  },
  button: {},
});
