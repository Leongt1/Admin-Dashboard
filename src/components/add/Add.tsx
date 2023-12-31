import './add.scss';

import { GridColDef } from '@mui/x-data-grid';

type Props = {
  slug: string,
  columns: GridColDef[],
  setOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  //add new item
  // axios.post('/api/${slug}s', {})
}

const Add = (props: Props) => {
  return (
    <div className='add'>
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter(item => item.field !== 'id' && item.field !== 'img')
            .map(column => (
              <div className="item">
                <label htmlFor={column.field} >{column.headerName}</label>
                <input id={column.field} type={column.type} placeholder={column.field} />
              </div>
            ))
          }
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add