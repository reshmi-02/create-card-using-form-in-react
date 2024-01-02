import React, { useState } from 'react'
import './cardform.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
const Cardform = () => {
    const [name, setname] = useState();
    const [pri, setprice] = useState();
    const [id, setid] = useState();
    const [image, setimage] = useState();
    let [arr, setarr] = useState([]);
    const[isedit,setedit]=useState(false);
    const[index,setindex]=useState();
   
    
    const handle = (e) => {
        if (e.target.name === "pna") {
            console.log(e.target.value, e.target.name);
            setname(e.target.value)
        }
        else if (e.target.name === "ppri") {
            console.log(e.target.value, e.target.name);
            setprice(e.target.value)
        }
        else if (e.target.name === "pid") {
            console.log(e.target.value, e.target.name);
            setid(e.target.value)
        }
        else if (e.target.name === "images") {
            console.log(e.target.value, e.target.name);
            setimage(e.target.value)
        }

    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if(isedit){
        let obj = { name, pri, id, image};
        let x=arr.map((e)=>{
            return e.id===index?obj:e
        })
        console.log(x);
        setarr(x)
        setedit(false)
        }
        else{
            let obj = { name, pri, id, image};
            
                 setarr([...arr, obj])
        }
 

        setid(" ");
        setname(" ")
        setprice(" ");
        setimage(" ")
        

    }
    console.log(arr);

    const del = (val) => {
        console.log(val);
        let x = arr.map((e) => {
            return e.id === val ? e = "" : e
        })
        console.log(x);
        let arr1 = []
        let y = x.map((e) => {
            return e !== '' ? arr1.push(e) : ""
        })
        console.log(y);
        console.log(arr1);

        let z = arr = arr1
        console.log(z);


        setarr(z)

    }


    const edit = (values) => {
        console.log(values);
        setedit(true);
        setindex(values);
        let obj=arr.find((val,i)=>{
            return val.id===values
        })
        setname(obj.name)
        setid(obj.id)
        setprice(obj.pri)
        setimage(obj.image)
       
    }
    return (
        <div className='card-section'>
            <div className='card-container'>

                <div className='card-row' >
                    <form onSubmit={handlesubmit}>
                        <div className='form-col'>
                            <div className='form-input'>
                                <label>product Id:</label>
                                <input tyep="number" value={id} name="pid" placeholder=' product id' onChange={handle}></input>
                            </div>
                            <div className='form-input'>
                                <label>Product name:</label>
                                <input type="text" value={name} name="pna" placeholder='product name' onChange={handle}></input>
                            </div>
                            <div className='form-input'>
                                <label>Product price:</label>
                                <input type="number" value={pri} name="ppri" placeholder='price' onChange={handle}></input>
                            </div>
                            <div className='form-input'>
                                <label>image:</label>
                                <input type="text" value={image} name="images" placeholder='paste' onChange={handle}></input>
                            </div>
                            <div className='form-submit'>
                                <div className='form-inner-btn'>
                                    <button >submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='product'>

                        {
                            arr.map((value, i) => {
                                return (
                                    <div key={i} className='card-col'>
                                        <div className='card-card'>
                                            <div className='card-image'>
                                                <img src={value.image} alt="" />
                                            </div>
                                            <h3>{value.name}</h3>

                                            <p>{value.pri} lakh</p>

                                            <div className='card-icon'>
                                                <div className='icons'>
                                                    <AiFillEdit onClick={()=>edit(value.id)} className='inner-icons' />
                                                </div>
                                                <div className='icons'>
                                                    <AiFillDelete onClick={() => del(value.id)} className='inner-icons' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )

                            })

                        }

                    </div>
                </div>
            </div>
        </div>
    )

}


export default Cardform