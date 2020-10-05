import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TabsHeader from "./components/TabsHeader/TabsHeader";
import { Report, Schedule } from './page/index';
import PopupTime from "./components/PopupTime/PopupTime";
import axios from "axios";
import InstallationPage from './json/InstallationPage';

class App extends Component {
    state = {
        idActiveButton: "button_report",
        arrayModuleReport: null,
        popapActive: false,
        popapIdUser: null,
        date: new Date().toJSON().slice(0,10).replace(/-/g,'.'),
        pageLink: InstallationPage.install.pagelink,
        pageDomain: InstallationPage.install.domain,
    };

    //Array plugin
    async componentDidMount () {
        var dateArray = this.state.date.split(/\./)[2]+'.'+this.state.date.split(/\./)[1]+'.'+this.state.date.split(/\./)[0];
        axios.get(this.state.pageLink+dateArray).then(response =>  this.setState({arrayModuleReport: response.data}))
    }

    //Event plugin

    tabClick = event => {
        var item = event.target,
            idItem = item.id;
        this.setState({idActiveButton: idItem});
    };

    popapVisible = event => {
        event.preventDefault();
        var itemID = event.target.id;
        this.setState({
            popapActive: true,
            popapIdUser: itemID,
        })
    };

    popapHide = event => {
        event.preventDefault();
        this.setState({popapActive: false})
    };

    changeDate = event => {
        const valueDate = event.target.value.replace(/-/g,'.'),
              dateArray = valueDate.split(/\./)[2]+'.'+valueDate.split(/\./)[1]+'.'+valueDate.split(/\./)[0];
        axios.get(this.state.pageLink+dateArray).then(response =>  this.setState({arrayModuleReport: response.data}))
        this.setState({date: dateArray});
    };

    render(){
        const {idActiveButton, arrayModuleReport, popapActive, popapIdUser, pageDomain} = this.state;
        return (
            <div className="App">
                <TabsHeader
                    tabClick={this.tabClick}
                    idActiveButton={idActiveButton}
                    changeDate={this.changeDate}
                />
                <Route
                    exact path={["/","/report",]}
                    render={(props) => (
                        <Report {...props} arrayModuleReport={arrayModuleReport} clickPopap={this.popapVisible} pageDomain={pageDomain}/>
                    )}
                />
                <Route
                    exact path={["/schedule",]}
                    render={(props) => (
                        <Schedule {...props} arrayModuleReport={arrayModuleReport}/>
                    )}
                />
                {
                    popapActive === false ? '' :
                        <PopupTime
                            popapHide={this.popapHide}
                            arrayModuleReport={arrayModuleReport}
                            popapIdUser={popapIdUser}
                            pageDomain={pageDomain}
                        />
                }
            </div>
        );
    }
}

export default App;
