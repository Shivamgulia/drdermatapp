import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AppointmentTable({ data }) {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        //   paddingHorizontal: 20,
      }}
    >
      <View style={styles.rowHead}>
        <View style={[styles.columnHead, styles.nameCol]}>
          <Text style={styles.head}>Name</Text>
        </View>
        <View style={[styles.columnHead, styles.dateCol]}>
          <Text style={styles.head}>Date of Appointment</Text>
        </View>
        <View style={[styles.columnHead, styles.statusCol]}>
          <Text style={styles.head}>Status</Text>
        </View>
        <View style={[styles.columnHead, styles.actionCol]}>
          <Text style={styles.head}>Action</Text>
        </View>
      </View>

      {data.map((item) => {
        return (
          <View style={styles.row} key={item.id}>
            <View style={[styles.column, styles.nameCol]}>
              <Text style={styles.data}>{item.name}</Text>
            </View>
            <View style={[styles.column, styles.dateCol]}>
              <Text style={styles.data}>{item.date}</Text>
            </View>
            <View style={[styles.column, styles.statusCol]}>
              <Text
                style={[
                  styles.data,
                  item.status?.trim() == "" || !item.status
                    ? styles.error
                    : styles.active,
                ]}
              >
                {item.status?.trim() == "" || !item.status
                  ? "N.A."
                  : item.status}
              </Text>
            </View>
            <View style={[styles.column, styles.actionCol]}>
              <Text
                style={[
                  styles.data,
                  item.data?.trim() == "" || !item.data
                    ? styles.error
                    : styles.active,
                ]}
              >
                {item.action}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  rowHead: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  columnHead: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#e0e0e0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderTopWidth: 0,
  },
  column: {
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  nameCol: { width: "15%" },
  dateCol: { width: "50%" },
  statusCol: { width: "15%" },
  actionCol: { width: "15%" },
  head: {
    fontSize: 10,
  },
  data: {
    fontSize: 10,
  },
  active: {
    backgroundColor: "green",
    color: "white",
    width: "100%",
    paddingVertical: 4,
    textAlign: "center",
    borderRadius: 10,
  },
  error: {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    paddingVertical: 4,
    textAlign: "center",
    borderRadius: 10,
  },
});
