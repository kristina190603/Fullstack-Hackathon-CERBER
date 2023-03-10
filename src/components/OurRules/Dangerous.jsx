import React from "react";
import Rule from "../storage/rules.jpg";
import "../OurRules/Dangerous.css";
import NavbarCustom from "../navbar/Navbar";
const Dangerous = () => {
  return (
    <div>
      <NavbarCustom/>
      <img id="rule" src={Rule} alt="" />
      <p className="titleRule">ОПАСНО!</p>

      <div className="d-flex">
        <h4>Опасность заражения вредоносным ПО</h4>
        <p>
          При использовании даркнета вы рискуете стать жертвой кибератак, в том
          числе DDoS-атак, ботнетов и прочего вредоносного ПО и вирусов. Вы
          можете установить опасный вирус или вредоносное ПО просто введя
          неверный URL или случайно скачав вредоносный файл. Это может серьёзно
          навредить вашему устройству, или ещё хуже, подвергнуть риску ваши
          персональные данные.
        </p>
        <h4>Опасная деятельность</h4>
        <p>
          Дом для многих преступных видов деятельности, начиная с использования
          поддельных документов и заканчивая торговлей наркотиками и оружием.
          Более того, в этой сети также есть наёмные убийцы, детская порнография
          и даже онлайн-трансляции убийств. Если вы случайно окажетесь на одной
          из таких страниц и кто-либо узнает об этом,вам могут предъявить за это
          обвинения.
        </p>
        <h4>Мошеннические сайты</h4>
        <p>
          Хакеры в даркнете могут без труда завладеть вашими персональными
          данными при помощи троянов, фишинга и прочих мошеннических сайтов и
          программ. Иногда нужно лишь один раз не туда нажать мышкой, и ваша
          информация утечёт с вашего компьютера в сеть. Хуже того, некоторые
          киберпреступники умеют включать камеры и микрофоны компьютера, чтобы
          включать прямые трансляции с ничего не подозревающими жертвами.
        </p>

        <p>
          У большинства ссылок в даркнете неизвестные названия, поэтому
          пользователям легко совершить ошибку, что подвергает опасности личные
          файлы, финансовые данные, нажатия на клавиши и другую персональную
          информацию.
        </p>
       <h4>Слежка</h4>
        <p>
          В попытке выйти на преступные организации, работающие в даркнете,
          власти создают поддельные сайты и следят за потенциально преступной
          деятельностью. Таким образом, они получают доступ ко всем, кто
          посещает такие сайты, в том числе к вам, если вы случайно зайдёте на
          этот сайт. В некоторых странах даже использование браузера Tor может
          заинтересовать такие службы, и неважно, что вы не совершаете ничего
          незаконного. Не забывайте, что Tor создан правительством США, поэтому
          вполне вероятно, что правительство осуществляет слежку. Лучший способ
          не вызывать интерес у государственных органов при просмотре сайтов –
          не посещать никакие сайты, связанные с незаконной деятельностью – это
          ещё одна причина посещать только надёжные сайты после их изучения.
        </p>
        <h5>
          НО ТАК КАК ВЫ ПОПАЛИ УЖЕ НА НАШ САЙТ ПО РАССЫЛКЕ, МОЖЕТЕ НЕ ПЕРЕЖИВАТЬ
          ПО ПОВОДУ ВСЕХ ПУНКТОВ ^^{" "}
        </h5>
      </div>
    </div>
  );
};

export default Dangerous;
