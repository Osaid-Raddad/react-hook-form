import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DevTool } from "@hookform/devtools";
import { useForm } from 'react-hook-form';
export default function Details() {

    const { id } = useParams();
    const { register,handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    const updateUser = async (value) => {
        const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,
            {
                userName: value.userName,
            });
        console.log(response);
        if(response.status === 200){
            navigate('/users');
        }
    }
   
    const getDetails = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
        setValue("userName",data.user.userName);
        setValue("email",data.user.email);
        setValue("phone",data.user.phone);
        console.log(data);
    }

    useEffect(() => {
        getDetails();
    }, [])


    return (
        <div className="container">
            <form className='mt-5' onSubmit={handleSubmit(updateUser)}>
                <div className="form-floating mb-3">
                    <input type="text" {...register("userName")} className="form-control" id="name" placeholder="" />
                    <label htmlFor="name">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" {...register("email")} className="form-control" id="email" placeholder="" disabled/>
                    <label htmlFor="email">Email address</label>
                </div>

                <div className="form-floating">
                    <input type="text" {...register("phone")} className="form-control" id="phone" placeholder="" disabled/>
                    <label htmlFor="phone">Phone</label>
                </div>
                <button type="submit" className="btn btn-primary rounded mt-4">Update</button>
            </form>
            
        </div>

    )
}
