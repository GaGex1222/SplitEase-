import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MotiViewConfigured } from './MotiElementsConfigured'
const FriendsDebtView = () => {
  return (
      <ScrollView className="w-full max-h-[80vh] mt-4 px-8">
        {bills.map((bill, index) => (
            <MotiViewConfigured key={index} animationDelay={index * 100}>
                <TouchableOpacity 
                    key={bill.id} 
                    className="bg-blue-500 mb-4 p-4 rounded-lg shadow-xl"
                    onPress={() => console.log(`Clicked on ${bill.friend}'s bill`)}
                >
                    <Text className="text-white text-lg font-bold">{bill.friend}</Text>
                    <Text className="text-white">{bill.description}</Text>
                    <Text className="text-white font-semibold mt-2">{bill.amount}</Text>
                </TouchableOpacity>
            </MotiViewConfigured>
        ))}
      </ScrollView>
  )
}

export default FriendsDebtView