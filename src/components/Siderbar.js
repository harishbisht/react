import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact'; 
import {NavLink} from 'react-router-dom'; import {} from 'react-router-dom';

const Sidebar=()=>{
        return (
            <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
                <CDBSidebar textColer="#fff" backgroundColor="black">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    </CDBSidebarHeader>
                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>

                            <NavLink exact to="/webapi/user" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="th">
                                    User
                                </CDBSidebarMenuItem>
                            </NavLink>
                            
                            <NavLink exact to="/post" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="book">
                                    Post
                                </CDBSidebarMenuItem>
                            </NavLink>
                            
                            <NavLink exact to="/comments" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">
                                    Comments
                                </CDBSidebarMenuItem>
                            </NavLink>
                            

                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                    <CDBSidebarFooter style={{textAlign:'center'}}>
                        <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        )
    }
export default Sidebar;