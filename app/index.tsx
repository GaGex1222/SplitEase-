import { View, Text, Pressable, TouchableOpacity, ScrollView, Modal, Touchable } from 'react-native';
import React, { useState } from 'react';
import "../global.css";
import { MotiViewConfigured } from '@/components/MotiElementsConfigured';

const Index = () => {
  const [activeTab, setActiveTab] = useState<"Debts" | "Splits">('Debts');
  const [modalVisible, setModalVisible] = useState(false);

  const bills = [
    { id: 1, friend: 'John', amount: '$50', description: 'Dinner at a restaurant' },
    { id: 2, friend: 'Alice', amount: '$30', description: 'Shared groceries' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
    { id: 3, friend: 'Mike', amount: '$80', description: 'Concert tickets' },
  ];

  return (
    <View className="flex-1 justify-start items-center bg-white">
      <View className="flex-row justify-between w-full px-20">
            <TouchableOpacity onPress={() => setActiveTab('Splits')} className="p-4">
            <Text className={`text-lg ${activeTab === 'Splits' ? 'font-bold' : 'text-gray-500'}`}>
                Bill Splits
            </Text>
            {activeTab === 'Splits' && <View className="h-1 rounded-full bg-blue-500 mt-1" />}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setActiveTab('Debts')} className="p-4">
            <Text className={`text-lg ${activeTab === 'Debts' ? 'font-bold' : 'text-gray-500'}`}>
                Friends Debts
            </Text>
            {activeTab === 'Debts' && <View className="h-1 rounded-full bg-blue-500 mt-1" />}
            </TouchableOpacity>
      </View>

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


      <View className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
            >
            <View className="flex-1 justify-end items-center bg-zinc-900/40">
                <View className="bg-blue-50 rounded-2xl w-72 mb-24">
                    <MotiViewConfigured animationDelay={100}>
                        <TouchableOpacity className="w-full border border-gray-300 rounded-lg p-4 mb-3 bg-gray-100">
                            <Text className="text-lg font-semibold text-gray-800">Add Friends Splits</Text>
                            <Text className="text-sm text-gray-500 mt-1">
                                Split a bill evenly between multiple friends.
                            </Text>
                        </TouchableOpacity>
                    </MotiViewConfigured>

                    <MotiViewConfigured animationDelay={200}>
                        <TouchableOpacity className="w-full border border-gray-300 rounded-lg p-4 bg-gray-100">
                            <Text className="text-lg font-semibold text-gray-800">Add Friend Debt</Text>
                            <Text className="text-sm text-gray-500 mt-1">
                                Add a debt owed by a friend.
                            </Text>
                        </TouchableOpacity>
                    </MotiViewConfigured>
                </View>
            </View>
        </Modal>

        <TouchableOpacity 
          className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-xl"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-2xl">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
