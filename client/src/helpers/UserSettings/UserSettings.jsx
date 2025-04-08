import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './UserSettings.scss';

export default function UserSettings() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        userImage: '',
        naam: '',
        nickname: '',
        sex: '',
        telefoon: '',
        description: '',
        status: ''
    });

    const changeUserInfo = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Routes>
            <Route
                path="/settings"
                element={
                    <div>
                        <h2>Change your Profile</h2>
                        <form >
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={changeUserInfo}
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={changeUserInfo}
                                placeholder="Password"
                            />
                            <input
                                type="text"
                                name="naam"
                                value={form.naam}
                                onChange={changeUserInfo}
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                name="nickname"
                                value={form.nickname}
                                onChange={changeUserInfo}
                                placeholder="Nickname"
                            />
                            <input
                                type="text"
                                name="sex"
                                value={form.sex}
                                onChange={changeUserInfo}
                                placeholder="Sex"
                            />
                            <input
                                type="text"
                                name="telefoon"
                                value={form.telefoon}
                                onChange={changeUserInfo}
                                placeholder="Phone"
                            />
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={changeUserInfo}
                                placeholder="Description"
                            />
                            <select
                                name="status"
                                value={form.status}
                                onChange={changeUserInfo}
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <h1>hallo</h1>
                            <button type="submit">Save changes</button>
                        </form>
                    </div>
                }
            />
        </Routes>
    );
}
