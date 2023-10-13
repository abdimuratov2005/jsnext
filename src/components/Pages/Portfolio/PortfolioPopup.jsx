import React from 'react';
import Popup from "@/components/Popup/Popup";
import axios from "axios";

async function getPartners() {
    const url = 'https://xn----8sbb1agckqokro3icn.xn--p1ai/wp-json/mapbiz/v1/porfolio/partners/';
    try {
        const res = await axios.get(url);
        return res.data.fields.portfolio_table;

    } catch (error) {
        console.log(error);
        return []; // или возвратите пустой массив в случае ошибки
    }
}

export default async function PortfolioPopup(props) {

    const dataPartners = await getPartners();

    return (
        <Popup>
            <h2 className="text-2xl font-medium">
                Работали разное, работали много, у каждого проекта
                свой бюджет и задача.
            </h2>
            <p className="text-xl w-[70%]">
                Представленый перечень не исчерпывающий, тут только те
                кто запечатлен в нашем пергаменте истории) Некоторые
                работы, к сожалению были преданы забвению.
            </p>
            <div className="h-[60%] overflow-auto">
                <table className="border-collapse w-full select-none">

                    {dataPartners && dataPartners.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="px-4 py-2 border-2 border-redbright-mapbiz">{ item.date }</td>
                                <td className="px-4 py-2 border-2 border-redbright-mapbiz">{ item.service }</td>
                                <td className="px-4 py-2 border-2 border-redbright-mapbiz">{ item.title }</td>
                            </tr>
                        )
                    })}

                </table>
            </div>

        </Popup>
    );
}