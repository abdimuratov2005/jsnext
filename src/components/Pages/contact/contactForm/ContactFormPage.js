'use client'
import {useForm} from "react-hook-form";
import React from "react";
import InputMask from "react-input-mask";

export default function ContactFormPage(props) {
    const {register, handleSubmit, watch, reset, formState: {errors, isSubmitSuccessful}} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <section className={`flex justify-center items-center py-[163px]`}>
            <div className={`flex justify-center items-center flex-col max-w-[825px]`}>
                <img src='/img/contact/formTop.png' alt=""/>
                <form style={{backgroundImage: `url(/img/contact/contactFon.png)`}}
                      className={`bg-center bg-cover w-full `} onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-black flex flex-col ml-2 '>
                        <input
                            className='h-8 ml-2 max-w-[200px] bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'
                            name='name' placeholder='Ваше Имя'
                            defaultValue="" {...register("name", {required: true})} />
                        {errors?.name && <span className={'text-redbright-mapbiz ml-2'}>Вы не представились:)</span>}
                    </label>
                    <label className='text-black flex flex-col ml-2 '>
                        <InputMask placeholder='Telephone No' mask="+7 (999)-999-99-99" type='phone'
                                   className={'h-8 mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'} {...register("telephone", {required: true})} />
                        {errors?.telephone && <span className={'text-redbright-mapbiz ml-2'}>Вы не указали телефон</span>}
                    </label>
                    <label htmlFor="email" className='ml-2 text-black flex flex-col'>
                        <input
                            type='email'
                            className=' h-8 mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'
                            name='email' placeholder='Email' defaultValue="" {...register("email", {required: true})} />
                        {errors?.email && <span className={'text-redbright-mapbiz ml-2'}>Вы не указали почту</span>}

                    </label>
                    <label className='text-black flex flex-col ml-2 '>
                        <textarea
                            className='mr-7  resize-none h-[150px] ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'
                            name='textareac' placeholder='Ваше Сообщение'
                            defaultValue="" {...register("textareac", {required: true})} />
                    </label>
                    <div className={'flex justify-end'}>
                        <button
                            className={'ml-5 mr-7 bg-[#1e1e1e] text-white py-3 px-8 border border-white rounded-[24px]'}
                            type={"submit"}>Отправить
                        </button>
                    </div>

                    <label htmlFor="email"
                           className='mt-8 ml-2 text-black flex flex-col mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'></label>
                    <label htmlFor="email"
                           className='mt-8 ml-2 text-black flex flex-col mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'></label>
                    <label htmlFor="email"
                           className='mt-8 ml-2 text-black flex flex-col mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'></label>
                    <label htmlFor="email"
                           className='mt-8 ml-2 text-black flex flex-col mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'></label>
                    <label htmlFor="email"
                           className='mt-8 ml-2 text-black flex flex-col mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'></label>
                    <label htmlFor="email"
                           className='mt-8 ml-2 text-black flex flex-col mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'></label>
                    <label htmlFor="email"
                           className='mt-8 ml-2 text-black flex flex-col mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'></label>
                    <label htmlFor="email"
                           className='mt-8 ml-2 text-black flex flex-col mr-7 ml-2 bg-transparent outline-0 border-b border-[#616161] placeholder:text-black'></label>
                </form>
                <img src='/img/contact/formBottom.png'></img>
            </div>
        </section>
    );
}

