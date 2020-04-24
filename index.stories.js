import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ToolTip",
};

export const SimpleTooltip = () => {
  return (
    <p style={{ width: 450, lineHeight: 1.7, paddingTop:100 }}>
      The tooltip or infotip <Tooltip
        text="I'm a tooltip. By default, i'm placed at middle."
        icon={faExclamationCircle}
      ></Tooltip> or a hint is a common graphical user interface element.      
    </p>
  );
};

export const FixedTooltip = () => {
  return (
    <p style={{ width: 450, lineHeight: 1.7 }}>
      <Tooltip
        text="I'm a fixed tooltip placed at bottom left"
        icon={faExclamationCircle}
        placement="BOTTOM_LEFT"
        autoAdjust={false}
      ></Tooltip>
      The tooltip or infotip or a hint is a common graphical user interface element.
    </p>
  );
};

export const ExtendedTooltip = () => {
  return (
    <p style={{ width: 450, lineHeight: 1.7 }}>
      This is a multiple line Tooltip
      <Tooltip
        text="I'm a multiline tooltip placed at bottom right. So, change my width and height if you wish."
        icon={faExclamationCircle}
        placement="BOTTOM_LEFT"
        overrideCSS="width:300px; height:100px"
      ></Tooltip>
    </p>
  );
};

export const TooltipPlacements = () => {
  return (
    <>
      <p style={{ width: 450, lineHeight: 1.7 }}>
        <Tooltip
          text="I'm a adjustable tooltip placed at bottom left"
          icon={faExclamationCircle}
          placement="BOTTOM_LEFT"
        ></Tooltip>
        The tooltip or infotip or a hint is a common graphical user interface element.
      </p>

      <p style={{ width: 450, lineHeight: 1.7, paddingTop: 20 }}>        
      The tooltip or infotip or a hint is a <Tooltip
          text="I'm a adjustable tooltip placed at top center by default without passing placement."
          icon={faExclamationCircle}
        ></Tooltip> common graphical user interface element.
      </p>

      <p style={{ width: 450, lineHeight: 1.7, paddingTop: 20 }}>        
        The tooltip or infotip or a hint is a common graphical <Tooltip
          text="I'm a fixed tooltip placed at bottom right"
          placement="BOTTOM_RIGHT"
          icon={faExclamationCircle}
          autoAdjust={false}
        ></Tooltip> user interface element.
      </p>

      <p style={{ width: 450, lineHeight: 1.7, paddingTop: 20  }}>
        <Tooltip
          text="I'm a fixed tooltip placed at top left"
          icon={faExclamationCircle}
          placement="TOP_LEFT"
          autoAdjust={false}
        ></Tooltip>
        The tooltip or infotip or a hint is a common graphical user interface element.
      </p>

      <p style={{ width: 450, lineHeight: 1.7, paddingTop: 20 }}>        
        The tooltip or infotip or a hint is a common graphical <Tooltip
          text="I'm a fixed tooltip placed at top right"
          placement="TOP_RIGHT"
          icon={faExclamationCircle}
          autoAdjust={false}
        ></Tooltip> user interface element.
      </p>

      <p style={{ width: 450, lineHeight: 1.7, paddingTop: 20 }}>        
      The tooltip or infotip or a hint is a <Tooltip
          text="I'm a fixed tooltip placed at bottom center"
          placement="BOTTOM_CENTER"
          icon={faExclamationCircle}
          autoAdjust={false}
        ></Tooltip> common graphical user interface element.
      </p>
    </>
  );
};
