import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import List from './List';
import UserItem from './UserItem';

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id} onClick={() => {}} />}
        />
    );
};

export default UserPage;