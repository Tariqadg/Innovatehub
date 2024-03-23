import * as React from "react";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import tableBody from "../list.json"
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Dropdown from "./Dropdown";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";


export default function BasicTable() {
  return (
    <>
      <Dropdown />
      <Grid
        
        container
        spacing={0}
        direction="row"
        sx={{ height: "55dvh", overflow:"scroll" }}
      >
        <Grid xs={2 } sx={{width:"12em"}} >
          <Typography>Brand</Typography>
        </Grid>
        <Grid xs={2}  sx={{width:"12em"}}>
          <Typography>Description</Typography>
        </Grid>
        <Grid xs={2} sx={{width:"6em"}}>
          <Typography>Members</Typography>
        </Grid>
        <Grid xs={2} sx={{width:"12em"}} >
          <Typography>Categories</Typography>
        </Grid>
        <Grid xs={2} sx={{width:"12em"}}>
          <Typography>Tags</Typography>
        </Grid>
        <Grid xs={2} sx={{width:"14em"}}>
          <Typography>Next Meeting</Typography>
        </Grid>
        <Grid xs={1} sx={{width:"7em"}} >
          <Typography>+</Typography>
        </Grid>

        {tableBody.map((row, index) => (
          <Grid spacing={2} container key={index} >
            <Grid xs={2}  sx={{height:"4dvh",width:"12em"}}>
              <Stack direction="row" sx={{height:"4dvh",alignItems:"center"}}>
                
                <Checkbox sx={{height:"2dvh",marginRight:"0.5em"}} />
                <img src={row?.imgsrc} width="14" height="8" alt="" title="" class="img-small"/>
                < Typography sx={{height:"2dvh" ,marginLeft:"0.2em"}}>{row.Brand} </Typography>
              </Stack>
            </Grid>
            <Grid xs={2} sx={{width:"12em"}}>
              <Typography
                sx={{
                  width: "10em",
                  height: "4dvh",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {row.Description}
              </Typography>
            </Grid>
            <Grid xs={2} sx={{width:"6em" ,alignItems:"flex-start"}} >
              
                <AvatarGroup sx={{display:"flex", flexDirection:"row",alignItems:"flex-start"}}>
                  <Avatar sx={{height:"2dvh" ,width:"2dvh"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar sx={{height:"2dvh" ,width:"2dvh"}}
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar sx={{height:"2dvh" ,width:"2dvh"}} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar sx={{height:"2dvh" ,width:"2dvh"}}
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar sx={{height:"2dvh" ,width:"2dvh"}}
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
            
            </Grid>
            <Grid xs={2} sx={{width:"12em"}} >
              <Typography>
                <Stack
                // sx={{height:"2dvh" ,width:"2dvh"}}
                  direction="row"
                  gap={1}
                  sx={{ width: "10em", overflowX: "scroll", p: "0.5em" }}
                >
                  {row.Categories.map((category, index) => (
                    <Chip
                    sx={{height:"1.5em",padding:"0.5em"}}
                      key={index}
                      color={index % 2 === 0 ? "primary" : "success"}
                      label={category}
                    />
                  ))}
                </Stack>
              </Typography>
            </Grid>
            <Grid xs={2} sx={{width:"12em"}}>
              <Stack
                direction="row"
                gap={2}
                sx={{ width: "10em", overflowX: "scroll", p: "0.5em" }}
              >
                {row.Tags.map((tag, index) => (
                  <Chip  sx={{height:"1.5em",padding:"0.5em"}}key={index} label={tag} />
                ))}
              </Stack>
            </Grid>
            <Grid xs={2} sx={{width:"14em "}}>
              <Typography>
                {
                  <Chip
                  sx={{height:"2em",padding:"0.5em"}}
                    key={index}
                    color={"success"}
                    label={row["Next Meeting"]}
                  />
                }
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <div className="flex items-center">
        
        <div className="  flex rounded-lg bg-gray-100 text-center justify-between  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300">
            <button className= "rounded-md m-1 mx-2 opacity-85">
              Adding a bill
            </button>
        </div>
        <div className=" flex rounded-lg bg-gray-100 text-center justify-between  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300">
            
            <button className= " flex rounded-md m-1 mx-2 opacity-85">
            <HiOutlineArchiveBox className="h-5 w-5 m-1"/>Archive
            </button>
        </div>
        <div className=" flex rounded-lg bg-gray-100 text-center justify-between  hover:bg-gray-100 hover:shadow-md  hover:border-gray-300">
           
            <button className= " flex rounded-md m-1 mx-2 text-red-500 opacity-85">
            < MdDeleteOutline  className="h-5 w-5 m-1 text-red-500" />delete
            </button>
        </div>
        </div>

    </>
    
  );
}
