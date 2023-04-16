import React from "react";
import states from "./data/states.json";

interface SelectUSStateProps {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className: string;
}

class SelectUSState extends React.Component<SelectUSStateProps> {
  constructor(props: SelectUSStateProps) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.onChange(event);
  }

  render() {
    return (
      <select
        id={this.props.id}
        className={this.props.className}
        onChange={this._handleChange}
      >
        {states.map((item) => (
          <option key={item.abbreviation} value={item.abbreviation}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectUSState;
