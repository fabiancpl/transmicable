import './button.css';

function Button(props: any){
  return(
    <>
      <div>
        <button className="button" onClick={props.action}>
          {String(props.text).toUpperCase()}
        </button>
      </div>
    </>
  )
}

export default Button