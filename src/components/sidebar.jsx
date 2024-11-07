import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../assets/logo.svg';
import Profile from '../assets/profile.svg';
import logout from '../assets/logout.svg';
import { Link,useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, isMobile }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    width: '100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open && !isMobile ? 0 : isMobile ? 0 : `-${drawerWidth}px`,
    ...(open && !isMobile && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
  marginLeft: open ? drawerWidth : 0,
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  const [selectedSegment, setSelectedSegment] = React.useState(localStorage.getItem('selectedSegment') || 'KYC');
  const [title, setTitle] = React.useState(localStorage.getItem('selectedTitle') || 'Dashboard');
 
  const isMobile = useMediaQuery('(max-width:786px)');
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuToggle = (segment, path, title) => {
    setSelectedSegment(segment);
    setTitle(title);
    localStorage.setItem('selectedSegment', segment);
    localStorage.setItem('selectedTitle', title);

    if (path) {
      navigate(path); // Navigate to the specified path
    }
  };
  
  const NAVIGATION = [
    { segment: 'KYC', title: 'KYC', icon: Profile, path: 'kyc' },
    // {
    //   segment: 'pending Events',
    //   title: 'Pending Events',
    //   icon: pendingEvents,
    //   children: [
    //     { segment: 'Pending Approval', title: 'Pending Approval', icon: PendingApproval },
    //     { segment: 'Approved Events', title: 'Approved Events', icon: approvedEvents },
    //   ],
    // },
    // { segment: 'Upcoming Events', title: 'Upcoming Events', icon: UpcomingEvents },
    // { segment: 'Past Events', title: 'Past Events', icon: PastEvents },
    // { segment: 'Payout Requests', title: 'Payout Requests', icon: Payout },
    // { segment: 'Reports', title: 'Reports', icon: report },
    // { segment: 'Users', title: 'Users', icon: User },
  ];
  const renderNavItems = (items) => {
    return items.map((item) => {
      if (item.children) {
        // return (
        //   <div key={item.segment}>
        //     <ListItem
        //       sx={{ padding: '5px 10px', width: 'max-content', gap: '12px' }}
        //       button
        //       onClick={() => handleMenuToggle(item.segment, item.path, item.title)}
        //     >
        //       <ListItemIcon sx={{ minWidth: '0px' }}>
        //         <img src={item.icon} alt={item.title} />
        //       </ListItemIcon>
        //       <ListItemText
        //         primaryTypographyProps={{
        //           fontFamily: 'Montserrat',
        //           fontSize: '14px',
        //           fontWeight: '400',
        //           color: 'rgba(0, 0, 0, 1)',
        //         }}
        //         primary={item.title}
        //       />
        //     </ListItem>
        //     {openMenu === item.segment && (
        //       <List component="div" disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: '19px' }}>
        //         {item.children.map((child) => (
        //           <ListItem
        //             button
        //             key={child.segment}
        //             sx={{ paddingLeft: '20px', padding: '5px 10px', width: 'max-content', gap: '10px' }}
        //             component={Link}
        //             to={child.path}
        //             onClick={() => setTitle(child.title)} // Update title for child items
        //           >
        //             <ListItemIcon sx={{ minWidth: '0px' }}>
        //               <img src={child.icon} alt={child.title} />
        //             </ListItemIcon>
        //             <ListItemText
        //               primaryTypographyProps={{
        //                 fontFamily: 'Montserrat',
        //                 fontSize: '14px',
        //                 fontWeight: '400',
        //                 color: 'rgba(119, 119, 119, 1)',
        //               }}
        //               primary={child.title}
        //             />
        //           </ListItem>
        //         ))}
        //       </List>
        //     )}
        //   </div>
        // );
      }
      return (
        <>
        <ListItem
        sx={{
          display:'flex',
          flexGrow: 1 ,
          padding: '12px 16px',
          gap: '12px',
          borderRadius: '8px',
          backgroundColor: selectedSegment === item.segment ? 'rgba(19, 158, 213, 0.2)' : 'transparent',
          '&:hover': {
            backgroundColor: 'rgba(19, 158, 213, 0.2)',
            '& .MuiTypography-root': { color: 'rgba(19, 158, 213, 1)' },
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: 'rgba(19, 158, 213, 0.2)',
            '& .MuiTypography-root': { color: 'rgba(19, 158, 213, 1)' },
          },
        }}
        button
        key={item.segment}
        selected={selectedSegment === item.segment}
        onClick={() => handleMenuToggle(item.segment, item.path, item.title)}
      >
        <ListItemIcon sx={{ minWidth: '0px' }}>
          <img src={item.icon} alt={item.title} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            fontFamily: 'Urbanist',
            fontSize: '14px',
            fontWeight: '400',
            color: selectedSegment === item.segment ? 'rgba(19, 158, 213, 1)' : 'rgba(226, 226, 226, 1)',
          }}
          primary={item.title}
        />
      </ListItem>

      </>
      );
    });
  };
  return (
    <Box sx={{ display: 'flex', height: '100vh' , width:'100%'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open && !isMobile}
      sx={{
        backgroundColor: 'rgba(241, 241, 241, 1)',
        color: 'black',
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: '24px',
      lineHeight:'36px',
    height:'80px',
    paddingLeft:'8px',
     display:'flex',
       justifyContent:'center',
   }}
      
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && !isMobile && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ color: 'black', fontFamily: 'Urbanist', fontWeight: 600,fontSize:'24px', lineHeight: '36px' }} noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: "rgba(50, 50, 50, 1)",
            boxSizing: 'border-box',
            ...(isMobile && {
              position: 'absolute',
             
              zIndex: theme.zIndex.drawer + 1,
            }),
          },
        }}
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={open}
        onClose={isMobile ? handleDrawerClose : undefined}
      >
        <DrawerHeader sx={{ justifyContent:'center',alignItems:'center', paddingTop:'40px', paddingBottom:'60px'}}>
        <img  src={Logo} alt="Logo" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        
      
        </DrawerHeader>

        <div style={{display:'flex', flexDirection:'column' ,height:'100%',gap:'80%',}}>
     <List sx={{ display: 'flex', flexDirection: 'column', padding: '0 10px',}}>
        {renderNavItems(NAVIGATION)}
      </List>
      <ListItem
          sx={{
            marginLeft:'10px',
            marginRight:'10px',
        
            display: 'flex',
            alignItems:'flex-end',
          
            gap: '12px',
            borderRadius: '8px',
          }}
          button
  
        >
          <ListItemIcon sx={{ minWidth: '0px' }}>
            <img src={logout} alt="Logout"/>
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontFamily: 'Urbanist',
              fontSize: '14px',
              fontWeight: '400',
              color: 'rgba(255, 63, 63, 1)',
            }}
          />
        </ListItem>
    </div>
      </Drawer>
      <Main sx={{overflow: 'auto', paddingTop:'120px' ,    width: '80%'}} open={open && !isMobile} isMobile={isMobile}>
        {/* <DrawerHeader /> */}
       {children}
      </Main>
    </Box>
  );
}
