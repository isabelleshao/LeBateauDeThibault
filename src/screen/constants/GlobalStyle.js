import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: { flex: 1, justifyContent: "center" },

  descriptionArea: {
    marginHorizontal: 15,
    alignItems: "center",
    marginVertical: 50,
  },

  boutonsArea: {
    marginHorizontal: 15,
  },
  boutonGeneriqueStyle: {
    marginHorizontal: "1%",
    backgroundColor: "powderblue",
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "48%",
  },

  boutonTexte: {
    textAlignVertical: "top",
    textAlign: "center",
    fontSize: 20,
  },

  boutonDuoStyle: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
});

export default globalStyles;
