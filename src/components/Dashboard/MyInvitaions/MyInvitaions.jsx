import React, { Component } from 'react';
import InvitaionItem from './InvitaionItem/InvitaionItem';

import './MyInvitaions.css';

class MyInvitaions extends Component {

    render() {
        return(
            <div className="MyInvitaions text-white">
            <div className="mentor_circle text-center">
                My Invitaions
            </div>
                <InvitaionItem personName="Pankaj" links="/personinbox" />
                <InvitaionItem personName="Pankaj" links="/personinbox" />
                <InvitaionItem personName="Pankaj" links="/personinbox" />
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 text-left offset-xl-2 offset-lg-2">
                            <p>
                                <b>Disclaimer:</b> Gomentors is not liable for any protected company
                                information if divalulged during mentors/mentee interactions.
                                By initiating contact, mentors and mentees agree that such protected
                                information will not be exchanged between the two including but not limited
                                to any intellectual property, timeline, product/service launch information, 
                                internal company decisions, organizational charts and personnal records
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MyInvitaions;