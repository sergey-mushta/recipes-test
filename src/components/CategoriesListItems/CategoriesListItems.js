import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class CategoriesListItems extends Component {

    static defaultProps = { parentId: null }
    render() {
        return (
            <ul>
                {this.props.items !== undefined ? this.props.items.filter((e) => e['parentId'] === this.props.parentId).map((item) => {
                    return (
                        <li key={item._id}>
                            {item.title}
                            <Button variant="secondary" size="sm" className="ml-2 m-1"><i className="fa fa-pencil"></i></Button>
                            <Button variant="danger" size="sm" className="m-1"><i className="fa fa-trash"></i></Button>
                            <CategoriesListItems key={'sub_'+item._id} items={this.props.items} parentId={item._id}/>
                        </li>
                    );
                }) : ''}
            </ul>
        );
    }

}

export default CategoriesListItems;
