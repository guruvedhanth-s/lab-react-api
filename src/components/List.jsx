import "../App.css"
function List(props) {
    const{title, img, description,author} = props

  return (
    <div>
        <h2 className='bookname'>{title}</h2>
        <div className='container'>
          <img src={img} alt="" />
          <div className="description">{description}</div>
        </div>
        <h4 className='authorname'>{author.map((item,index) => (<div className='author' key={index}>{item}</div>))}</h4>
        <hr />
    </div>
  )
}

export default List