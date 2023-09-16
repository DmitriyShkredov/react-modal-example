import React, { useState } from "react";
import { CustomModal } from "../CustomModal/CustomModal";
import smartphone from "./smartphone.png";
import "./Main.css";

export const Main = () => {
  const [modalPrizeIsOpen, setModalPrizeOpen] = useState(false);
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  const [modalDataIsOpen, setModalDataOpen] = useState(false);

  return (
    <main className="main">
      <section className="section">
        <button
          className="modal-show-button"
          onClick={() => setModalPrizeOpen(true)}
        >
          Modal Prize
        </button>

        <button
          className="modal-show-button"
          onClick={() => setModalInfoOpen(true)}
        >
          Modal Info
        </button>

        <button
          className="modal-show-button"
          onClick={() => setModalDataOpen(true)}
        >
          Modal Data
        </button>

        <CustomModal
          isOpen={modalPrizeIsOpen}
          onClose={() => setModalPrizeOpen(false)}
          submitButton="Спасибо"
        >
          <h2>Поздравляем!</h2>
          <p>Вы выиграли уникальный смартфон</p>
          <img src={smartphone} alt="" />
        </CustomModal>

        <CustomModal
          isOpen={modalInfoIsOpen}
          onClose={() => setModalInfoOpen(false)}
          submitButton="ОК"
        >
          <h2>Ваше сообщение отправлено</h2>
          <p>Мы свяжемся с вами в течение двух рабочих дней</p>
        </CustomModal>

        <CustomModal
          isOpen={modalDataIsOpen}
          onClose={() => setModalDataOpen(false)}
        >
          <h2>Внимание!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            ex officiis voluptatum eum culpa, laboriosam eius similique,
            pariatur id suscipit ad commodi itaque facere earum nulla nihil
            ipsam voluptates. Quisquam labore omnis nisi aliquam fugit debitis
            optio delectus, totam atque, cumque reprehenderit cum nam est at
            dolorum corrupti exercitationem, dicta magni nostrum tempore!
            Eligendi nulla enim quae molestiae, veniam laboriosam, quas quaerat,
            eaque libero voluptatum nemo aut illo modi mollitia quisquam eum
            beatae porro vero laudantium ipsa labore ipsum error! Harum aut
            suscipit ipsa voluptates esse dignissimos a repudiandae vero eum
            officiis rerum iusto hic placeat tempora nostrum, quas optio
            repellat. Quibusdam laudantium facere autem accusamus veniam minus,
            atque nulla porro natus totam recusandae aliquid earum harum id, sed
            repudiandae, iste similique commodi. Sed quaerat doloribus,
            accusantium recusandae sapiente ab explicabo facilis quas nesciunt
            consequatur molestias sit. Expedita sunt minima, tenetur magnam
            fugiat saepe doloribus placeat distinctio, animi optio nulla!
          </p>
        </CustomModal>
      </section>
    </main>
  );
};
