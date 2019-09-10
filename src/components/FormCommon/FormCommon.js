import React, { Component } from 'react';
import {connect} from "react-redux";
import {updateFormItem} from "../../redux/actions";


class FormCommon extends Component {
    static defaultProps = {
        items: [],
        values: [],
        selectOptions: [],
        onSubmit: null,
    }

    constructor(props) {
        super(props);
        let values = {};
        this.props.items.map((item) => {
            const itemValue = (this.props.values[item.name] !== undefined) ? this.props.values[item.name] : item.default;
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
            <form>
                {this.props.items.map((item) => {
                    const commonParams = {
                        id: 'form_input_'+item.name,
                        className: "form-control",
                        name: item.name,
                        required: item.required,
                        value: this.state[item.name],
                        onChange: (e) => this.onChange(item.name, e),
                    }
                    return <div className="form-group" key={'form_'+item.name}>
                        <label htmlFor={'form_input_'+item.name}>{item.title}</label>
                        {(() =>
                            {
                                switch (item.type) {
                                    case 'select': {
                                        return (<select {...commonParams} >
                                            {this.props.selectOptions[item.name] !== undefined && this.props.selectOptions[item.name].map((option) => {
                                                return <option key={'form_select_'+item.name+option.key} name={option.key}>{option.value.replace(/ /g, "\u00a0")}</option>
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
                })}
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentFormValues: state.currentFormValues }
};
const mapDispatchToProps = {updateFormItem: updateFormItem};
FormCommon = connect(mapStateToProps, mapDispatchToProps)(FormCommon);
export default FormCommon;
