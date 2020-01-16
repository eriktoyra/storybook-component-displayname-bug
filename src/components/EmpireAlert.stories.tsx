import React from "react";
import { EmpireAlert } from "./EmpireAlert";

export default {
  title: "EmpireAlert",
  component: EmpireAlert
};

export const _default = () => (
  <EmpireAlert
    title="Code Red"
    message="The Empire has been sighted on Hoth. Man the battle stations!"
  />
);
