import TrashIcon from '../../assets/icons/trash-2.svg'

function Card(props) {

    return (
      <>
      {props.propUsers.map((ele)=>(
        <div key={ele.id} className='flex items-center gap-4 w-full p-4 rounded-lg shadow-md bg-indigo-900'>
          <div className='flex flex-col gap-1 w-full font-semibold text-white'>
            <p>Nome: {ele.name}<span className='font-normal'></span></p>
            <p>Username: {ele.username}<span className='font-normal'></span></p>
            <p>E-mail: {ele.email}<span className='font-normal'></span></p>
          </div>
          <div>
            <button className='flex items-center'>
              <img src={TrashIcon} alt="Trash" />
            </button>
          </div>
        </div>
      ))}
      </>
    )
  }
  
  export default Card
  