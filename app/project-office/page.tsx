import type { Metadata } from "next";
import Link from "next/link";
import { evidence, platformStory, projectOfficeProfile, resultFormats, skdParticipation, softwareGroups, trajectory, workStages } from "../../data/projectOffice";
import "./project-office.css";

export const metadata: Metadata = {
  title: "Иван Иващенко — исследователь и разработчик научных инструментов",
  description: "Проектный профиль Ивана Иващенко: 3D-клеточная платформа, программы для анализа экспериментальных данных, патент и грантовый проект.",
  alternates: { canonical: "/project-office" },
  openGraph: { type: "profile", locale: "ru_RU", url: "/project-office", title: "Иван Иващенко — проектный профиль", description: "3D-культивирование, инженерное проектирование и программы для анализа экспериментальных данных.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Иван Иващенко — научно-технологические проекты" }] },
  twitter: { card: "summary_large_image", title: "Иван Иващенко — проектный профиль", description: "Исследовательские проекты и разработанные программы для ЭВМ.", images: ["/og.png"] },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ProjectOfficePage() {
  return <div className="po-page" id="top">
    <header className="po-header">
      <a className="po-brand" href="#top" aria-label="В начало страницы"><span>ИИ</span><b>{projectOfficeProfile.name}</b></a>
      <nav aria-label="Навигация проектного профиля"><a href="#projects">Проекты</a><a href="#process">Подход</a><a href="#results">Опыт и результаты</a><Link href="/">Академический профиль</Link></nav>
      <details className="po-mobile-nav"><summary>Меню</summary><div><a href="#projects">Проекты</a><a href="#process">Подход</a><a href="#results">Опыт и результаты</a><Link href="/">Академический профиль</Link></div></details>
    </header>

    <main>
      <section className="po-hero" aria-labelledby="po-title">
        <div className="po-hero-copy"><p className="po-eyebrow">{projectOfficeProfile.eyebrow}</p><h1 id="po-title">{projectOfficeProfile.title}</h1><p className="po-name">{projectOfficeProfile.role}</p><p className="po-lead">{projectOfficeProfile.lead}</p><div className="po-actions"><a className="po-button" href="#projects">Проекты <Arrow /></a><a className="po-text-link" href="#results">Опыт и результаты ↓</a></div></div>
        <div className="po-hero-visual" role="img" aria-label="Схема работы: форма для микролунок, клеточный сфероид, анализ данных и результат">
          <div className="po-visual-step po-form-step"><span>Форма</span><div className="po-wells">{Array.from({length:24},(_,i)=><i key={i}/>)}</div></div>
          <i className="po-visual-arrow a1" aria-hidden="true">→</i>
          <div className="po-visual-step po-spheroid-step"><span>Сфероид</span><i/></div>
          <i className="po-visual-arrow a2" aria-hidden="true">→</i>
          <div className="po-visual-step po-analysis-step"><span>Анализ</span><div><i/><i/><i/><i/></div></div>
          <i className="po-visual-arrow a3" aria-hidden="true">←</i>
          <div className="po-result-step"><span>Результат</span><b>измерения<br/>и сравнение</b></div>
        </div>
      </section>

      <section className="po-section" id="projects">
        <header className="po-section-head"><p className="po-eyebrow">Основной проект</p><h2>3D-клеточная платформа</h2><p>Разработка платформы для формирования воспроизводимых клеточных сфероидов объединила проектирование микролунок, изготовление форм, лабораторную проверку и анализ результатов.</p></header>
        <article className="po-flagship">
          <div className="po-case-title"><span>Проектный опыт</span><h3>Форма, клеточная модель и анализ данных в одном рабочем процессе</h3></div>
          <div className="po-case-visual" aria-hidden="true"><div className="po-mold">{Array.from({length:30},(_,i)=><i key={i}/>)}</div><div className="po-orbit"><i/><span>форма</span><span>сфероид</span><span>данные</span></div></div>
          <div className="po-story">{platformStory.map(([title,text],i)=><div key={title}><span>Этап {i+1}</span><h4>{title}</h4><p>{text}</p></div>)}</div>
          <div className="po-proof"><p><span>Подтверждения</span> Патенты RU 2847666 и RU 2865846 · публикации по 3D-культивированию · программа «СфероАнализ»</p><p><span>Развитие</span> Грант «Студенческий стартап» — 1 млн ₽; проект находится в развитии.</p></div>
        </article>

        <article className="po-sphero-case">
          <div><p className="po-eyebrow">Программа для ЭВМ</p><h3>«СфероАнализ»</h3><p className="po-big">Программа разработана для воспроизводимого морфометрического анализа изображений клеточных сфероидов.</p><p>Она объединяет интерактивную сегментацию, измерение площади, эквивалентного диаметра и округлости, поиск выбросов, проверку распределений, сравнение групп и визуализацию.</p><p className="po-certificate"><b>Регистрация:</b> № 2025683553 от 4 сентября 2025 года</p></div>
          <div className="po-interface" role="img" aria-label="Схематичный интерфейс анализа микроскопического изображения"><div className="po-ui-bar"><i/><i/><i/><span>Морфометрия / группа A</span></div><div className="po-ui-body"><div className="po-micrograph"><i/><i/><i/><i/></div><div className="po-chart"><b>Округлость</b>{[84,61,75,92,68].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}<span>n →</span></div></div></div>
        </article>

        <div className="po-ecosystem"><div className="po-eco-intro"><p className="po-eyebrow">Зарегистрированные разработки</p><h3>Разработанные программы для ЭВМ</h3><p>Программы предназначены для анализа экспериментальных данных, организации лабораторной работы и моделирования биологических процессов. Все перечисленные программы зарегистрированы.</p></div>{softwareGroups.map((group,i)=><article className={`po-software g${i+1}`} key={group.title}><span>Программа для ЭВМ</span><h4>{group.title}</h4><p>{group.note}</p><ul>{group.items.map(([name,purpose,number])=><li key={name}><b>{name}</b><span>{purpose}</span><small>Регистрация № {number}</small></li>)}</ul></article>)}</div>
      </section>

      <section className="po-evidence" id="results"><p className="po-eyebrow">Результаты</p><div>{evidence.map(([value,label])=><article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div><p>Также подготовлены научные публикации, лабораторные, цифровые и инженерные прототипы.</p></section>

      <section className="po-process" id="process"><header className="po-process-head"><p className="po-eyebrow">Профессиональный подход</p><h2>Научная задача и понятный инструмент</h2><p>При разработке лабораторных и цифровых инструментов я учитываю не только научную задачу и критерии проверки, но и последовательность действий будущего пользователя. Поэтому работа строится как единый процесс — от изучения контекста до оформления результата.</p></header><h3 className="po-process-subhead">Как строится работа</h3><div className="po-process-grid">{workStages.map(([title,text],i)=><article key={title}><span>Этап {i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="po-result-formats"><h3>Форматы результата</h3><ul>{resultFormats.map(format=><li key={format}>{format}</li>)}</ul></div></section>

      <section className="po-section po-trajectory"><header className="po-section-head"><p className="po-eyebrow">Проектная траектория</p><h2>Развитие исследовательских и программных проектов</h2></header><div>{trajectory.map(([year,text])=><article key={year+text}><time>{year}</time><i/><p>{text}</p></article>)}</div></section>

      <section className="po-skd" aria-labelledby="skd-title"><header><p className="po-eyebrow">Возможное участие</p><h2 id="skd-title">Как могу быть полезен СКД в Екатеринбурге</h2><p>Находясь в Екатеринбурге, я могу совмещать очную работу с университетскими и научными командами города с дистанционной работой проектного офиса.</p></header><div className="po-skd-grid">{skdParticipation.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="po-contact"><p className="po-eyebrow">Контакты</p><h2>Научно-технологические и междисциплинарные проекты</h2><p>Интересующие направления: клеточные модели, лабораторные инструменты, анализ экспериментальных данных и проектирование исследовательского процесса.</p>{projectOfficeProfile.contact ? <a className="po-button light" href={`mailto:${projectOfficeProfile.contact}`}>Написать <Arrow/></a> : <p className="po-contact-note">Подтверждённый публичный контакт будет добавлен позже.</p>}</section>
    </main>
    <footer className="po-footer"><b>{projectOfficeProfile.name}</b><span>Научно-технологические и цифровые проекты</span><Link href="/">Академический профиль <Arrow/></Link></footer>
  </div>;
}
