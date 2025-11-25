// App.jsx — с двумя выпадающими меню
import React, { useState, useRef } from "react";
import "./App.css";

// Используем внешние URL вместо локальных изображений
const shapka = "https://i.imgur.com/7Z3JY6P.jpeg";

export default function App() {
  // Для первого выпадающего меню (Вакуумные сушильные камеры)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Для второго выпадающего меню (Комплектующие для сушильных камер)
  const [isPartsDropdownOpen, setIsPartsDropdownOpen] = useState(false);
  const partsButtonRef = useRef(null);
  const partsMenuRef = useRef(null);

  // Обработчики для первого меню
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      if (menuRef.current) {
        menuRef.current.style.top = `${rect.bottom + window.scrollY}px`;
        menuRef.current.style.left = `${rect.left + window.scrollX}px`;
        menuRef.current.style.width = `${rect.width}px`;
      }
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Обработчики для второго меню
  const handlePartsMouseEnter = () => {
    if (partsButtonRef.current) {
      const rect = partsButtonRef.current.getBoundingClientRect();
      if (partsMenuRef.current) {
        partsMenuRef.current.style.top = `${rect.bottom + window.scrollY}px`;
        partsMenuRef.current.style.left = `${rect.left + window.scrollX}px`;
        partsMenuRef.current.style.width = `${rect.width}px`;
      }
      setIsPartsDropdownOpen(true);
    }
  };

  const handlePartsMouseLeave = () => {
    setIsPartsDropdownOpen(false);
  };

  return (
    <div className="app">
      {/* Шапка */}
      <header className="header">
        <img src={shapka} alt="Оборудование" className="header-img" />
      </header>

      {/* Навигационное меню */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="#about">О компании</a>
          </li>

          {/* Первое выпадающее меню: Вакуумные сушильные камеры */}
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button ref={buttonRef} className="nav-button">
              Вакуумные сушильные камеры
            </button>
            {isDropdownOpen && (
              <div
                ref={menuRef}
                className="dropdown-menu show"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#vsk">Вакуумные сушильные камеры ВСК</a>
                <a href="#vsk-thermo">
                  Вакуумные сушильные камеры ВСК-Т (термо)
                </a>
                <a href="#pvsk">Пресс-вакуумные сушильные камеры ПВСК</a>
                <a href="#pvsk-thermo">
                  Пресс-вакуумные сушильные камеры ПВСК-Т (термо)
                </a>
                <a href="#press">Вакуумный пресс для склейки древесины</a>
              </div>
            )}
          </li>

          {/* Второе выпадающее меню: Комплектующие для сушильных камер */}
          <li
            className="dropdown"
            onMouseEnter={handlePartsMouseEnter}
            onMouseLeave={handlePartsMouseLeave}
          >
            <button ref={partsButtonRef} className="nav-button">
              Комплектующие для сушильных камер
            </button>
            {isPartsDropdownOpen && (
              <div
                ref={partsMenuRef}
                className="dropdown-menu show"
                onMouseEnter={handlePartsMouseEnter}
                onMouseLeave={handlePartsMouseLeave}
              >
                <a href="#system">Система управления</a>
                <a href="#vacuum">Система вакуумирования</a>
                <a href="#condensate">Конденсатоотводчик</a>
                <a href="#condenser">Конденсатор</a>
                <a href="#boiler">Электрический котел</a>
                <a href="#heater">Нагревательная панель</a>
              </div>
            )}
          </li>
          {/* Третье выпадающее меню: Изделия из древесины */}
          <li
            className="dropdown"
            onMouseEnter={handlePartsMouseEnter}
            onMouseLeave={handlePartsMouseLeave}
          >
            <button ref={partsButtonRef} className="nav-button">
              Изделия из древесины
            </button>
            {isPartsDropdownOpen && (
              <div
                ref={partsMenuRef}
                className="dropdown-menu show"
                onMouseEnter={handlePartsMouseEnter}
                onMouseLeave={handlePartsMouseLeave}
              >
                <a href="#system">Дома</a>
                <a href="#vacuum">Бани</a>
                <a href="#condensate">Теплицы</a>
                <a href="#condenser">Беседки</a>
                <a href="#boiler">Инженерная доска</a>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={handlePartsMouseEnter}
            onMouseLeave={handlePartsMouseLeave}
          >
            <button ref={partsButtonRef} className="nav-button">
              Клиентам
            </button>
            {isPartsDropdownOpen && (
              <div
                ref={partsMenuRef}
                className="dropdown-menu show"
                onMouseEnter={handlePartsMouseEnter}
                onMouseLeave={handlePartsMouseLeave}
              >
                <a href="#system">Контакты</a>
                <a href="#vacuum">Реквизиты</a>
                <a href="#condensate">Информация</a>
                <a href="#condenser">Часто задаваемые вопросы</a>
                <a href="#boiler">Партнеры</a>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={handlePartsMouseEnter}
            onMouseLeave={handlePartsMouseLeave}
          >
            <button ref={partsButtonRef} className="nav-button">
              Наше оборудование
            </button>
            {isPartsDropdownOpen && (
              <div
                ref={partsMenuRef}
                className="dropdown-menu show"
                onMouseEnter={handlePartsMouseEnter}
                onMouseLeave={handlePartsMouseLeave}
              >
                <a href="#system">Лазерный сварочный аппарат</a>
                <a href="#vacuum">Лазерный аппарат для чистки металла</a>
                <a href="#condensate">Лазерная резка металла</a>
              </div>
            )}
          </li>
          <li>
            <a href="#video">Видео обзор</a>
          </li>
          <li>
            <a href="#blog">Блог</a>
          </li>
        </ul>
      </nav>

      {/* Основной макет */}
      <div className="main-layout">
        <aside className="sidebar">
          <h3>Product categories</h3>
          <ul>
            <li>
              <a href="#laser-marking">Laser Marking Machine</a>
            </li>
            <li>
              <a href="#fiber-co2">Fiber CO2 laser cutting machine</a>
            </li>
            <li>
              <a href="#bending">Bending machine</a>
            </li>
            <li>
              <button className="dropdown-btn">
                CNC plasma cutter <span className="arrow">▶</span>
              </button>
            </li>
            <li>
              <a href="#robot">Industrial Robot</a>
            </li>
            <li>
              <button className="dropdown-btn">
                Fiber laser cutting machine <span className="arrow">▶</span>
              </button>
            </li>
            <li>
              <button className="dropdown-btn">
                Fiber laser welding machine <span className="arrow">▶</span>
              </button>
            </li>
            <li>
              <a href="#plastering">Plastering machine</a>
            </li>
            <li>
              <a href="#rebar">Rebar bending machine</a>
            </li>
            <li>
              <button className="dropdown-btn">
                Spare parts <span className="arrow">▶</span>
              </button>
            </li>
            <li>
              <a href="#catheter">Small Catheter Product</a>
            </li>
            <li>
              <a href="#ungrouped">Ungrouped</a>
            </li>
          </ul>
        </aside>

        <main className="main-content">
          <div className="product-grid">
            <div className="product-card">
              <img
                src="https://via.placeholder.com/300x300?text=Лазер+1"
                alt="Лазерная машина"
              />
              <h4>Лазерная машина</h4>
            </div>
            <div className="product-card">
              <img
                src="https://via.placeholder.com/300x300?text=Робот+2"
                alt="Промышленный робот"
              />
              <h4>Промышленный робот</h4>
            </div>
            <div className="product-card">
              <img
                src="https://via.placeholder.com/300x300?text=Плазма+3"
                alt="Плазменный резак"
              />
              <h4>Плазменный резак</h4>
            </div>
            <div className="product-card">
              <img
                src="https://via.placeholder.com/300x300?text=ЧПУ+4"
                alt="CNC станок"
              />
              <h4>CNC станок</h4>
            </div>
          </div>
        </main>
      </div>

      {/* Подвал */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ваша компания</p>
      </footer>
    </div>
  );
}
