import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globalStyles.css";
import "../styles/PagosDiferidos.css";
import banner_1 from "../assets/banner_1.jpeg";
import cel1 from "../assets/cel 1.webp";
import cel2 from "../assets/cel 2.webp";
import cel3 from "../assets/cel 3.webp";
import cel4 from "../assets/cel 4.webp";

const PagosDiferidosPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [cel1, cel2, cel3, cel4];
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       changeimage();
  //     }, 3000);
  //     return () => clearInterval(intervalId);
  //   }, []);

  const changeimage = () => {
    setCurrentImage(currentImage < images.length - 1 ? currentImage + 1 : 0);
  };

  return (
    <div className="marginNav">
      <NavBar />
      <div className="bannerContainer">
        <img src={banner_1} className="imageBanner" />
        <div className="bannerTitle">
          <span className="title medium">Pagos</span>
          <br />
          <span className="title bold">Diferidos</span>
        </div>
      </div>
      <div className="bodyPadding">
        <span className="bodytext">
          Con <span className="bold">RappiCard</span> divide tus compras en
          <br /> <span className="bold">cómodas mensualidades</span> desde la
          app y olvídate del pago único.
        </span>
        <div className="bannerMeses">
          <p>
            <span className="bold">Simplifica tus compras</span> y tu vida
            financiera difiriendo tus compras en cómodas cuotas de 3, 6, 9, 12,
            15 y <span className="bold">hasta 18 meses!</span>
            <br />
            <br />
            <p className="caption">
              Recuerda que esta opción se aplica a compras mayores a $500.
            </p>
          </p>
        </div>
        <div className="bannerSteps">
          <div style={{ flex: 2 }}>
            <p className="title bold">Conoce cómo diferir tu compra </p>
            <div
              className="flexCenter cel1"
              onMouseEnter={() => setCurrentImage(0)}
            >
              <span className="step bold">1</span>
              <p className="stepText">
                Ingresa a la app, accede a la compra mayor a $500 que quieres
                diferir
              </p>
            </div>
            <div
              className="flexCenter cel2"
              onMouseEnter={() => setCurrentImage(1)}
            >
              <span className="step bold">2</span>
              <p className="stepText">Selecciona “Cambiar mensualidades</p>
            </div>
            <div
              className="flexCenter cel3"
              onMouseEnter={() => setCurrentImage(2)}
            >
              <span className="step bold">3</span>
              <p className="stepText">Elige el plazo más cómodo</p>
            </div>
            <div
              className="flexCenter cel4"
              onMouseEnter={() => setCurrentImage(3)}
            >
              <span className="step bold">4</span>
              <p className="stepText">Confirma los detalles</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src={images[currentImage]} />
          </div>
        </div>
        <p className="titleSection">
          Aprende cómo diferir con los siguientes títulos
        </p>
        <div className="links">
          <div className="link" />
          <div className="link" />
          <div className="link" />
          <div className="link" />
          <div className="link" />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default PagosDiferidosPage;
