import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Coin} from '../interface/coin.type';
import {getAllCoins} from '../services/coin';

interface ListCoinProps {
  navigation: NavigationProp<ParamListBase>;
}

const ListCoin: React.FC<ListCoinProps> = ({navigation}) => {
  const [data, setData] = useState<Coin[]>([]);

  useEffect(() => {
    getAllCoins().then(res => {
      setData(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top 10 Coins</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.coinItem}
            onPress={() => navigation.navigate('detailCoin', {coin: item.id})}>
            <Image source={{uri: item.image}} style={styles.coinImage} />
            <View style={styles.coinDetails}>
              <Text style={styles.coinName}>{item.name}</Text>
              <Text style={styles.coinSymbol}>{item.symbol}</Text>
            </View>
            <Text style={styles.coinSymbol}>${item.current_price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  coinItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  coinImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  coinDetails: {
    flex: 1,
  },
  coinName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  coinSymbol: {
    fontSize: 16,
    color: '#555',
  },
});

export default ListCoin;
