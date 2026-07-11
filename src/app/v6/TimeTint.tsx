"use client";
import { useEffect } from "react";

/* golden hours: the atmosphere re-tints to the visitor's local time of day */
export default function TimeTint() {
  useEffect(() => {
    const h = new Date().getHours();
    const tod = h < 5 ? "night" : h < 9 ? "dawn" : h < 17 ? "day" : h < 21 ? "dusk" : "night";
    document.querySelector(".oly")?.setAttribute("data-tod", tod);
  }, []);
  return null;
}
