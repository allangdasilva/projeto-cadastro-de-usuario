import TrashIcon from '../../assets/icons/trash-2.svg'

function Card(props) {

    return (
      <>
      {props.propUsers.map((ele)=>(
        <div key={ele.id} className='flex items-center gap-4 w-full p-4 rounded-lg shadow-md bg-indigo-900 max-[400px]:flex-col' >
          <div className='flex flex-col gap-1 w-full text-sm font-semibold break-words text-white max-[400px]:text-center'>
            <p>Nome: <span className='font-normal'>{ele.name}</span></p>
            <p>Username: <span className='font-normal'>{ele.username}</span></p>
            <p>E-mail: <span className='font-normal'>{ele.email}</span></p>
          </div>
          <div>
            <button className='flex items-center hover:rotate-12 hover:scale-125 transition-all' 
            onClick={()=> props.propDeleteUser(ele.id)}>
              <img src={TrashIcon} alt="Trash" />
            </button>
          </div>
        </div>
      ))}
      </>
    )
}
  
  export default Card
  