import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/your-calendly-username";

export const useCalendly = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return { isCalendlyOpen, openCalendly, closeCalendly, CALENDLY_URL };
};
