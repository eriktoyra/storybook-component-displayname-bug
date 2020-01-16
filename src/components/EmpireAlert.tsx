import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled("div")<{}>(({ theme }) => ({
  backgroundColor: "tomato",
  color: "white",
  padding: 10
}));

type AlertCode = "Code Red" | "Code Yellow" | "Code Green";

export interface EmpireAlertProps {
  /**
   * A title that brings attention to the alert.
   */
  title: AlertCode;
  /**
   * A message alerting about Empire activities.
   */
  message: string;
}

/**
 * This message should show up in the Docs panel if everything works fine.
 */
export const EmpireAlert: React.FC<EmpireAlertProps> = ({
  title = "Code Yellow",
  message
}) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{message}</p>
  </Wrapper>
);

/**
 * Specifying a displayName with a different name for the component will
 * cause DocsPage to fail to populate the Description and Props slots
 *
 * Works:
 *  - Using a displayName that _matches_ the component name exactly.
 *  - Not using a displayName at all.
 *
 * Fails:
 *  - Using a displayName that _does not match_ the component name exactly.
 */
//EmpireAlert.displayName = "RebelAlliance.EmpireAlert";
