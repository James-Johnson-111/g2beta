import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Step2.css';
import Modal from '../../UI/Modal/Modal';
import axios from '../../../axios-order';
import * as actionsTypes from '../../../store/actions';
import { connect } from 'react-redux';

class Step2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editUserName: false,
            editUserState: false,
            editUserCity: false,
            modalShow: false,
            resumeOrProjects: false,
            skills: false,
            experience: false,
            education: false,
            location: false,
            awards: false,
            influence: false,
            interests: false,
            userImage: null,
            userImageName: null,
            databaseImage: false,
            databaseImagePath: null,
            UserProfile: {
                userSkill: [],
                userName: this.props.usrname,
                userFName: null,
                userLName: null,
                userCity: null,
                userState: null,
                userCountry: null,
                userGender: null,
                userDBirth: null,
                userEmail: null
            },
            skills: [],
        }
    }

    componentDidMount() {
        axios.get('/getuserimage/'+parseInt(sessionStorage.getItem('usrid')))
             .then(response => {
                 this.setState({userImageName: '/images/'+response.data[0].user_image});
                 if(response.data[0].user_image != null) {
                    this.setState({databaseImage: true, databaseImagePath: response.data[0].user_image});
                    this.setState(
                        {
                            UserProfile: {
                                userName: this.props.usrname,
                                userFName: this.props.usrfname,
                                userLName: this.props.usrlname,
                                userCity: this.props.user_city,
                                userState: this.props.user_state,
                                userCountry: this.props.user_country,
                                userGender: this.props.user_gender,
                                userDBirth: this.props.user_d_birth,
                                userEmail: this.props.user_email
                            }
                        }
                    );
                 }
             })
    }


    onInputChangehandler  = (event) => {
        const { name, value } = event.target;
        const puttingValues = {
            ...this.state.UserProfile,
            [name]: value
        }
        this.setState({UserProfile: puttingValues});
    }

    addSkill = () => {
        const addSkills =  this.state.skills.push(this.state.UserProfile.userSkill);
        
        this.setState({UserProfile: {skills: addSkills}});
        const UserDetails = {
            ...this.state.skills,
        }
        console.log({User: sessionStorage.getItem('usrid'), Skills: UserDetails});
        axios.patch('/userdetails', {User: parseInt(sessionStorage.getItem('usrid')), Skills: JSON.stringify(UserDetails)}).then(response => {
                console.log(response.data);
                console.log("Found");
            }).catch(error =>{
                console.log(error);
                console.log("Not Found");
            })
        // let Skill = {};
        // for(let x in this.state.skills) {
        //     Skill = {
        //         Skills: this.state.skills[x]
        //     }
        // }
        // this.setState({UserProfile: {skills: Skills}});
        // // console.log(Skill);
        // axios.put('/userdetails', Details).then(response => {
        //     console.log(response.data);
        //     console.log("Found");
        // }).catch(error =>{
        //     console.log(error);
        //     console.log("Not Found");
        // })


        // const oldCount = this.state.ingredients[type];
        // const updateCount = oldCount + 1;
        // const updateIngredients = {
        //     ...this.state.ingredients
        // };


        // updateIngredients[type] = updateCount;
        // axios.post('/userdetails', {User: User, Skills: JSON.stringify(Skills, null, ", ")}).then(response  => {
        //     console.log("Look at me");
        // }).catch(error => {
        //     console.log(error);
        // })
    }

    showModal = () => {
        this.setState({modalShow: true});
    }

    closeModal = () => {
        this.setState({modalShow: false});
    }

    resumeOn = () => {
        this.setState({resumeOrProjects: false});
    }

    projectsOn = () => {
        this.setState({resumeOrProjects: true});
    }

    skillsEdit = () => {
        if(this.state.skills)
        {
            this.setState({skills: false});
        }else {
            this.setState({skills: true});
        }
    }

    experienceEdit = () => {
        if(this.state.experience)
        {
            this.setState({experience: false});
        }else {
            this.setState({experience: true});
        }
    }

    educationEdit = () => {
        if(this.state.education)
        {
            this.setState({education: false});
        }else {
            this.setState({education: true});
        }
    }

    locationEdit = () => {
        if(this.state.location)
        {
            this.setState({location: false});
        }else {
            this.setState({location: true});
        }
    }

    awardsEdit = () => {
        if(this.state.awards)
        {
            this.setState({awards: false});
        }else {
            this.setState({awards: true});
        }
    }

    influenceEdit = () => {
        if(this.state.influence)
        {
            this.setState({influence: false});
        }else {
            this.setState({influence: true});
        }
    }

    interestsEdit = () => {
        if(this.state.interests)
        {
            this.setState({interests: false});
        }else {
            this.setState({interests: true});
        }
    }

    onUploadImageHandler = (event) => {
        this.setState({userImage: event.target.files[0]});
        this.setState({userImageName: event.target.files[0].name});
    }

    uploadImage = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('uploadedImage', this.state.userImage);
        formData.append('id', parseInt(sessionStorage.getItem('usrid')));
        formData.append('imageName', this.state.userImageName);
        axios.post('/userimage', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
             
    }

    updateUplodedImage = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('uploadedImage', this.state.userImage);
        formData.append('id', parseInt(sessionStorage.getItem('usrid')));
        formData.append('imageName', this.state.userImageName);
        formData.append('prevImage', this.state.databaseImagePath);
        axios.put('/updateuserimage', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
             
    }

    editUsersName = () => {
        if(this.state.editUserName) {
            this.setState({editUserName: false});
        }else {
            this.setState({editUserName: true});
        }
    }

    upDateUserName = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('id', parseInt(sessionStorage.getItem('usrid')));
        formData.append('updatedUserName', this.state.UserProfile.userName);
        axios.put('/updateusername', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        console.log('username effected');
        this.props.onUserDetailsUpdate("user_name", this.state.UserProfile.userName);
        console.log(this.props.usrname);
        this.setState({editUserName: false});
    }

    editUserState = () => {
        if(this.state.editUserState) {
            this.setState({editUserState: false});
        }else {
            this.setState({editUserState: true});
        }
    }

    upDateUserState = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('id', parseInt(sessionStorage.getItem('usrid')));
        formData.append('updatedUserState', this.state.UserProfile.userState);
        axios.put('/updateuserstate', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        console.log('userstate effected');
        this.setState({editUserState: false});
    }

    editUserCity = () => {
        if(this.state.editUserCity) {
            this.setState({editUserCity: false});
        }else {
            this.setState({editUserCity: true});
        }
    }

    upDateUserCity = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('id', parseInt(sessionStorage.getItem('usrid')));
        formData.append('updatedUserCity', this.state.UserProfile.userCity);
        axios.put('/updateusercity', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        this.setState({editUserCity: false});
        this.props.onUserDetailsUpdate("user_city", this.state.UserProfile.userCity);
        console.log(this.props.user_city);
        console.log('usercity effected');
    }

    render() {
        let skills = null;
        if(this.state.skills) {
            skills = <>
                        <div className="mb-3 text-center">
                            <input 
                                type="text" 
                                className="form-control form-control-sm mb-3" 
                                placeholder="Add New Skill" 
                                onChange={this.onInputChangehandler} 
                                name="userSkill"
                                value={this.state.UserProfile.userSkill}
                                />
                            <button 
                                className="btn btn-sm px-5" 
                                style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}
                                onClick={this.addSkill}
                                >Add
                            </button>
                        </div>
                        <div className="d-flex justify-content-between text-white text-left">
                            <div>
                                {this.state.skills.map((val) => {
                                    return <><small>{val}</small><br/></>
                                    })
                                }
                            </div>
                            <div>
                                <button className="btn btn-sm text-white"><i class="las la-edit"></i> Edit</button>
                                <button className="btn btn-sm text-white"><i class="las la-trash-alt"></i> Remove</button>
                            </div>
                        </div>
                     </>
        }

        let experience = null;
        if(this.state.experience) {
            experience = <>
                            <div className="container-flui">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                            <small>FROM</small>
                                        <input type="month" className="form-control form-control-sm" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                            <small>TO</small>
                                        <input type="month" className="form-control form-control-sm" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                            <small>LOCATION</small>
                                        <input type="text" className="form-control form-control-sm" placeholder="Location" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                            <small>COMPANY NAME</small>
                                        <input type="text" className="form-control form-control-sm" placeholder="Company Name" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <textarea className="form-control form-control-sm" placeholder="Description" style={{ 'height' : '100px' }}></textarea>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <button className="btn btn-sm px-5 mr-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Save</button>
                                        <button className="btn btn-sm px-5 ml-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Cancel</button>
                                    </div>
                                </div>
                                
                            </div>
                         </>
        }

        let education = null;
        if(this.state.education) {
            education = <>
                            <div className="container-flui">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                            <small>FROM</small>
                                        <input type="month" className="form-control form-control-sm" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                            <small>TO</small>
                                        <input type="month" className="form-control form-control-sm" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                            <small>LOCATION</small>
                                        <input type="text" className="form-control form-control-sm" placeholder="Location" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                            <small>COMPANY NAME</small>
                                        <input type="text" className="form-control form-control-sm" placeholder="Company Name" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <textarea className="form-control form-control-sm" placeholder="Description" style={{ 'height' : '100px' }}></textarea>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <button className="btn btn-sm px-5 mr-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Save</button>
                                        <button className="btn btn-sm px-5 ml-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Cancel</button>
                                    </div>
                                </div>
                                
                            </div>
                         </>
        }

        let location = null;
        if(this.state.location) {
            location = <>
                            <div className="container-flui">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="First Name" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="Last Name" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="Street NO." />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="City" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="State" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="Postal Address" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <select className="form-control form-control-sm">
                                            <option selected>Select Your Country</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <textarea className="form-control form-control-sm" placeholder="Description" style={{ 'height' : '100px' }}></textarea>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <button className="btn btn-sm px-5 mr-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Save</button>
                                        <button className="btn btn-sm px-5 ml-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Cancel</button>
                                    </div>
                                </div>
                                
                            </div>
                         </>
        }

        let awards = null;
        if(this.state.awards) {
            awards = <>
                            <div className="container-flui">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <small>Award Name</small>
                                        <input type="month" className="form-control form-control-sm" placeholder="First Name" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="Company Location" />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="Company Name" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <textarea className="form-control form-control-sm" placeholder="Description" style={{ 'height' : '100px' }}></textarea>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <button className="btn btn-sm px-5 mr-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Save</button>
                                        <button className="btn btn-sm px-5 ml-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Cancel</button>
                                    </div>
                                </div>
                                
                            </div>
                         </>
        }

        let influence = null;
        if(this.state.influence) {
            influence = <>
                            <div className="container-flui">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <textarea className="form-control form-control-sm" placeholder="Description" style={{ 'height' : '100px' }}></textarea>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <button className="btn btn-sm px-5 mr-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Save</button>
                                        <button className="btn btn-sm px-5 ml-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                         </>
        }
        let interests = null;
        if(this.state.interests) {
            interests = <>
                            <div className="container-flui">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <textarea className="form-control form-control-sm" placeholder="Description" style={{ 'height' : '100px' }}></textarea>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <button className="btn btn-sm px-5 mr-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Save</button>
                                        <button className="btn btn-sm px-5 ml-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                         </>
        }

        let showState = <>
                            <div className="border-bottom resume-items my-2 px-4">
                                <div className=" d-flex justify-content-between mb-3">
                                    <div>
                                        <small>Skills</small> <i class="las la-unlock px-2"></i>
                                    </div>
                                    <div onClick={this.skillsEdit}>
                                        <i class="las la-plus px-2"></i> <small>You can detail your skillset here</small>
                                    </div>
                                </div>
                                {skills}
                            </div>
                            <div className="border-bottom resume-items my-2 px-4">
                                <div className=" d-flex justify-content-between mb-3">
                                <div>
                                    <small>Experience</small> <i class="las la-unlock px-2"></i>
                                </div>
                                <div onClick={this.experienceEdit}>
                                    <i class="las la-plus px-2"></i> <small>You can add your experience here</small>
                                </div>
                                </div>
                                {experience}
                            </div>
                            <div className="border-bottom resume-items my-2 px-4">
                                <div className=" d-flex justify-content-between mb-3">
                                <div>
                                    <small>Education</small> <i class="las la-unlock px-2"></i>
                                </div>
                                <div onClick={this.educationEdit}>
                                    <i class="las la-plus px-2"></i> <small>You can add your education here</small>
                                </div>
                                </div>
                                {education}
                            </div>
                            <div className="border-bottom resume-items my-2 px-4">
                                <div className=" d-flex justify-content-between mb-3">
                                <div>
                                    <small>Location (s)</small> <i class="las la-unlock px-2"></i>
                                </div>
                                <div onClick={this.locationEdit}>
                                    <i class="las la-plus px-2"></i> <small>You can add your location here</small>
                                </div>
                                </div>
                                {location}
                            </div>
                            <div className="border-bottom resume-items my-2 px-4">
                                <div className=" d-flex justify-content-between mb-3">
                                <div>
                                    <small>Awards</small> <i class="las la-unlock px-2"></i>
                                </div>
                                <div onClick={this.awardsEdit}>
                                    <i class="las la-plus px-2"></i> <small>You can add your awards here</small>
                                </div>
                                </div>
                                {awards}
                            </div>
                            <div className="border-bottom resume-items my-2 px-4">
                                <div className=" d-flex justify-content-between mb-3">
                                <div>
                                    <small>Influence (s)</small> <i class="las la-unlock px-2"></i>
                                </div>
                                <div onClick={this.influenceEdit}>
                                    <i class="las la-plus px-2"></i> <small>You can add your influence here</small>
                                </div>
                                </div>
                                {influence}
                            </div>
                            <div className="border-bottom resume-items my-2 px-4">
                                <div className=" d-flex justify-content-between mb-3">
                                <div>
                                    <small>Interests</small> <i class="las la-unlock px-2"></i>
                                </div>
                                <div onClick={this.interestsEdit}>
                                    <i class="las la-plus px-2"></i> <small>You can specify here your artistic interests</small>
                                </div>
                                </div>
                                {interests}
                            </div>
                            <div className="my-5 text-center">
                                <button className="btn btn-sm px-5 mr-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff', 'border' : '#007BFF 1px solid' }}>Download Resume</button>
                                <Link to="/profilesettings">
                                <button className="btn btn-sm px-5 ml-2" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff', 'border' : '#007BFF 1px solid' }}><i class="las la-cogs"></i> Goto Settings</button>
                                </Link>
                            </div>
                        </>
        if(this.state.resumeOrProjects) {
            showState = <>
                            <div>
                                <div className="px-3 my-1 text-center">
                                    <button className="btn btn-sm px-5" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}><i class="las la-file-upload"></i> Upload Photos</button>
                                </div>
                                <hr className="bg-white" />
                                <div className="px-3 my-1 text-center">
                                    <button className="btn btn-sm px-5" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}><i class="las la-file-upload"></i> Upload Videos</button>
                                </div>
                                <hr className="bg-white" />
                                <div className="px-3 my-1 text-center">
                                    <button className="btn btn-sm px-5" style={{ 'backgroundColor' : '#0057B2', 'color' : '#fff' }}><i class="las la-file-upload"></i> Upload Documents</button>
                                </div>
                                <hr className="bg-white" />
                            </div>
                        </>
        }

        return(
            <div className="Step2 py-4" style={{ 'backgroundColor' : 'rgb(0, 40, 70, .5)' }}>
                <Modal mClose={this.closeModal} mShow={this.state.modalShow}>
                    <div className="text-dark px-3 py-4">
                        <h6>Upload Profile Picture</h6>
                        <hr/>
                        <form onSubmit={this.state.databaseImage == false ? this.uploadImage : this.updateUplodedImage}>
                        <label class="file">
                            <input name="uploaded_image" className="border" type="file" aria-label="File browser example" onChange={this.onUploadImageHandler} />
                            <span class="file-custom"></span>
                        </label>
                        <button 
                            className="btn btn-sm px-4 mt-3 text-white rounded-0" 
                            style={{ 'backgroundColor' : '#0250a2' }}
                            type="submit"
                            onClick={this.closeModal}
                        >
                            Upload
                        </button>
                        </form>
                        </div>
                </Modal>
                <div className="container">
                <h3 className="text-center text-white">My Profile</h3>
                    <div className="row px-5 border-top py-3 mt-3">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 text-center text-white border-right" style={{ 'position' : 'relative' }}>
                            <div className="profileStatus">
                                <i class="las la-share-alt-square"></i>
                                <i class="las la-unlock px-2"></i>
                            </div>
                            <img src={this.state.userImageName == null ? "https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" : this.state.userImageName} className="w-50 rounded-circle" />
                            <button 
                                className="btn btn-sm w-75 text-white my-3" 
                                style={{ 'backgroundColor' : '#0057b2' }}
                                name="uploadImage"
                                onClick={this.showModal}
                            >
                                <small>Upload / Update Profile Picture</small>
                            </button>
                            <br/>
                            <button 
                                className="btn btn-sm rounded-circle text-white m-0 p-0"
                                name="editUserName"
                                onClick={this.editUsersName}
                            >
                                <i class="las la-edit"></i> Edit
                            </button>
                            {this.state.editUserName ?
                                <div>
                                <form className="px-3 py-2" onSubmit={this.upDateUserName}>
                                <input 
                                    type="text" 
                                    name="userName" 
                                    className="form-control border form-control-sm text-dark"
                                    onChange={this.onInputChangehandler}
                                    value={this.props.user_name}
                                    placeholder="User Name"
                                 />
                                <button 
                                    className="btn btn-sm px-4 mt-3 text-white rounded-0" 
                                    style={{ 'backgroundColor' : '#0250a2' }}
                                    type="submit"
                                    // onClick={this.editUsersName}
                                >
                                    Save
                                </button>
                                </form>
                            </div>
                            :
                            null
                            }
                            <h4 className="mt-1">
                                {/* {this.state.UserProfile.userName == null ? "New One" : this.state.UserProfile.userName} */}
                                {this.props.usrname == null ? "New One" : this.props.usrname}
                            </h4>
                            <hr className="bg-white" />
                            <p className="p-0 m-0">0</p>
                            <small>People viewed your profile</small>
                            <hr className="bg-white" />
                            <p className="p-0 m-0">0</p>
                            <p className="p-0 m-0">Connection</p>
                            <small>Grow Your Network</small>
                            <hr className="bg-white" />
                            <table className="table text-white" style={{ 'fontSize' : '12px' }}>
                                <tr>
                                    <td><i class="las la-tags"></i></td>
                                    <td colSpan="3" className=" text-left">Sales & Marketing</td>
                                </tr>
                                <tr>
                                    <td><i class="las la-map-marker"></i></td>
                                    <td>State:</td>
                                    <td>
                                        { this.state.UserProfile.userState == null ? "No State" :  this.state.UserProfile.userState}
                                    </td>
                                    <td style={{ 'cursor' : 'pointer' }}>
                                        <i 
                                            class="las la-pen"
                                            onClick={this.editUserState}
                                        ></i>
                                    </td>
                                </tr>
                                {
                                    this.state.editUserState ?
                                    <tr>
                                        <td colSpan="4">
                                            <form className="px-3 py-2" onSubmit={this.upDateUserState}>
                                                <select 
                                                    name="userState"
                                                    className="form-control border form-control-sm text-white"
                                                    onChange={this.onInputChangehandler}
                                                >
                                                    <option selected className="text-dark">Select your State</option>
                                                    <option className="text-dark">Alabama</option>
                                                    <option className="text-dark">Alaska</option>
                                                    <option className="text-dark">Arizona</option>
                                                    <option className="text-dark">Arkansas</option>
                                                    <option className="text-dark">California</option>
                                                    <option className="text-dark">Colorado</option>
                                                    <option className="text-dark">Connecticut</option>
                                                    <option className="text-dark">Delaware</option>
                                                    <option className="text-dark">Florida</option>
                                                    <option className="text-dark">Georgia</option>
                                                    <option className="text-dark">Hawaii</option>
                                                    <option className="text-dark">Idaho</option>
                                                    <option className="text-dark">Illinois</option>
                                                    <option className="text-dark">Indiana</option>
                                                    <option className="text-dark">Iowa</option>
                                                    <option className="text-dark">Kansas</option>
                                                    <option className="text-dark">Kentucky</option>
                                                    <option className="text-dark">Louisiana</option>
                                                    <option className="text-dark">Maine</option>
                                                    <option className="text-dark">Maryland</option>
                                                    <option className="text-dark">Massachusetts</option>
                                                    <option className="text-dark">Michigan</option>
                                                    <option className="text-dark">Minnesota</option>
                                                    <option className="text-dark">Mississippi</option>
                                                    <option className="text-dark">Missouri</option>
                                                    <option className="text-dark">Montana</option>
                                                    <option className="text-dark">Nebraska</option>
                                                    <option className="text-dark">Nevada</option>
                                                    <option className="text-dark">New Hampshire</option>
                                                    <option className="text-dark">New Jersey</option>
                                                    <option className="text-dark">New Mexico</option>
                                                    <option className="text-dark">New York</option>
                                                    <option className="text-dark">North Carolina</option>
                                                    <option className="text-dark">North Dakota</option>
                                                    <option className="text-dark">Ohio</option>
                                                    <option className="text-dark">Oklahoma</option>
                                                    <option className="text-dark">Oregon</option>
                                                    <option className="text-dark">Pennsylvania</option>
                                                    <option className="text-dark">Rhode Island</option>
                                                </select>
                                                <button 
                                                    className="btn btn-sm px-4 mt-3 text-white rounded-0" 
                                                    style={{ 'backgroundColor' : '#0250a2' }}
                                                    type="submit"
                                                    // onClick={this.editUsersName}
                                                >
                                                    Save
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                    :
                                    null
                                }
                                <tr>
                                    <td><i class="las la-level-down-alt"></i></td>
                                    <td>City:</td>
                                    <td>{ this.state.UserProfile.userCity == null ? "No City" :  this.state.UserProfile.userCity}</td>
                                    <td style={{ 'cursor' : 'pointer' }}>
                                        <i 
                                            class="las la-pen"
                                            onClick={this.editUserCity}
                                        ></i>
                                    </td>
                                </tr>
                                {
                                    this.state.editUserCity ?
                                    <tr>
                                        <td colSpan="4">
                                            <form className="px-3 py-2" onSubmit={this.upDateUserCity}>
                                                <input 
                                                    type="text" 
                                                    name="userCity" 
                                                    className="form-control border form-control-sm text-white"
                                                    onChange={this.onInputChangehandler}
                                                    placeholder="User City"
                                                 />
                                                <button 
                                                    className="btn btn-sm px-4 mt-3 text-white rounded-0" 
                                                    style={{ 'backgroundColor' : '#0250a2' }}
                                                    type="submit"
                                                    // onClick={this.editUsersName}
                                                >
                                                    Save
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                    :
                                    null
                                }
                                <tr>
                                    <td><i class="las la-link"></i></td>
                                    <td>URL:</td>
                                    <td>
                                        {
                                            this.props.userurl == null ? 
                                            "Add URL"
                                            : 
                                            <a className="text-white pl-1" href={ "https:" + this.props.userurl}>
                                                { this.props.userurl }
                                            </a>
                                        }
                                    </td>
                                    <td style={{ 'cursor' : 'pointer' }}>
                                        <i 
                                            class="las la-plus"
                                            onClick=""
                                        ></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td><i class="las la-sign-out-alt"></i></td>
                                    <td>Links:</td>
                                    <td>
                                        {
                                            this.props.userfacebook == null &&
                                            this.props.usertwitter == null &&
                                            this.props.userlinkedin == null &&
                                            this.props.userpinterest == null &&
                                            this.props.usergoogle == null &&
                                            this.props.userinstagram == null ?
                                            "Add Links"
                                            :
                                            null
                                        }
                                        {
                                            this.props.userfacebook == null ? 
                                            null
                                            : 
                                            <a className="text-white pl-1" href={ "https:" + this.props.userfacebook}>
                                                <i class="lab la-facebook-f"></i>
                                            </a>
                                        }
                                        {
                                            this.props.usertwitter == null ? 
                                            null
                                            : 
                                            <a className="text-white pl-1" href={ "https:" + this.props.usertwitter}>
                                                <i class="lab la-twitter"></i>
                                            </a>
                                        }
                                        {
                                            this.props.userlinkedin == null ? 
                                            null
                                            : 
                                            <a className="text-white pl-1" href={ "https:" + this.props.userlinkedin}>
                                                <i class="lab la-linkedin"></i>
                                            </a>
                                        }
                                        {
                                            this.props.userpinterest == null ? 
                                            null
                                            : 
                                            <a className="text-white pl-1" href={ "https:" + this.props.userpinterest}>
                                                <i class="lab la-pinterest"></i>
                                            </a>
                                        }
                                        {
                                            this.props.usergoogle == null ? 
                                            null
                                            : 
                                            <a className="text-white pl-1" href={ "https:" + this.props.usergoogle}>
                                                <i class="lab la-google-plus-g"></i>
                                            </a>
                                        }
                                        {
                                            this.props.userinstagram == null ? 
                                            null
                                            : 
                                            <a className="text-white pl-1" href={ "https:" + this.props.userinstagram}>
                                                <i class="lab la-instagram"></i>
                                            </a>
                                        }
                                    </td>
                                    <td style={{ 'cursor' : 'pointer' }}>
                                        <i 
                                            class="las la-plus"
                                            onClick=""
                                        ></i>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 text-center text-white right-cols">
                            <button className="btn btn-sm text-white navigation-btn" onClick={this.resumeOn}>Resume</button>
                            <button className="btn btn-sm text-white navigation-btn" onClick={this.projectsOn}>Projects</button>
                            <hr className="bg-white" />
                            {showState}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.authenticate,
        usrname: state.user_name,
        usrfname: state.user_f_name,
        usrlname: state.user_l_name,
        user_city: state.user_city,
        user_state: state.user_state,
        user_country: state.user_country,
        user_gender: state.user_gender,
        user_d_birth: state.user_d_birth,
        user_email: state.user_email,
        userfacebook: state.facebook,
        usertwitter: state.twitter,
        userlinkedin: state.linkedin,
        userpinterest: state.pinterest,
        usergoogle: state.google,
        userinstagram: state.instagram,
        userurl: state.url,
    };
}

const mapDispatchToProps = dispatch => {
  return {
      onUserDetailsUpdate : (field, value) => dispatch({type: actionsTypes.UPDATE_USER_DETAILS, [field]:value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);