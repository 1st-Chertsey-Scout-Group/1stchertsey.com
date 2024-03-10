export const TimeControl = createClass({
  handleChange: function (e) {
    this.props.onChange(" " + (e.target.value + "").replaceAll(" ", ""));
  },

  render: function () {
    var value = this.props.value;
    return h("input", {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: "text",
      value: value + "",
      onChange: this.handleChange,
    });
  },
});

export const TimePreview = createClass({
  render: function () {
    return h("div", {}, this.props.value);
  },
});

export const TimeSchema = {
  properties: {},
};
