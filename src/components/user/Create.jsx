import React from 'react'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Create() {


    const { register, control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const registerUser = async (soso) => {
        const response = await axios.post(`${import.meta.env.VITE_BURL}/users`,soso);
        if(response.status === 201){
          navigate('/users');
        }
       
    }



    return (
        <>
            <div className="container">
                <form className='mt-5' onSubmit={handleSubmit(registerUser)}>
                    <div className="form-floating mb-3">
                        <input type="text" {...register("userName")} className="form-control" id="name" placeholder="" />
                        <label htmlFor="name">User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" {...register("email")} className="form-control" id="email" placeholder="" />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" {...register("password")} className="form-control" id="pass" placeholder="" />
                        <label htmlFor="pass">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" {...register("phone")} className="form-control" id="phone" placeholder="" />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <button type="submit" className="btn btn-primary rounded mt-4">Create</button>
                </form>
                <DevTool control={control} />
            </div>

        </>
    )
}
