import { useState } from "react";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Avatar from 'react-avatar-edit';


function Image(){

    const[dialogs,setdialogs] = useState(false);
    const[imgCrop,setImageCrop] = useState(false);
    const[storeImage,setStoreImage]=useState([]);


    const profileImageShow = storeImage.map(item => item.imgCrop);

    const saveImage =()=>{
     setStoreImage([...storeImage],imgCrop);
     setdialogs(false);
    }

    const onCrop =(e) =>{

        setImageCrop(e);
    }

    const onClose=() =>{
        setImageCrop(null);
    }
    return(
        <div>
<div className="profile-img text-center p-4">
    <div className="div">
        <img style={{width :"200px",height:"200px",
        borderRadius:"50%",objectFit:"cover"}} 
        src={profileImageShow.length?profileImageShow:imgCrop} 
        
        alt="profile" onClick={() => setdialogs(true)}/>
    
        <Dialog  visible={dialogs} header={() =>(<p htmlFor="" className="text-2x1 font-semibold textColor">Update Profile Picture </p>)} onHide={() => setdialogs(false)}
    style={{ width: '50vw' }} >
  
 
    <div className="confirmation-content flex flex-column align-items-center">
      
      <div className=" flex flex-column align-items-center mt-5 w-12">

        <div className="flex flrx-column justify-content-around w-12 mt-4">

        <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} ></Avatar>
  
        
        <Button lable="Save" icons="pi pi-cheak" onClick={saveImage}>Save</Button>


        </div>
      </div>
    </div>
    </Dialog>
    </div>

</div>
        </div>
    )
}

export default Image;