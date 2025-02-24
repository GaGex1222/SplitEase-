import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import "../global.css";

const Index = () => {
  const [activeTab, setActiveTab] = useState('Tab1');
  return (
    <View className="flex-1 justify-start items-center bg-white">
      <View className="flex-row justify-between w-full px-20">
        <TouchableOpacity
          onPress={() => setActiveTab('Tab1')}
          className="p-4"
        >
          <Text className={`text-lg ${activeTab === 'Tab1' ? 'font-bold' : 'text-gray-500'}`}>
            Bills
          </Text>
          {activeTab === 'Tab1' && <View className="h-1 rounded-full bg-blue-500 mt-1" />}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('Tab2')}
          className="p-4"
        >
          <Text className={`text-lg ${activeTab === 'Tab2' ? 'font-bold' : 'text-gray-500'}`}>
            Friends Debts
          </Text>
          {activeTab === 'Tab2' && <View className="h-1 rounded-full bg-blue-500 mt-1" />}
        </TouchableOpacity>
      </View>

        <View className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <Pressable className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-xl">
                <Text className="text-white text-2xl">+</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default Index;
