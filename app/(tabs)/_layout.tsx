import { Tabs, Redirect } from 'expo-router';

import { TabIcon } from '../../components';
import { icons } from '../../constants';

export default function TabsLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => (
              <TabIcon
                src={icons.home}
                color={color}
                name="home"
                focused={focused}
                size={size}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
