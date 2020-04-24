import React from "react";
import styled from "styled-components";
import { ToggleLayer, Arrow } from "react-laag";
import ResizeObserver from "resize-observer-polyfill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const theme = {
  backgroundColor: "#e7f5ff",
  borderColor: "#002e7a",
};

const TooltipBox = styled.div`
  ${(props) => props.layerProps.style}
  padding: 5px;
  width: 250px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.borderWidth}px solid ${(props) =>
  props.borderColor}};
  ${(props) => props.overrideCSS}
`;

type TooltipProps = {
  icon?: string,
  text?: string,
  placement?: string,
};

const Tooltip = ({ hasBorder = true, autoAdjust = true, ...props }: TooltipProps) => {
  const { icon, text, placement, overrideCSS } = props;
  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      renderLayer={({ isOpen, layerProps, arrowStyle, layerSide }) =>
        isOpen && (
          <TooltipBox
            ref={layerProps.ref}
            borderWidth={hasBorder ? 1 : 0}
            layerProps={layerProps}
            borderColor={theme.borderColor}
            backgroundColor={theme.backgroundColor}
            overrideCSS={overrideCSS}
          >
            {text}
            <Arrow
              style={arrowStyle}
              layerSide={layerSide}
              backgroundColor={theme.backgroundColor}
              borderWidth={hasBorder ? 1 : 0}
              borderColor={theme.borderColor}
              roundness={0.5}
            />
          </TooltipBox>
        )
      }
      placement={{
        anchor: placement,
        autoAdjust: autoAdjust,
        triggerOffset: 10,
      }}
      closeOnOutsideClick
    >
      {({ triggerRef, toggle }) => (
        <span ref={triggerRef} onClick={toggle}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
    </ToggleLayer>
  );
};

export default Tooltip;
