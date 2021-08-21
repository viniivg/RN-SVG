import React from 'react'
import { View, Text } from 'react-native'

import IconDate from './assets/icon-date.svg'
import IconHome from './assets/icon-home.svg'

const App = () => {
  return(
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center' }}>
      <Text>Hello Word!</Text>
      <IconDate fill="#212121" width={70} height={70} />
      <IconHome color="#212121" width={70} height={70} />
    </View>
  )
}

export default App