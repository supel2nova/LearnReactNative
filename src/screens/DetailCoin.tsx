import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Coin} from '../interface/coin.type';
import {getCoinById} from '../services/coin';

interface DetailCoinParamList extends RouteProp<ParamListBase, 'detailCoin'> {
  params: {
    coin?: string;
  };
}

interface DetailCoinProps {
  navigation: NavigationProp<ParamListBase>;
  route: DetailCoinParamList;
}

const DetailCoin: React.FC<DetailCoinProps> = ({navigation, route}) => {
  const [data, setData] = useState<Coin | null>(null);

  useEffect(() => {
    getCoinById(route.params.coin as string).then(res => {
      setData(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{uri: data?.image}} style={styles.image} />
      <Text style={styles.text}>{data?.name}</Text>
      <Text style={styles.text}>{data?.symbol}</Text>
      <Text style={styles.text}>${data?.current_price}</Text>
      <Button
        title="Go to List Coin"
        onPress={() => navigation.navigate('listCoin')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default DetailCoin;
