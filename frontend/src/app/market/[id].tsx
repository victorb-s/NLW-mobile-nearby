import React, { useEffect, useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { Redirect, router, useLocalSearchParams } from 'expo-router'

import { Loading } from '@/components/loading'
import { Cover } from '@/components/market/cover'
import { Details, PropsDetails } from '@/components/market/details'

import { api } from '@/services/api'

type DataProps = PropsDetails & {
  cover: string
}

const Market = () => {
  const [data, setData] = useState<DataProps>()
  const [isLoading, setIsLoading] = useState(true)
  const params = useLocalSearchParams<{ id: string }>()

  async function fetchMarket(){
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data);
      
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível carregar os dados", [{ text: "OK", onPress: () => router.back() }])
      
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMarket()
  }, [params.id])

  if(isLoading) return <Loading />

  if(!data) return <Redirect href='/home' />

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={data?.cover} />
      <Details data={data} />
    </View>
  )
}

export default Market