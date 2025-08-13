//import { useState } from 'react'
import NoteList from '../NoteList/NoteList'
import SearchBox from '../SearchBox/SearchBox'
import css from './App.module.css'

export default function App() {

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox /> {/* Компонент SearchBox */}
        {/* Пагінація */}
        <button className={css.button}>Create note +</button> {/* Кнопка створення нотатки */}
      </header>
      
      <NoteList />{/* Додайте умову, щоб компонент NoteList рендерився лише в тому випадку, якщо в колекції нотатків є хоча б один елемент. */}
    </div>
  )
}
