import React, { Component } from 'react';

export default class FormCommon extends Component {

    render() {
        return (
            <form>
                {this.props.items.map((item) => {
                    return <div className="form-group" key={'form_'+item.name}>
                        <label htmlFor={'form_input_'+item.name}>{item.title}</label>
                        {(() =>
                            {
                                switch (item.type) {
                                    case 'select': {
                                        return (<select
                                            className="form-control"
                                            type="text" name={item.name}
                                            required={item.required}
                                        >
                                            {this.props.selectOptions[item.name] !== undefined && this.props.selectOptions[item.name].map((option) => {
                                                return <option key={'form_select_'+item.name+option.key} name={option.key} selected={option.key === this.props.values[item.name]}>{option.value}</option>
                                            })}
                                        </select>);
                                    }
                                    case 'textarea':
                                        return <textarea
                                            className="form-control"
                                            name={item.name}
                                            required={item.required}
                                        >{this.props.values[item.name] !== undefined ? this.props.values[item.name] : item.default}</textarea>
                                    default:
                                        return <input
                                            id={'form_input_'+item.name}
                                            type="text"
                                            name={item.name}
                                            className="form-control"
                                            value={(this.props.values[item.name] !== undefined) ? this.props.values[item.name] : item.default}/>
                                }
                            }
                        )()}
                    </div>
                })}
            </form>
        );
    }
}
