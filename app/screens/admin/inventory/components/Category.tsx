//import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { RadioButton, Text } from '../../../../components';
import { COLORS } from '../../../../theme';

type Props = {
  selected: boolean;
  onSelect: (service: any) => void;
  name: string;
};

const Category = (props: Props) => {
  const { selected = false, onSelect, name } = props;

  return (
    <Pressable
      onPress={() => onSelect(name)}
      style={{ ...styles.container, borderColor: COLORS.secondary }}
    >
      <View style={styles.content}>
        <RadioButton selected={selected} />
        <View style={styles.category}>
          <Text align="center" size={14} fontFamily={'Poppins-Bold'}>
            {name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    flex: 1,
    marginStart: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
