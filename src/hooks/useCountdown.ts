import { useState, useEffect } from "react";

const useCountdown = (targetDate: Date) => {
  const [countdown, setCountdown] = useState(() => calculateTimeLeft(targetDate));
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeLeft = calculateTimeLeft(targetDate);
      setCountdown(timeLeft);
      if (Object.values(timeLeft).every(value => value === 0)) {
        setIsLive(true);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return { countdown, isLive };
};

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default useCountdown;
