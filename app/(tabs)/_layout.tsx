import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import brandConfig from '@/config';

// Você pode explorar as famílias de ícones e ícones integrados na web em https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Desabilitar a renderização estática do cabeçalho na web
        // para evitar um erro de hidratação na React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      {brandConfig.tabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.route}
          options={{
            title: tab.name,
            tabBarIcon: ({ color }) => <TabBarIcon name={tab.icon as React.ComponentProps<typeof FontAwesome>['name']} color={color} />,
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}