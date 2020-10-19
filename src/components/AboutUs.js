import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <NavLink className="aboutUs__back" to="/">
        Home
      </NavLink>
      <div className="aboutUs__foto"></div>
      <div className="aboutUs__logo"></div>
      <div className="aboutUs__description">
        <h1 className="aboutUs__description__header">ABOUT US</h1>
        <div></div>
        <p className="aboutUs__description__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
          natus. Sequi, mollitia vitae. Enim molestiae animi, quo iusto
          excepturi, impedit expedita quas aut eaque iure veniam non aliquam
          harum quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi incidunt provident ducimus ipsum similique, omnis magni aliquid,
          ea labore tenetur, laboriosam consequuntur. Dolor, beatae sunt. Minima
          sit deserunt voluptatibus voluptas.
        </p>
        <p className="aboutUs__description__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel odio
          numquam, quidem magnam voluptate temporibus delectus sit fuga deleniti
          porro soluta voluptates labore facilis quos asperiores exercitationem
          a ducimus magni. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quidem reiciendis minus quo repellendus cum neque sint ad sunt
          provident sit rerum obcaecati corporis, modi tempore temporibus fuga.
          Sint, voluptates eos.
        </p>
        <p className="aboutUs__description__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          quibusdam harum nostrum itaque, possimus esse perspiciatis
          consequatur, quidem aspernatur rem, magnam dicta voluptatem vitae
          quaerat asperiores consequuntur hic quam. Magnam? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Accusamus laborum modi aperiam
          possimus laudantium sapiente obcaecati, nemo repudiandae eius. Placeat
          tempora aperiam eos voluptate doloremque enim. Ratione, natus ex!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
