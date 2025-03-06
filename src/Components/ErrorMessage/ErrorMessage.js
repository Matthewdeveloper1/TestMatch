import './ErrorMessage.css'
import vector from '../../Images/vector.png'

export const ErrorMessage = () => (
  <div className="errorMessage">
    <img className='vector' src={vector} alt='warning' />
    Ошибка: не удалось загрузить информацию
  </div>
);