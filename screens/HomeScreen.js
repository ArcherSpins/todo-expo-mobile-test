/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Tasks from '../components/Tasks';

const Home = () => {
  const [task, setTask] = useState('');
  const [index, setIndex] = useState(null);
  const [update, setUpdate] = useState(false);
  const [taskItems, setTaskItems] = useState([]);

  const buttonLabel = update ? 'UPDATE' : 'ADD';

  /**
   * Task creation/editing method
   */
  const handleTask = () => {
    Keyboard.dismiss();
    if (update) {
      const copyItems = [...taskItems];
      copyItems[index] = task;
      setTaskItems([...copyItems]);
      setUpdate(!update);
    } else {
      setTaskItems([...taskItems, task]);
    }
    setTask(null);
  };

  /**
   * Method for deleting a task
   * @param _index - task index
   */
  const handleDeleteTask = _index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(_index, 1);
    setTaskItems(itemsCopy);
  };

  /**
   * The method that sets the longing for editing
   * @param _index - task index
   */
  const handleEditTask = _index => {
    let itemsEdit = [...taskItems];
    setIndex(index => _index);
    setTask(itemsEdit[_index]);
    setUpdate(!update);
  };

  const renderTasks = () => {
    return taskItems.map((item, index) => {
      return (
        <Tasks
          key={index}
          text={item}
          index={index}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      );
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO :</Text>

      <ScrollView style={styles.items}>
        {renderTasks()}
      </ScrollView>

      <KeyboardAvoidingView style={styles.inputContainer}>
        <TextInput
          placeholder="Please enter your task"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity
          style={styles.button}
          disabled={!task}
          onPress={handleTask}>
          <View style={styles.addContainer}>
            <Text style={styles.addText}>{buttonLabel}</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  text: {
    color: '#253DA1',
    marginTop: '5%',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: '5%',
  },
  button: {
    marginLeft: '50%'
  },
  items: {
    marginTop: 30,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 1,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  input: {
    paddingLeft: 30,
    color: '#000',
  },
  addContainer: {
    padding: 16,
    backgroundColor: '#253DA1',
    borderRadius: 10,
  },
  addText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Home;
