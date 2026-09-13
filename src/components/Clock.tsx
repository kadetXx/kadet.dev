"use client";

import { useEffect, useState } from "react";

const format = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

/* Server and client both format at render time, so they agree except when
   the request straddles a minute boundary -- hence suppressHydrationWarning
   rather than rendering a blank placeholder and flashing it in. */
const Clock = () => {
  const [time, setTime] = useState(format);

  useEffect(() => {
    const tick = setInterval(() => setTime(format()), 1000 * 15);
    return () => clearInterval(tick);
  }, []);

  return (
    <p className="eyebrow" suppressHydrationWarning>
      {time} Berlin
    </p>
  );
};

export default Clock;
