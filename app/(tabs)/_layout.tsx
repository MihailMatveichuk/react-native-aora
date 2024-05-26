import { Tabs } from 'expo-router';

import { TabIcon } from '../../components';
import { icons } from '../../constants';

const tabsData = [
  {
    name: 'home',
    title: 'Home',
    src: 'home',
  },
  {
    name: 'bookmark',
    title: 'Bookmark',
    src: 'bookmark',
  },
  {
    name: 'create',
    title: 'Create',
    src: 'plus',
  },
  {
    name: 'profile',
    title: 'Profile',
    src: 'profile',
  },
];

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#C9C9C9',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 70,
          },
        }}
      >
        {tabsData.map(({ name, title, src }, index) => (
          <Tabs.Screen
            name={name}
            key={index}
            options={{
              title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  src={icons[src as keyof typeof icons]}
                  color={color}
                  name={title}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
