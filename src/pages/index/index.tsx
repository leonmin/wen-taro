import Taro, { Config, useEffect } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { selectCount, increment, decrement, incrementAsync } from '@/slices/counter'
import { useSelector, useDispatch } from '@tarojs/redux'
import api from '@/api'


const Index = () => {
  const counter = useSelector(selectCount)
  const dispatch = useDispatch()
  const { login } = api
  useEffect(() => {
    login('params').then(res => {
      if (res.statusCode === 200) {
        console.log('LOGIN SUCCESS')
      } else {
        console.log('LOGIN FAIL', res)
      }
    })
  }, [])
  return (
    <View className='index'>
      <Button className='add_btn' onClick={() => dispatch(increment())}>+1</Button>
      <Button className='dec_btn' onClick={() => dispatch(decrement())}>-1</Button>
      <Button className='dec_btn' onClick={() => dispatch(incrementAsync(2))}>async+2</Button>
      <View><Text>{counter}</Text></View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
} as Config

export default Taro.memo(Index)