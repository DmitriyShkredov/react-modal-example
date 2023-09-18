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
          submitButton="Ок"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            consectetur porro nihil commodi dolor laborum inventore facere
            consequatur ea ratione voluptatem quisquam, voluptas, error
            doloribus quam perspiciatis reprehenderit aliquid impedit, repellat
            doloremque. Iste nobis, ratione pariatur corrupti adipisci
            voluptatibus iure aliquid. Earum consectetur eum reprehenderit
            doloremque eligendi maiores, fugiat voluptates error nisi rem, iste
            modi nam repudiandae beatae sint harum totam soluta placeat quos
            dolores iusto, magnam sequi suscipit ut! Dolorem vel voluptas illum
            soluta. Odio, voluptatum dolor illo, deserunt doloribus illum earum
            voluptate quasi animi accusamus quisquam suscipit corporis sit
            dignissimos inventore obcaecati repellendus? Praesentium quidem eos
            vitae corporis ipsum qui a perferendis asperiores hic adipisci ex
            voluptate veritatis mollitia ratione nisi ab enim harum, obcaecati
            quam tenetur expedita odio. Excepturi impedit necessitatibus quos
            placeat ex tempora, voluptas pariatur maxime. Ipsam doloremque,
            repellat reprehenderit necessitatibus laudantium delectus suscipit
            accusantium beatae unde quam? Distinctio eum tempora laborum ratione
            provident. Minima?
          </p>
        </CustomModal>
      </section>
    </main>
  );
};
