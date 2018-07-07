import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Chart from './js/Chart'

var data = {
    step_info: [
        {
            "x":"锁定期1",
            "y":"12.00"
        },
        {
            "x":"锁定期2",
            "y": "12.50"
        },
        {
            "x":"锁定期3",
            "y": "13.00"
        },
        {
            "x":"锁定期4",
            "y": "13.50"
        },
        {
            "x":"锁定期5",
            "y": "14.00"
        },
        {
            "x":"锁定期6",
            "y": "14.50"
        }
    ],
        apr: '12',
        step_apr: '0.5',
        apr_max: '14.5',
        reward_apr: '0',
        first_apr: '0'
}

export default class App extends React.Component {
  render() {
      let data0 = Object.assign({}, data)
      let data1 = Object.assign({}, data);
      data1.first_apr = 1.00
      let data2 = Object.assign({}, data);
      data2.reward_apr = 0.60
    return (
        <ScrollView style={styles.container}>
          <View style={{marginTop: 50}}>

              <Chart data={data0}/>

              <Chart data={data1}/>

              <Chart data={data2}/>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
