import React, { useEffect, useState } from 'react';

export default function RandomActivity():JSX.Element {
    interface Activity {
        activity: string;
        type: string;
        participants: number;
        price: number;
        link: string;
        key: string;
        accessibility: number;
    }
    const initialValue: Activity = {
        activity: '',
        type: '',
        participants: 0,
        price: 0,
        link: '',
        key: '',
        accessibility: 0
    };
    const [activity, setActivity] = useState<Activity>(initialValue);
    useEffect(() => {
    fetch('https://www.boredapi.com/api/activity')
    .then((res : Response) => res.json())
    .then((obj: Activity) => {
     setActivity(obj);
    });
    }, []);
  return (
    <div>
        <h1>{activity.activity}</h1>
        <p>Участники: {activity.participants} Цена: {activity.price}</p>
        {activity.link ? <a href={activity.link}>К событию</a> : ''}
    </div>
  );
}
