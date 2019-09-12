import React, { Component } from 'react';
import {connect} from "react-redux";
import {updateFormItem} from "../../redux/actions";


class FormElements extends Component {
    static defaultProps = {
        items: [],
        values: [],
        selectOptions: [],
        onSubmit: null,
        currentFormErrors: {},
    }

    constructor(props) {
        super(props);
        let values = {};
        this.props.updateFormItem(null); // clear at first
        this.props.items.map((item) => {
            const itemValue = (this.props.values[item.name] !== undefined) ? this.props.values[item.name] : item.default;
            this.props.updateFormItem({ name: item.name,value: itemValue });
            values[item.name] = itemValue === null ? '' : itemValue;
            return true;
        });
        this.state = values;
    }

    onChange(itemName, e) {
        this.props.updateFormItem({ name: itemName,value: e.target.value });
        this.setState({[itemName]: e.target.value});
    }

    render() {
        return (
            <>
                {this.props.items.map((item) => {
                    const commonParams = {
                        id: 'form_input_'+item.name,
                        className: "form-control",
                        name: item.name,
                        value: this.state[item.name],
                        onChange: (e) => this.onChange(item.name, e),
                    }

                    if (item.type === 'hidden') {
                        return <input key={'form_' + item.name}
                            type="hidden"
                            {...commonParams}/>
                    } else {
                        return <div className="form-group" key={'form_' + item.name}>
                            <label htmlFor={'form_input_' + item.name}>{item.required &&
                            <span className="font-weight-bold text-danger">*</span>} {item.title}</label>
                            {this.props.currentFormErrors[item.name] !== undefined &&
                            <div className="text-danger">{this.props.currentFormErrors[item.name]}</div>}
                            {(() => {
                                    switch (item.type) {
                                        case 'select': {
                                            return (<select {...commonParams} >
                                                {this.props.selectOptions[item.name] !== undefined && this.props.selectOptions[item.name].map((option) => {
                                                    return <option key={'form_select_' + item.name + option.key}
                                                                   value={option.key}>{option.value.replace(/ /g, "\u00a0")}</option>
                                                })}
                                            </select>);
                                        }
                                        case 'textarea':
                                            return <textarea {...commonParams} />
                                        default:
                                            return <input
                                                type="text"
                                                {...commonParams}/>
                                    }
                                }
                            )()}
                        </div>
                    }
                })}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentFormValues: state.currentFormValues, currentFormErrors: state.currentFormErrors }
};
const mapDispatchToProps = {updateFormItem: updateFormItem };
FormElements = connect(mapStateToProps, mapDispatchToProps)(FormElements);
export default FormElements;
