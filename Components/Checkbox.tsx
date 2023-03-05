import * as React from 'react';

export const Checkbox = ({
  label,
  checked,
  onChange,
}: {
  label?: string;
  className?: string;
  checked?: boolean;
  onChange: Function;
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Label>{label}</Label>
    </div>
  );
};

const Label = ({ children }) => (
  <span className="text-slate-700 text-sm font-medium px-2">{children}</span>
);
