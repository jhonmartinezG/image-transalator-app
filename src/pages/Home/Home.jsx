import { View, Text, SafeAreaView } from 'react-native'
import CameraButton from '../../components/common/CameraButton/CameraButton'
import InputSearch from '../../components/common/InputSearch/InputSearch'
import EmptyState from '../../components/EmptyState/EmptyState'

export default function Home() {

  const arrayImages = []

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      {
        arrayImages.length < 1 ? <>
        <InputSearch />
        <EmptyState />
        <CameraButton />
         </> : <><View><Text>Future image list</Text></View></>
      }
      
    </SafeAreaView>
  )
}


