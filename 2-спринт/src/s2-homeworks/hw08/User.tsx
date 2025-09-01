import React from 'react'
import { UserType } from './HW8'
import s from './HW8.module.css'

// types
type UserPropsType = {
    user: UserType
}

const User: React.FC<UserPropsType> = ({ user }) => {
    return (
        <tr className={s.item}>
            <td id={'hw8-user-name-' + user._id} className={s.nameCol}>
                {user.name}
            </td>
            <td id={'hw8-user-age-' + user._id}>
                {user.age}
            </td>
        </tr>
    )
}

export default User
