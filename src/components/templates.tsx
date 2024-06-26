"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';

type Props = {
    name: string;
};

export default function Template(props: Props) {
    return (
        <Link href={`/template/${props.name}`} className=" bg-[#777777] max-w-sm rounded overflow-hidden shadow-lg m-4">
            {/* <img className="w-full" src="" alt=""> </img> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name == "qcm" ? props.name.toUpperCase() : props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            </div>
    </Link>
    );
}