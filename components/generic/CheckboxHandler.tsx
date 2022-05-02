import React, { useState } from 'react';

interface Props {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  handleSelect: React.MouseEventHandler<HTMLInputElement>;
  Checkbox: Function;
  style?: { [key: string]: any };
}

/** Checkbox handler is used to create checkbox components that use a custom
 * visual representation of the checked and unchecked states. The default
 * checkbox element is hidden from view but still accessible for screen readers. */

const CheckboxHandler = ({
  id,
  name,
  disabled = false,
  handleSelect,
  checked = false,
  Checkbox,
  style,
}: Props) => {
  return (
    <div style={style}>
      <input
        type="checkbox"
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
        onClick={handleSelect}
        onChange={() => {}} // Dummy function to stop nextjs complaining in console
        style={{
          margin: '0px',
          minWidth: '0px',
          position: 'absolute',
          opacity: '0',
          zIndex: '-1',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      />
      <div aria-hidden="true">
        <Checkbox
          checked={checked}
          onClick={handleSelect}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CheckboxHandler;
