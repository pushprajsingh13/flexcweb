import React from "react";
import { Col, Row } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { appConfig } from "@/utils/app-config";
import "./WelcomeSection.css";

const WelcomeSection = (props) => {

  return (
    <div id="welcome-section" className="blue-layer-bg-welcome fc-web2-container">
      <div
        className="welcome-page d-flex align-items-center justify-content-center"
        style={{ zIndex: 9999, bottom: 0 }}
      >
        <div className="container">
          {/* <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="">
              <a href="/" className="">
                <img 
                className=""
                  src={getAppLogo()}
                  width="100"
                  height="31"
                  alt={`${appConfig.APP_NAME} - Hire & Manage Your Hybrid Workforce Online`}
                  title={appConfig.APP_NAME}
                  style={{position:"fixed", top:"1.5rem", left:"1.5rem"}}
                />
              </a>
            </Col>
          </Row> */}
          <Row className="welcome-main-row">
            <Col xs={12} sm={12} md={12} lg={12} className="text-center">
              {/* <h1 className="font-weight-700 text-dark-1 m-0">
                Welcome to {appConfig.APP_NAME}
              </h1> */}
              <h3 className="text-3xl lg:text-6xl font-bold mb-3">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Redefining future of workforce</span>
              </h3>
              <h4 className="text-foreground m-0">
                New here? Tell us who you are to let {appConfig.APP_NAME} customize your
                experience.
              </h4>
            </Col>
          </Row>
          <Row
            className="d-flex flex-row flex-wrap mt-3 mb-1"
            style={{ position: "relative" }}
          >
            <div
              className="bg_gradient_div_welcome_page"
            ></div>
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <a href="https://flexc.work/talent" target="_blank" rel="noopener noreferrer">
                <button
                  className="m-0 welcome-page-button text-center"
                  style={{ background: "none", border: "none" }}
                  onClick={props.setConsultant}
                >
                    <div className="welcome-slogans welcome-consultant-slogan text-left">
                      Find exciting work opportunities
                    </div>
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    animationInDelay={300}
                    animationInDuration={1200}
                  >
                    <img
                      className="welcome-page-image"
                      src="https://flexcblobstoragelive.blob.core.windows.net/apublic/home/consultant.svg"
                      alt="consultant"
                    />
                  </Animated>
                </button>
              </a>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <a href="https://flexc.work/enterprise" target="_blank" rel="noopener noreferrer">
                <button
                  className="h4 font-weight-600 text-dark-1 m-0 welcome-page-button text-center"
                  style={{ background: "none", border: "none" }}
                  onClick={props.setOrganization}
                >
                    <div className="welcome-slogans welcome-org-slogan">
                      Hire and <br />
                      manage your <br />
                      agile workforce
                    </div>
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    animationInDelay={600}
                    animationInDuration={1200}
                  >
                    <img
                      className="welcome-page-image"
                      src="https://flexcblobstoragelive.blob.core.windows.net/apublic/home/organization.svg"
                      alt="organizations"
                    />
                  </Animated>
                </button>
              </a>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <a href="https://flexc.work/recruiter" target="_blank" rel="noopener noreferrer">
                <button
                  className="h4 font-weight-600 text-dark-1 m-0 welcome-page-button text-center"
                  style={{ background: "none", border: "none" }}
                  onClick={props.setHrAgency}
                >
                    <div className="welcome-slogans welcome-hr-slogan">
                      Become a {appConfig.APP_NAME} Recruitment Partner
                    </div>
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    animationInDelay={900}
                    animationInDuration={1200}
                  >
                    <img
                      className="welcome-page-image"
                      src="https://flexcblobstoragelive.blob.core.windows.net/apublic/home/hr_agency.svg"
                      alt="hr_agency"
                    />
                  </Animated>
                </button>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <a href="https://flexc.work/talent" target="_blank" rel="noopener noreferrer">
                <button
                  className="h4 font-weight-600 text-dark-1 m-0 welcome-page-button text-center"
                  style={{ background: "none", border: "none" }}
                  onClick={props.setConsultant}
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    animationInDelay={300}
                    animationInDuration={1200}
                  >
                     <span className="text-foreground  font-new">
                      Professional
                    </span>
                  </Animated>
                </button>
              </a>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <a href="https://flexc.work/enterprise" target="_blank" rel="noopener noreferrer">
                <button
                  className="h4 font-weight-600 text-dark-1 m-0 welcome-page-button text-center"
                  style={{ background: "none", border: "none" }}
                  onClick={props.setOrganization}
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    animationInDelay={600}
                    animationInDuration={1200}
                  >
             <span className="text-foreground  font-new">
               Organization
             </span>
                  </Animated>
                </button>
              </a>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <a href="https://flexc.work/recruiter" target="_blank" rel="noopener noreferrer">
                <button
                  className="h4 font-weight-600 text-dark-1 m-0 welcome-page-button text-center"
                  style={{ background: "none", border: "none" }}
                  onClick={props.setHrAgency}
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    animationInDelay={900}
                    animationInDuration={1200}
                  >
                    <span  className="text-foreground  font-new">
                      Recruiter
                    </span>
                  </Animated>
                </button>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
