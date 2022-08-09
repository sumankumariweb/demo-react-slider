import React, {Component} from "react";
export default class Slider extends Component{
    render(){
        return(
            <React.Fragment>
                
                <div className="home-demo">
  
                    <div className="owl-carousel owl-theme" id="new_slider">
                        <div className="item">
                        <picture>
                        <img srcSet="/img/banner3.jpg" alt="" />
                        </picture>
                        </div>
                        <div className="item">
                        <picture>
                            <img srcSet="/img/banner3.jpg" alt="" />
                        </picture>
                        </div>
                        <div className="item">
                        <picture>
                        <img srcSet="/img/banner3.jpg" alt="" />
                        </picture>
                        </div>
                    </div>            
                </div>
                <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos fuga placeat reiciendis cum at harum expedita assumenda! Illum officiis deserunt odit, dicta impedit voluptate, accusantium quas voluptas rem error eligendi!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit earum impedit suscipit veritatis adipisci modi odit sed itaque, voluptate, porro cumque velit cupiditate tenetur. Officiis est sunt fugiat rem!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit earum impedit suscipit veritatis adipisci modi odit sed itaque, voluptate, porro cumque velit cupiditate tenetur. Officiis est sunt fugiat rem!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit earum impedit suscipit veritatis adipisci modi odit sed itaque, voluptate, porro cumque velit cupiditate tenetur. Officiis est sunt fugiat rem!</p>
                               
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-img">
                                <img srcSet="/img/about-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
           
            
           
            
            
            </React.Fragment>
        )
    }
}