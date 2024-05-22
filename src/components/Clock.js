import React, { useState, useEffect } from "react";
import styles from "../styles/Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formattedTime = new Intl.DateTimeFormat(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(time);

  return <div className={styles.clock}>{formattedTime}</div>;
};

export default Clock;