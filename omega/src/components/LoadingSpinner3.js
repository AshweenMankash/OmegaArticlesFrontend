import React  from 'react'
import Modal from 'react-bootstrap/Modal'


function Example(props) {


  return (
    <>

      <Modal.Body>
        <article
        style={{padding: '20px'}}>
        { props.extraText && (<h4>{props.extraText}</h4>)}
        { !props.extraText && (<h4> Your Query is processing...</h4>)}
            <div  className="spinner-border" role="status">
             <span className="sr-only">Loading...</span>
             </div>
        </article>
        </Modal.Body>

    </>
  );
}


export default Example
