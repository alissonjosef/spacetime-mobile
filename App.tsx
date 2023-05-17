import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text } from 'react-native'

import BgBlur from './src/assets/bg-blur.png'

export default function App() {
  return (
    <ImageBackground
      source={BgBlur}
      className="relative flex-1 items-center bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <Text className="font-regular text-5xl text-gray-50"></Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
