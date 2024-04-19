import { useSelector, useDispatch } from "react-redux"
import { changeName, descriptionChange } from "../store/control/formSlice"

const CourseForm = () => {
  const dispatch = useDispatch()
  const { name, description, cost } = useSelector((state) => {
    return{
        name: state.form.name,
        decription: state.form.description,
        cost: state.form.cost
    }
  })

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(name + description + cost)
  }
  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input className="input is-expanded" value={name} onChange={(event) => (dispatch(changeName(event.target.value)))}/>
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea className="input is-expanded" value={description} onChange={(event) => {dispatch(descriptionChange(event.target.value))}} />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input className="input is-expanded" type='number' />
          </div>
        </div>
        <div className="field">
            <button className='button is-primary' onClick={handelSubmit} >Ekle</button>
          </div>
      </form>
    </div>
  )
}

export default CourseForm