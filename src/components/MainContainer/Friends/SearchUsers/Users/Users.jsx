import React from 'react'
import Paginator from "../../../Common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged} />
        {
            users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} />)
        }
    </div>
}


export default Users;