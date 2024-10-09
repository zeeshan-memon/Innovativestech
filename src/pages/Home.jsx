import React, { useState, useEffect } from 'react';
import { Avatar, List, Button, Drawer } from 'antd';
import {setLoading } from '../features/configs'
import { addAllUsers, deleteUser} from '../features/user'
import {  useDispatch, useSelector } from 'react-redux'
import UsersForm from './usersForm';

const Home = () => {

const data = useSelector((state) => state.users.users)
const [page, setpage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
const [open, setOpen] = useState(false);
const [userData, setUserData] = useState({});

const dispatch = useDispatch()

const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let cancel = false;

    const fetchData = async () => {
        dispatch(setLoading(true))
        
      try {
        const response = await fetch(`https://6706b9f6a0e04071d2280c4a.mockapi.io/api/v1/users`);
        const result = await response.json();
        setTotalPages(result.total_pages)
        if (!cancel) {
          dispatch(addAllUsers(result))
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        dispatch(setLoading(false))
      }
    };

    fetchData();

    return () => {
        cancel =true
        // setData([]); // Cleanup function
    };
  }, [page]);

const editUser = (user) =>{
    setUserData(user)
    showDrawer()
}
const createUser = () =>{
    setUserData({})
    showDrawer()
}

const removeUser = (id) =>{
   dispatch(deleteUser(id))
}


  return (
    <>
    <div style={{display:"flex", justifyContent:"end", margin:"30px"}}><Button type="primary" onClick={createUser}>New User</Button></div>
      <List
      style={{overflowY:"scroll", maxHeight:"80vh"}}
       size="large"
       itemLayout="horizontal"
        pagination={{
          position :"bottom",
          align :"center",
        //   onChange: (page) => {
        //     console.log(page);
        //     setpage(page)
        //   },
          pageSize: 10,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
          actions={[<a key="list-loadmore-edit" onClick={()=>editUser(item)}>edit</a>, <a key="list-loadmore-more" onClick={()=>removeUser(item.id)}>Delete</a>]}>
            <List.Item.Meta
              avatar={<Avatar size="large" src={item.avatar} />}
              title={item.name}
              description={item.address}
            />
          </List.Item>
        )}
      />

<Drawer title="Basic Drawer" onClose={onClose} open={open} destroyOnClose>
       <UsersForm userData={userData}/>
       </Drawer>
    </>
  );
};
export default Home;