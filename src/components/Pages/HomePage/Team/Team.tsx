import React from 'react';

function Team(props) {
    return (
        <div className="team max-w-screen-xl mx-auto pt-24 pb-24 flex justify-end font-grotesk-light">
            <div className="w-11/12 grid gap-y-24">
                <h2 className="text-6xl leading-[5.5rem] text-white opacity-90">Команда</h2>
                <div className="team__els team__els3d w-4/12 h-[600px] relative top-[50%] left-[50%] flex items-center text-center">
                    <div id="team_el1" className="team_el">
                        <img src="assets/images/home/team-char.png" />
                        <h3>CHIEF EXECUTIVE OFFICER</h3>
                    </div>
                    <div id="team_el2" className="team_el">
                        <img src="assets/images/home/team-char3.png" />
                        <h3>TEAM LEAD</h3>
                    </div>
                    <div id="team_el3" className="team_el">
                        <img src="assets/images/home/team-char2.png" />
                        <h3>UI / UX DESIGNER</h3>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Team;