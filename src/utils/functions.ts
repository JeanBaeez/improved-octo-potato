import { differenceInYears } from "date-fns";

export default function getpersonaYears(dob: Date) {
  return differenceInYears(new Date(), dob);
}
