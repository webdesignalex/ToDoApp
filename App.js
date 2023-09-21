import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./apps/components/header";
import ToDoItem from "./apps/components/ToDoItem";
import ToAddItem from "./apps/components/ToAddItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "bought a snack", key: 1 },
    { text: "go to cinema", key: 2 },
    { text: "eat breackfast", key: 3 },
    { text: "eat lunch", key: 4 },
    { text: "date", key: 5 },
    { text: "go shopping", key: 6 },
    { text: "study", key: 7 },
    { text: "attend classes", key: 8 },
    { text: "eat dinner", key: 9 },
    { text: "sleep", key: 10 },
  ]);
  const pressHandler = (key) => {
    setTodos((prevtoDo) => {
      return prevtoDo.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    setTodos((prevtoDo) => {
      return [{ text: text, key: Math.random().toString() }, ...prevtoDo];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <ToAddItem submitHandler={submitHandler} />
      </View>
      <View style={styles.item}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDoItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginBottom: 20,
  },
});
