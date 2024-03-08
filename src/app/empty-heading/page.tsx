import { Heading, Center, Text } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <>
      <Heading display="none"></Heading>
      <Center padding={20}>
        <Heading>No error</Heading>
        <Text>Empty heading also fixes the issue</Text>
      </Center>
    </>
  );
}
