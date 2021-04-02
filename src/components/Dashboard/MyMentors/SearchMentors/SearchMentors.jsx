import React, { Component } from 'react';

import './SearchMentors.css';

class SearchMentors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AdvancedSearch: false
        }
    }

    openAdvancedSearch = () => {
        if(!this.state.AdvancedSearch) {
            this.setState({AdvancedSearch: true});
        }else {
            this.setState({AdvancedSearch: false});
        }
    }

    onSearchMentors = () => {
        this.props.history.replace('/mymentor/searchmentorresult')
    }

    render() {
        let advanceedSearch = null;
        if(this.state.AdvancedSearch) {
            advanceedSearch = 
            <>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-3 pb-2">
                    <p>School Name</p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 border-bottom mb-3 pb-2">
                    <input type="text" className="form-control form-control-sm" placeholder="School Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 border-bottom mb-3 pb-2">
                    {/* <input type="text" className="form-control form-control-sm" placeholder="School Name" /> */}
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-3 pb-2">
                    <p>Country</p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-3 pb-2">
                    <select className='form-control form-control-sm'>
                        <option selected>Select</option>
                    </select>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-3 pb-2">
                    <p>State</p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-3 pb-2">
                    <input type="text" className="form-control form-control-sm" placeholder="State" />
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-3 pb-2">
                    <p>City</p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-3 pb-2">
                    <input type="text" className="form-control form-control-sm" placeholder="City" />
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-3 pb-2">
                    <p>Postal Code</p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-3 pb-2">
                    <input type="text" className="form-control form-control-sm" placeholder="Postal Code" />
                </div>
            </>
        }
        return(
            <div className="SearchMentors text-white pb-5 pt-3">
                <h1>Search Mentors</h1>
                <hr className="bg-white" />
                <div className="container px-3">
                    <div className="row text-white py-3 px-4">
                        <div className="col-xl-2 text-right col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-2 pb-1">
                            <p>Search</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-2 pb-1">
                            <select className='form-control form-control-sm'>
                                <option selected>Everyone</option>
                                <option>Only Available</option>
                            </select>
                        </div>
                        <div className="col-xl-2 text-right col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-2 pb-1">
                            <p>Keyword</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-2 pb-1">
                            <input type="text" className="form-control form-control-sm" placeholder="Keyword" />
                        </div>
                        <div className="col-xl-2 text-right col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-2 pb-1">
                            <p>First Name</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-2 pb-1">
                            <input type="text" className="form-control form-control-sm" placeholder="First Name" />
                        </div>
                        <div className="col-xl-2 text-right col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-2 pb-1">
                            <p>Last Name</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-2 pb-1">
                            <input type="text" className="form-control form-control-sm" placeholder="Last Name" />
                        </div>
                        <div className="col-xl-2 text-right col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-2 pb-1">
                            <p>Title</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-2 pb-1">
                            <input type="text" className="form-control form-control-sm" placeholder="Title" />
                        </div>
                        <div className="col-xl-2 text-right col-lg-2 col-md-3 col-sm-6 pt-1 border-bottom mb-2 pb-1">
                            <p>Company</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6 border-bottom mb-2 pb-1">
                            <input type="text" className="form-control form-control-sm" placeholder="Company" />
                        </div>
                        {advanceedSearch}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 py-3 text-center">
                            <button 
                                className="btn btn-sm w-25 mr-2 rounded-0 text-white"
                                onClick={this.openAdvancedSearch}
                                style={{ 'backgroundColor' : '#0250A2', 'border' : '#007BFF 1px solid' }}
                            >
                                Advanced Search
                            </button>
                            <button 
                                className="btn btn-sm w-25 ml-2 rounded-0 text-white"
                                onClick={this.onSearchMentors}
                                style={{ 'backgroundColor' : '#0250A2', 'border' : '#007BFF 1px solid' }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchMentors;