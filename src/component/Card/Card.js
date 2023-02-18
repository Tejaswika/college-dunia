import React, { Component } from 'react';
import './Card.css';
import { FaImage, FaYoutube, FaLandmark, FaMapPin, FaCheckCircle, FaEdit, FaDownload } from 'react-icons/fa';

class CollegeCard extends Component {
    render() {
        const toIndianCurrency = (num) => {
            const curr = num.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });
            return curr;
        };
        return (
            <div className="Card">
                <div className='BackGround'>
                    <img src={this.props.college.background} className='ImgBackGround' alt="Background Image" />
                    <div className='BackgroundEffect'>
                        <div className='BackGroundIcon'>
                            <div className='BackGroundIconLeft'>
                                <div className='IconWrapper'><FaImage /> {this.props.college.album}</div>
                                <div className='IconWrapper'><FaYoutube /> {this.props.college.video}</div>
                            </div>
                            <div className='BackGroundIconRight'>
                                <FaLandmark />
                                <div className='BackGroundRating'>
                                    <p>COLLEGEDUNIA RATING</p>
                                    <p>{this.props.college.rating}/10</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='CollegeDetails'>
                    <img src={this.props.college.logo} className='Logo' alt="College Logo" />
                    <div className='CollegeName'>
                        <h1>{this.props.college.college}</h1>
                        <p><FaMapPin /> &nbsp;{this.props.college.address}&nbsp; &nbsp;<FaCheckCircle />&nbsp; ACITE</p>

                    </div>
                </div>
                <div className='Rating'>
                    <div className='SubRanking' style={{ borderRight: "0.5px solid black" }}>
                        <h1> ₹ {this.props.college.fees}</h1>
                        <h3> BE/B.TECH - FIRST YEAR FEES</h3>
                    </div>
                    <div className='SubRanking'>
                        <h1> {this.props.college.userReview} / 10</h1>
                        <h3> BASED ON 415 USER REVIEW</h3>
                    </div>
                </div>
                <div className='Ranking'>
                    <p>
                        RANKED {this.props.college.rankNIRF} OUT OF 300 <br /> <b>NIRF</b>
                    </p>
                    <p>
                        RANKED {this.props.college.rankWeek} OUT OF 216 <br /> <b>THE WEEK</b>
                    </p>
                </div>
                <div className='Bar'>
                    <h3>ADMISSION 2022</h3>
                    <h3>REVIEWS</h3>
                    <h3>COURSES & FEES</h3>
                </div>
                <div className='ButtonWrapper'>
                    <button className='ButtonApply'>
                        <FaEdit /> APPLY NOW
                    </button>
                    <button className='ButtonBrochure'>
                        <FaDownload />BROCHURE
                    </button>
                </div>
            </div>
        );
    }
}
export default CollegeCard;