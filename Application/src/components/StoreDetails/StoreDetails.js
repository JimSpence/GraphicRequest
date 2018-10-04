import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './StoreDetails.css';

export default class StoreDetails extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        const {store} = this.props;

        return (
            <div className="store-details">
                <div id="storeNumber">{store.storeNumber}</div>
                <div id="brandName">{store.brandName}</div>
                <div id="storeName">{store.name}</div>
                <div className="margin-top-5">
                    <div id="storeEmail"><span className="icon mail" />{store.email}</div>
                    <div id="storePhone"><span className="icon phone" />{store.phone}</div>
                </div>
            </div>
        );
    }
}
