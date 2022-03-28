import React, { useState } from "react";
import { View, StyleSheet, Text, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../utils/colors";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.01;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(1 * 1000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <ProgressBar
        progress={progress}
        color={"#B9314F"}
        style={{ height: 25, marginTop: 10, margin: 10, width: "95%", borderRadius:20 }}
      />
      <View style={styles.buttonContainer}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.bottomButtonContainer}>
        <View style={styles.start}>
          {!isStarted ? (
            <RoundedButton title="start" onPress={() => setIsStarted(true)} />
          ) : (
            <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
          )}
        </View>
        <View style={styles.clearSubject}>
          <RoundedButton title="❌" size={50} onPress={() => clearSubject()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingTop: 15,
  },
  title: {
    color: colors.secondry,
    textAlign: "center",
  },
  task: {
    color: colors.secondry,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomButtonContainer: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  start: {
    flex: 2,
    alignItems: "flex-end",
    paddingLeft: 45,
  },
  clearSubject: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 15,
    paddingTop: 60,
  },
});
