import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";

function Mens()
{
    const [apidata,setdata]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        getData()
    },[])
    
    function getId(pid)
    {
      const data={pid:pid}
      navigate("/item",{state:data})
      console.log(pid)
      
    }
    async function getData()
    {
        var result=await fetch("https://ameson.onrender.com")
        
        // console.log(result)
        var data=await result.json()

        // console.log(data)
        setdata(data)
        console.log(data)
    }
    return(
        <div>

          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          {
            apidata.map((item)=>
          item.pcat=="Men"?
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={item.pimg} style={{width:"100px", height:"100px"}}
            alt='...'code
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{item.pname}</MDBCardTitle>
            <MDBCardTitle>{item.pprice}</MDBCardTitle>
            <MDBCardTitle>{item.pcat}</MDBCardTitle> 
            <MDBCardTitle>{item.pdec}</MDBCardTitle>
            
            <center><MDBBtn onClick={()=>getId(item.pid)} >view{item.pid}</MDBBtn></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>:null
)}

      </MDBRow>
      
            
    </div>)
    
}
export default Mens