import React, {Component} from 'react';
import PageHeader from "../PageHeader/PageHeader";
import Content from "../Content/Content";
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <PageHeader headerText="Graphic Request - 11:34am 10/10/2018"/>
                <Content/>
            </div>
        );
    }
}
