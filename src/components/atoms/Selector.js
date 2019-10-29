import React from 'react';
import theme from '../../styles/Theme';
import Select from 'react-select';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: theme.colors.dark.bg,
  borderRadius: '2em',
  color: theme.colors.dark.title,
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const colourStyles = {
  control: styles => {
    return {
      ...styles,
      border: 'none',
      backgroundColor: theme.colors.dark.lighten,
      boxShadow: 'none',
    };
  },
  singleValue: styles => ({ ...styles, color: theme.colors.dark.title }),
  option: (styles, { data, isDisabled, isSelected, isFocused }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? null
        : isFocused
        ? theme.colors.dark.caption
        : null,
    };
  },
  menu: styles => ({
    ...styles,
    backgroundColor: theme.colors.dark.lighten,
  }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      fontSize: '16px',
      backgroundColor: theme.colors.dark.bg,
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: theme.colors.dark.title,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
  }),
  indicatorsContainer: (styles, { data }) => ({
    ...styles,
  }),
};

export default function Selector({ options, isMulti, value, onChange }) {
  return (
    <Select
      isMulti={isMulti}
      value={value}
      onChange={onChange}
      options={options}
      formatGroupLabel={formatGroupLabel}
      styles={colourStyles}
    />
  );
}
