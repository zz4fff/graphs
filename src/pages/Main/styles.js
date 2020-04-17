import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  image: {
    width: 40,
    height: 40,
    marginLeft: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#e3a587',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 8,
  },

  headerText: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    marginRight: 16,
    marginTop: 20,
    marginBottom: 20,
  },

  graphButtons: {
    backgroundColor: '#e8ae68',
    padding: 4,
    borderRadius: 8,
  },

  button: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#db5a42',
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffd275',
    padding: 8,
  },


});