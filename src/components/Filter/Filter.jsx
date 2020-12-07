import classes from './Filter.module.css'
function Filter() {
  return <div className={classes.filter}>
      <h2>Фильтры</h2>
      <input type="text" className={classes.filter__input}placeholder="Название"/>
      <p>Порт</p>
<p>{`Выбраны ${'2'}`}</p>
<form className={classes.checkbox}>
<label> <input  type="checkbox" />  {'Port Canaveral'}</label>
<label> <input  type="checkbox" />  {'Port Canaveral'}</label>
<label> <input  type="checkbox" />  {'Port Canaveral'}</label>
  </form> 
<p>Тип</p>
<form className={classes.radio}>
<label> <input  type="radio" />  {'Barge'}</label>
<label> <input  type="radio" />  {'Cargo'}</label>
<label> <input  type="radio" />  {'High Speed Crapt'}</label>
<label> <input  type="radio" />  {'Tug'}</label>
  </form> 
  </div>;
}

export default Filter;
