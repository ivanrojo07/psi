import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from '@inertiajs/inertia-react';
export default function Show(props){
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">{props.title}</h2>
            }
        >
            <Head title="Calendar" />
            <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" locale="es" height={500}/>
        </Authenticated>
    )
}