import { Input } from "@material-tailwind/react";

function Filtre({movies , SetFiltred}) {
    const HandleTitleSearch = (e)=>{
        const titleRegex =new RegExp(e.target.value , "i")

        const filtred = movies.filter((el)=>{
            return titleRegex.test(el.title)

        })
        SetFiltred(filtred)
    }
    const HandelReatingSearch = (e)=>{
        console.log(e.target.value , typeof e.target.value)
        const filterd =movies.filter((el)=>{
            return el.rating<=parseFloat(e.target.value) && el.rating <= parseFloat(e.target.value)+0.9
        })
        SetFiltred(filterd)
    }
  return (
    <div>
        
     
      <Input color="purple"  type="text" onChange={HandleTitleSearch} placeholder="search with title"/>
      <Input color="purple"  type="text"placeholder="search with reating" onChange={HandelReatingSearch}/>
    </div>
   
  )
}

export default Filtre