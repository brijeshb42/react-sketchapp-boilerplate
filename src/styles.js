import { StyleSheet } from 'react-sketchapp';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 667,
    backgroundColor: '#fefefe',
    borderWidth: 2,
    borderRadius: 4,
    overflowY: 'scroll',
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    lineHeight: 24,
    color: '#f1622b',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default styles;
