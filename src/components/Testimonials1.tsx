import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Testimonials1.module.css";

export type Testimonials1Type = {
  className?: string;
};

const Testimonials1: FunctionComponent<Testimonials1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onTestimonialBackgroundClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.testimonialContent}>
        <div
          className={styles.testimonialBackground}
          onClick={onTestimonialBackgroundClick}
        />
        <div className={styles.cards}>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img@2x.png"
            />
          </div>
          <img
            className={styles.cardBackgroundIcon}
            loading="lazy"
            alt=""
            src="/rectangle-12@2x.png"
          />
          <input className={styles.testimonialCard} type="text" />
          <input className={styles.testimonialCard1} type="text" />
          <input className={styles.testimonialCard2} type="text" />
        </div>
        <div className={styles.text} onClick={onTestimonialBackgroundClick}>
          Adicionar Imagem
        </div>
        <div className={styles.text1}>Fazer Upload</div>
        <div className={styles.text2}>Nome Imagem:</div>
        <div className={styles.text3}>Procedimento Realizado:</div>
        <div className={styles.text4}>Texto Alternativo: *</div>
        <div className={styles.text5}>* Campos Obrigatórios</div>
      </div>
    </section>
  );
};

export default Testimonials1;