//
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import staffServices from '../../services/staff';
import { Input, Loading, Header } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import StaffBox from './components/StaffBox';
import { COLORS } from '../../theme';

const StaffScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();

  const getStaff = () => {
    staffServices
      .getStaff()
      .then((res) => {
        console.log('Staff');
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('finally');
        setLoading(false);
      });
  };

  useEffect(() => {
    return getStaff();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <Header
          iconRightName="plus-circle"
          iconRightColor={COLORS.placeHolder}
          iconRightPress={() => {
            navigation.navigate('CreateUser');
          }}
        >
          <Input
            placeholder="Buscar..."
            autoFocus={false}
            iconLeft="magnify"
            iconLeftColor={COLORS.white}
            inputStyle={{
              borderRadius: 56,
              backgroundColor: COLORS.placeHolder,
              color: COLORS.white,
            }}
            style={{ borderRadius: 56, marginHorizontal: 8, backgroundColor: COLORS.placeHolder }}
          />
        </Header>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Loading color={COLORS.fog} />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header
        iconRightName="plus-circle"
        iconRightColor={COLORS.placeHolder}
        iconRightPress={() => {
          navigation.navigate('CreateUser');
        }}
      >
        <Input
          placeholder="Buscar..."
          autoFocus={false}
          iconLeft="magnify"
          iconLeftColor={COLORS.white}
          inputStyle={{
            borderRadius: 56,
            backgroundColor: COLORS.placeHolder,
            color: COLORS.white,
          }}
          style={{ borderRadius: 56, marginHorizontal: 8, backgroundColor: COLORS.placeHolder }}
        />
      </Header>

      <ScrollView>
        <View style={{ marginHorizontal: 8 }}>
          {data &&
            data?.map((item) => {
              return <StaffBox key={item._id} {...item} />;
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default StaffScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.gradient,
  },
});
