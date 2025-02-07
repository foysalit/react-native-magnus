import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import {
  Div,
  Text,
  ThemeProvider,
  Button,
  Image,
  Badge,
  Input,
  Icon,
  Header,
  Host,
  Fab,
  Portal,
} from "react-native-magnus";

const friends = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1927&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516640997890-5e4c83df8419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
];

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Host>
          <Div mx="xl" flex={1}>
            {/* header */}
            <Header
              suffix={
                <Badge
                  bg="green500"
                  zIndex={10}
                  right={-5}
                  top={0}
                  h={12}
                  w={12}
                >
                  <Button
                    bg="gray200"
                    p="none"
                    rounded="circle"
                    onPress={() => {}}
                  >
                    <Image
                      h={40}
                      w={40}
                      source={{
                        uri:
                          "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80",
                      }}
                    />
                  </Button>
                </Badge>
              }
            >
              <Div>
                <Text fontWeight="bold" fontSize="2xl">
                  Explore
                </Text>
                <Text color="gray700" mt="md" mb="sm">
                  My friends
                </Text>
              </Div>
            </Header>
            {/* input box */}
            <Input
              suffix={
                <Icon
                  name="search"
                  color="gray700"
                  fontSize="lg"
                  fontFamily="FontAwesome"
                />
              }
              p="md"
              fontSize="lg"
              borderWidth={0}
              placeholder="Search your doge homies"
              mt="lg"
              bg="gray100"
            />
            {/* list */}
            <Div mt="xl" flex={1}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={friends}
                renderItem={({ item }) => (
                  <>
                    <Image
                      source={{ uri: item.image }}
                      h={120}
                      w="100%"
                      rounded="xl"
                      mb="xl"
                      bg="gray200"
                      resizeMode="cover"
                    />
                  </>
                )}
                keyExtractor={(item) => `friend-list-item-${item.id}`}
              />
            </Div>
          </Div>
          <Portal>
            <Fab bg="blue600" h={50} w={50}>
              <Button p="none" bg="transparent" justifyContent="flex-end">
                <Div rounded="sm" bg="white" p="sm">
                  <Text fontSize="md">Cheer</Text>
                </Div>
                <Icon
                  name="user"
                  color="blue600"
                  h={50}
                  w={50}
                  rounded="circle"
                  ml="md"
                  bg="white"
                />
              </Button>
              <Button
                p="none"
                bg="transparent"
                justifyContent="flex-end"
                disabled
              >
                <Div rounded="sm" bg="white" p="sm">
                  <Text fontSize="md">Boost</Text>
                </Div>
                <Icon
                  name="user"
                  color="blue600"
                  h={50}
                  w={50}
                  rounded="circle"
                  ml="md"
                  bg="white"
                />
              </Button>
            </Fab>
          </Portal>
        </Host>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
